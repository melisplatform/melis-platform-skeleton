<?php

/**
 * Global Configuration Override
 *
 * You can use this file for overriding configuration values from modules, etc.
 * You would place values in here that are agnostic to the environment and not
 * sensitive to security.
 *
 * NOTE: In practice, this file will typically be INCLUDED in your source
 * control, so do not include passwords or other sensitive information in this
 * file.
 */

// Error display is driven by the MELIS_PLATFORM block's 'errors' in
// module/MelisModuleConfig/config/app.interface.php (e.g. 'local'). Platforms without one fall back to
// display off with warnings/deprecations/notices silenced; display_errors=0 hides fatals too, so rely
// on log_errors to see them. Applied at boot by each module's Module::initShowErrorsByconfig().
// BOTH plugins are set: MelisFront bootstraps AFTER MelisCore (back office included) and reads only
// plugins.melisfront.datas.default, with no platform lookup, so it would otherwise override the
// platform value with its own default (display_errors=1).
$melisInterface = include __DIR__ . '/../../module/MelisModuleConfig/config/app.interface.php';
$melisErrors = array_merge(
    [
        'error_reporting' => E_ALL & ~E_WARNING & ~E_DEPRECATED & ~E_NOTICE & ~E_USER_DEPRECATED,
        'display_errors' => 0,
    ],
    $melisInterface['plugins']['meliscore']['datas'][getenv('MELIS_PLATFORM')]['errors'] ?? []
);

return [
    'plugins' => [
        'meliscore' => [
            'datas' => [
                'default' => [
                    'errors' => $melisErrors,
                ],
            ],
        ],
        'melisfront' => [
            'datas' => [
                'default' => [
                    'errors' => $melisErrors,
                ],
            ],
        ],
    ],
];
