<?php

namespace MelisModuleConfig\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ChoiceQuestion;
use Symfony\Component\Console\Question\Question;

class MakeServiceCommand extends Command
{
    protected static $defaultName = 'make:service';

    private $modulesDir;

    public function __construct(string $modulesDir)
    {
        parent::__construct();
        $this->modulesDir = $modulesDir;
    }

    protected function configure()
    {
        $this->setDescription('Creates a new service in a specified module.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $helper = $this->getHelper('question');

        $serviceQuestion = new Question('Please enter the name of the service without "Service": ');
        $serviceName = $helper->ask($input, $output, $serviceQuestion);

        $modules = array_filter(glob($this->modulesDir . '/*'), function ($dir) {
            return is_dir($dir) && basename($dir) !== 'MelisSites';
        });
        $modules = array_merge($modules, array_filter(glob($this->modulesDir . '/MelisSites/*'), 'is_dir'));
        $moduleNames = array_map('basename', $modules);

        if (empty($moduleNames)) {
            $output->writeln('<error>No modules found in the modules directory.</error>');
            return Command::FAILURE;
        }

        $moduleQuestion = new ChoiceQuestion(
            'Please select the module where the service should be created:',
            $moduleNames
        );
        $moduleQuestion->setErrorMessage('Module %s is invalid.');

        $selectedModule = $helper->ask($input, $output, $moduleQuestion);


        $targetDir = sprintf('%s/%s/src/%s/Service', $this->modulesDir, $selectedModule, $selectedModule);
        $filePath = sprintf('%s/%sService.php', $targetDir, $serviceName);

        // Create the necessary directories if they do not exist
        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
            $output->writeln("<info>Created directory: $targetDir</info>");
        }

        // Create the service file with a basic template
        $serviceContent = <<<PHP
            <?php

            namespace $selectedModule\\Service;

            use MelisCore\Service\MelisGeneralService;

            class {$serviceName}Service extends MelisGeneralService
            {
               
                public function index()
                {
                    // Do something
                }
            }
            PHP;

        if (file_put_contents($filePath, $serviceContent) !== false) {
            $output->writeln("<info>Service '$serviceName' created successfully in module '$selectedModule' at $filePath</info>");
        } else {
            $output->writeln("<error>Failed to create service '$serviceName' in module '$selectedModule'.</error>");
            return Command::FAILURE;
        }
        // Update the module configuration file
        $configPath = sprintf('%s/%s/config/module.config.php', $this->modulesDir, $selectedModule);
        if (file_exists($configPath)) {
            $configContent = file_get_contents($configPath);
        } else {
            $configContent = "<?php\n\nreturn [\n];\n";
            file_put_contents($configPath, $configContent);
        }

        // Search for the 'service_manager' key in the config file
        $pattern = '/(\'service_manager\'\s*=>\s*\[\s*\'aliases\'\s*=>\s*\[\s*)([^\]]*)/s';
        if (preg_match($pattern, $configContent, $matches)) {
            $newServiceEntry = "            '{$serviceName}Service' => \\$selectedModule\\Service\\{$serviceName}Service::class,";
            $newConfigContent = str_replace($matches[1], "$matches[1]\n$newServiceEntry", $configContent);
        } else {
            $newServiceEntry = <<<PHP
            'service_manager' => [
                'aliases' => [
                    '{$serviceName}Service' => \\$selectedModule\\Service\\{$serviceName}Service::class,
                ],
            ],
            PHP;
            $newConfigContent = preg_replace('/return\s*\[\s*/', "return [\n    $newServiceEntry\n", $configContent);
        }

        // Write the updated config back to the file
        if (file_put_contents($configPath, $newConfigContent) !== false) {
            $output->writeln("<info>Updated config file: $configPath</info>");
        } else {
            $output->writeln("<error>Failed to update config file: $configPath</error>");
            return Command::FAILURE;
        }

        return Command::SUCCESS;
    }
}
