<?php
namespace MelisModuleConfig\Console;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputOption;

class DeleteMelisCacheCommand extends Command
{
    protected static $defaultName = 'delete-melis-cache';

    private $cacheDir;

    public function __construct(string $cacheDir)
    {
        parent::__construct();
        $this->cacheDir = $cacheDir;
    }

    protected function configure()
    {
        $this->setDescription('Deletes all directories starting with "melis" in the cache directory.')
        ->addOption(
            'type',
            null,
            InputOption::VALUE_OPTIONAL,
            'Specify the CMS name if you want to target a specific cache directory.'
        );
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        if (!is_dir($this->cacheDir)) {
            $output->writeln("<error>Cache directory does not exist: {$this->cacheDir}</error>");
            return Command::FAILURE;
        }
        $type = $input->getOption('type');

        $directories = glob($this->cacheDir . '/melis'.$type.'*', GLOB_ONLYDIR);

        if (empty($directories)) {
            $output->writeln('<info>No directories starting with "melis'.$type.'" found.</info>');
            return Command::SUCCESS;
        }

        foreach ($directories as $dir) {
            $this->deleteDirectory($dir);
            $output->writeln("<info>Deleted directory: $dir</info>");
        }

        return Command::SUCCESS;
    }

    private function deleteDirectory(string $dir): void
    {
        $files = array_diff(scandir($dir), ['.', '..']);

        foreach ($files as $file) {
            $path = "$dir/$file";
            is_dir($path) ? $this->deleteDirectory($path) : unlink($path);
        }

        rmdir($dir);
    }
}
