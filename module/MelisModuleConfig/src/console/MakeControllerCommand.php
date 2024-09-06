<?php
namespace MelisModuleConfig\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ChoiceQuestion;
use Symfony\Component\Console\Question\Question;

class MakeControllerCommand extends Command
{
    protected static $defaultName = 'make:controller';

    private $modulesDir;

    public function __construct(string $modulesDir)
    {
        parent::__construct();
        $this->modulesDir = $modulesDir;
    }

    protected function configure()
    {
        $this->setDescription('Creates a new controller in a specified module.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $helper = $this->getHelper('question');

        $controllerQuestion = new Question('Please enter the name of the controller without "Controller": ');
        $controllerName = $helper->ask($input, $output, $controllerQuestion);

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
            'Please select the module where the controller should be created:',
            $moduleNames
        );
        $moduleQuestion->setErrorMessage('Module %s is invalid.');

        $selectedModule = $helper->ask($input, $output, $moduleQuestion);


        $targetDir = sprintf('%s/%s/src/%s/Controller', $this->modulesDir, $selectedModule, $selectedModule);
        $filePath = sprintf('%s/%sController.php', $targetDir, $controllerName);

        // Create the necessary directories if they do not exist
        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
            $output->writeln("<info>Created directory: $targetDir</info>");
        }

        // Create the controller file with a basic template
        $controllerContent = <<<PHP
            <?php

            namespace $selectedModule\\Controller;

            use Laminas\Session\Container;
            use Laminas\View\Model\JsonModel;
            use Laminas\View\Model\ViewModel;
            use MelisCore\Controller\MelisAbstractActionController;

            class {$controllerName}Controller extends MelisAbstractActionController
            {
               
                public function indexAction()
                {
                    // Do something
                }
            }
            PHP;

        if (file_put_contents($filePath, $controllerContent) !== false) {
            $output->writeln("<info>Controller '$controllerName' created successfully in module '$selectedModule' at $filePath</info>");
        } else {
            $output->writeln("<error>Failed to create controller '$controllerName' in module '$selectedModule'.</error>");
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
 
         // Search for the 'controllers' key in the config file
         $pattern = '/\'controllers\'\s*=>\s*\[\s*\'invokables\'\s*=>\s*\[\s*(.*?)\s*\],\s*\],/s';
         if (preg_match($pattern, $configContent, $matches)) {
             $newControllerEntry = "            '$selectedModule\\Controller\\$controllerName' => \\$selectedModule\\Controller\\{$controllerName}Controller::class,";
             $newConfigContent = str_replace($matches[1], "$matches[1]\n$newControllerEntry", $configContent);
         } else {
             $newControllerEntry = <<<PHP
            'controllers' => [
                'invokables' => [
                    '$selectedModule\\Controller\\$controllerName' => \\$selectedModule\\Controller\\{$controllerName}Controller::class,
                ],
            ],
            PHP;
             $newConfigContent = preg_replace('/return\s*\[\s*/', "return [\n    $newControllerEntry\n", $configContent);
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