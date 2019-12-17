<?php

/**
 * This makes our life easier when dealing with paths. Everything is relative
 * to the application root now.
 */
chdir(dirname(__DIR__));

// Decline static file requests back to the PHP built-in webserver
if (php_sapi_name() === 'cli-server' && is_file(__DIR__ . parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH))) {
    return false;
}

// Setup autoloading
require 'init_autoloader.php';

// Warning message handler
require  'warning-handler.php';

// define('HTTP_ROOT', dirname(__DIR__) . '/public/');

// var_dump(HTTP_ROOT); die();
// Run the application!
Zend\Mvc\Application::init(require 'config/application.config.php')->run();
