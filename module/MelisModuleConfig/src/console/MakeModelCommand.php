<?php

namespace MelisModuleConfig\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ChoiceQuestion;
use Symfony\Component\Console\Question\Question;

class MakeModelCommand extends Command
{
    protected static $defaultName = 'make:model';

    private $modulesDir;

    public function __construct(string $modulesDir)
    {
        parent::__construct();
        $this->modulesDir = $modulesDir;
    }

    protected function configure()
    {
        $this->setDescription('Creates a new model in a specified module.');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $helper = $this->getHelper('question');

        $modelQuestion = new Question('Please enter the name of the model without "Model": ');
        $modelName = $helper->ask($input, $output, $modelQuestion);


        $tableQuestion = new Question('Please enter the name of the table : ');
        $tableName = $helper->ask($input, $output, $tableQuestion);

        $primaryQuestion = new Question('Please enter the name of the primary key : ');
        $primaryName = $helper->ask($input, $output, $primaryQuestion);

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
            'Please select the module where the model should be created:',
            $moduleNames
        );
        $moduleQuestion->setErrorMessage('Module %s is invalid.');

        $selectedModule = $helper->ask($input, $output, $moduleQuestion);


        $targetDir = sprintf('%s/%s/src/%s/Model/Tables', $this->modulesDir, $selectedModule, $selectedModule);
        $filePath = sprintf('%s/%sTable.php', $targetDir, $modelName);

        // Create the necessary directories if they do not exist
        if (!is_dir($targetDir)) {
            mkdir($targetDir, 0777, true);
            $output->writeln("<info>Created directory: $targetDir</info>");
        }

        // Create the model file with a basic template
        $modelContent = <<<PHP
            <?php

            namespace $selectedModule\\Model\\Tables;

            use MelisCore\Model\Tables\MelisGenericTable;
            use Laminas\Db\Sql\Expression;
            use Laminas\Db\Sql\Predicate\Like;
            use Laminas\Db\Sql\Predicate\PredicateSet;
            use Laminas\Db\TableGateway\TableGateway;

            class {$modelName}Table extends MelisGenericTable
            {
                /**
                 * Model table
                 */
                const TABLE = '{$tableName}';

                /**
                 * Table primary key
                 */
                const PRIMARY_KEY = '{$primaryName}';

                public function __construct()
                {
                    \$this->idField = self::PRIMARY_KEY;
                }

                public function getList(\$start = null, \$limit = null, \$searchKeys = [], \$searchValue = null, \$orderKey = null, \$order = 'ASC', \$langId = 1, \$count = false, \$logCronStatus = '', \$logCronType = '')
                {
                    \$select = \$this->getTableGateway()->getSql()->select();

                    \$slct = ['*', 'DT_RowId' => new Expression(\$this->getTableGateway()->getTable() . '.' . \$this->idField.'')];
                    if (\$count) {
                    \$slct = [new Expression('COUNT(' . \$this->getTableGateway()->getTable() . '.' . \$this->idField . ') As totalRecords')];
                    }  

                    \$select->columns(\$slct);



                    if (!empty(\$searchValue)){

                        \$search = [];
                        foreach (\$searchKeys As \$col)
                            \$search[\$col] = new Like(\$col, '%'.\$searchValue.'%');

                        \$filters = [new PredicateSet(\$search, PredicateSet::COMBINED_BY_OR)];

                        \$select->where(\$filters);
                    }

                    if(!empty(\$logCronStatus)){
                        \$select->where('status = "'.\$logCronStatus.'"');
                    }
                    if(!empty(\$logCronType)){
                        \$select->where('name = "'.\$logCronType.'"');
                    }

                    if (\$orderKey == \$this->idField)
                        \$orderKey = 'DT_RowId';

                    if (!is_null(\$orderKey) && !\$count)
                        \$select->order(\$orderKey.' '.\$order);

                    if (!is_null(\$start))
                        \$select->offset((int) \$start);

                    if (!is_null(\$limit))
                        \$select->limit((int) \$limit);

                    if (!\$count) 
                    \$select->group('DT_RowId');

                    \$resultSet = \$this->getTableGateway()->selectWith(\$select);

                    return \$resultSet;
                }

            }
            PHP;

        if (file_put_contents($filePath, $modelContent) !== false) {
            $output->writeln("<info>Model '$modelName' created successfully in module '$selectedModule' at $filePath</info>");
        } else {
            $output->writeln("<error>Failed to create model '$modelName' in module '$selectedModule'.</error>");
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
            $newModelEntry = "            '{$modelName}Table' => \\$selectedModule\\Model\\Tables\\{$modelName}Table::class,";
            $newConfigContent = str_replace($matches[1], "$matches[1]\n$newModelEntry", $configContent);
        } else {
            $newModelEntry = <<<PHP
            'service_manager' => [
                'aliases' => [
                    '{$modelName}Table' => \\$selectedModule\\Model\\Tables\\{$modelName}Table::class,
                ],
            ],
            PHP;
            $newConfigContent = preg_replace('/return\s*\[\s*/', "return [\n    $newModelEntry\n", $configContent);
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
