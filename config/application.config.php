<?php

/**
 * If you need an environment-specific system or application configuration,
 * there is an example in the documentation
 * @see https://docs.laminas.dev/tutorials/advanced-config/#environment-specific-system-configuration
 * @see https://docs.laminas.dev/tutorials/advanced-config/#environment-specific-application-configuration
 */
return [
    // Retrieve list of modules used in this application.
    'modules' => array_merge(
        MelisCore\MelisModuleManager::getModuleComponents(),
        MelisCore\MelisModuleManager::getModules(),
        // React back-office (melis-docker-react). Declared here, NOT in
        // config/melis.module.load.php (the Modules tool rewrites that file and
        // would drop them), and AFTER getModules() so MelisReactOverride wins the
        // config merge. Gated on the module list naming MelisCore (installed) or
        // MelisInstaller (pre-install): the React setup wizard at /melis-react/setup
        // is served by MelisReactOverride's SPA route, so the modules must load
        // BEFORE the install too (melis-installer >= 6.0.2 whitelists that route).
        // WITH_REACT=0 opts out without editing this file.
        (is_array($melisLoad = @include __DIR__ . '/melis.module.load.php')
            && (in_array('MelisCore', $melisLoad, true) || in_array('MelisInstaller', $melisLoad, true))
            && getenv('WITH_REACT') !== '0'
            ? ['MelisReactApi', 'MelisReactOverride']
            : [])
    ),

    // These are various options for the listeners attached to the ModuleManager
    'module_listener_options' => [
        // This should be an array of paths in which modules reside.
        // If a string key is provided, the listener will consider that a module
        // namespace, the value of that key the specific path to that module's
        // Module class.
        'module_paths' => [
            './module',
            './module/MelisSites',
            './module/AIModules',
        ],

        // use composer autoloader instead of laminas-loader
        'use_laminas_loader' => true,

        // An array of paths from which to glob configuration files after
        // modules are loaded. These effectively override configuration
        // provided by modules themselves. Paths may use GLOB_BRACE notation.
        'config_glob_paths' => [
            realpath(__DIR__) . '/autoload/{{,*.}global,{,*.}local}.php',
            realpath(__DIR__) . '/autoload/platforms/' . getenv('MELIS_PLATFORM') . '.php',
        ],

        // Whether or not to enable a configuration cache.
        // If enabled, the merged configuration will be cached and used in
        // subsequent requests.
        'config_cache_enabled' => false,

        // The key used to create the configuration cache file name.
        'config_cache_key' => 'application.config.cache',

        // Whether or not to enable a module class map cache.
        // If enabled, creates a module class map cache which will be used
        // by in future requests, to reduce the autoloading process.
        'module_map_cache_enabled' => false,

        // The key used to create the class map cache file name.
        'module_map_cache_key' => 'application.module.cache',

        // The path in which to cache merged configuration.
        'cache_dir' => 'cache/config/',

        // Whether or not to enable modules dependency checking.
        // Enabled by default, prevents usage of modules that depend on other modules
        // that weren't loaded.
        // 'check_dependencies' => true,
    ],

    // Used to create an own service manager. May contain one or more child arrays.
    // 'service_listener_options' => [
    //     [
    //         'service_manager' => $stringServiceManagerName,
    //         'config_key'      => $stringConfigKey,
    //         'interface'       => $stringOptionalInterface,
    //         'method'          => $stringRequiredMethodName,
    //     ],
    // ],

    // Initial configuration with which to seed the ServiceManager.
    // Should be compatible with Laminas\ServiceManager\Config.
    // 'service_manager' => [],
];
