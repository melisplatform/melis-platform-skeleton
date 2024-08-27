<?php

/**
 * Melis Technology (http://www.melistechnology.com]
 *
 * @copyright Copyright (c] 2016 Melis Technology (http://www.melistechnology.com]
 *
 */

return [
    'router' => [
        'routes' => [],
    ],
    'translator' => [],
    'service_manager' => [
        'aliases' => [],
    ],
    'controllers' => [
        'invokables' => [],
    ],
    'view_manager' => [
    ],
    'laminas-cli' => [
        'commands' => [
            'delete-melis-cache' => \MelisModuleConfig\Console\DeleteMelisCacheCommand::class,
            'make:controller' => \MelisModuleConfig\Console\MakeControllerCommand::class,
            'make:service' => \MelisModuleConfig\Console\MakeServiceCommand::class,
            'make:model' => \MelisModuleConfig\Console\MakeModelCommand::class,
        ],
    ],
];