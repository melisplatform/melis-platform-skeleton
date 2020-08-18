<?php

/**
 * Melis Technology (http://www.melistechnology.com)
 *
 * @copyright Copyright (c) 2016 Melis Technology (http://www.melistechnology.com)
 *
 */

/**
 * This configuration file is the  one you should modified
 * in order to adjust the interface to your needs.
 */

return array(
    'plugins' => array(
        'meliscore' => array(
            'datas' => array(
                'default' => array(
                    'diagnostics' => array(
                        'windows' => array(
                            // the setup is done here, so you don't need to do a batch file to register
                            // phpunit globally, instead we just call them directly from their directory to execute it.
                            // Download latest release: https://phar.phpunit.de/phpunit.phar

                            // php executable file path
                            'php_cli' => '"path/to/php.exe"',
                            // the path where you save your phpunit
                            'phpunit' => 'path/to/phpunit.phar'
                        ),
                        'others' => array(
                            /**
                             * How to install PHPUnit in Linux and Mac
                             * Run in Terminal:
                             * --------------------------------------
                             * wget https://phar.phpunit.de/phpunit.phar
                             * chmod +x phpunit.phar
                             * --------------------------------------
                             * Once downloaded we have to move or copy phpunit.phar into /usr/local/bin/ so we can call it globally
                             * Run this command: sudo cp phpunit.phar /usr/local/bin/phpunit
                             * -- OR --
                             * sudo mv phpunit.phar /usr/local/bin/phpunit
                             *
                             *
                             * And also, make sure that the php cli is available globally, if not just run this command:
                             * sudo cp /path/of/php /usr/local/bin/php
                             * To test if your phpunit is working, just run this command: phpunit --version
                             * It should return something like this:
                             * -------------------------------
                             * PHPUnit 5.7.4 by Sebastian Bergmann and contributors.
                             *
                             * -------------------------------
                             */
                            'php_cli' => 'php',
                            'phpunit' => 'phpunit',
                        ),
                    ),
                ),
                'development' => array(
                    'host' => 'melis.local',
                    'scheme' => 'http',
                    'emails' => array(
                        'active' => 1,
                    ),
                    'errors' => array(
                        'error_reporting' => E_ALL & ~E_USER_DEPRECATED,
                        'display_errors' => 1,
                    ),

                ),

            ),
        ),
        'melisZS' => array(
            'conf' => array(
                'rightsDisplay' => 'none',
            ),
            'datas' => array(
                'zend_server_conf' => array(
                    'development' => array(
                        'api' => array(
                            'serverURI' => 'http://localhost:10081/ZendServer',
                            'username' => 'admin',
                            'apikey' => '23d532ae7b6436839e04ac2e1d04c7ecbb8e8e26e29cddb411441b7947011895',
                        ),
                        'web' => array(
                            'user' => 'admin',
                            'password' => 'admin123',
                        )
                    ),
                ),
            ),
        ),
    ),
    'interface_ordering' => array(
        'meliscore_header' => array(
            'melismessenger_tool_header_messages',
        ),
        'meliscore_leftmenu' => array(
            'meliscore_leftmenu_identity',
            'meliscore_leftmenu_dashboard',
            'meliscms_sitetree',
            'meliscore_toolstree',
            'meliscore_footer',
        ),
        'meliscore_toolstree' => array(
            'meliscore_tool_admin_module' => array(
                'meliscore_tool_user_module_management'
            ),
            'meliscore_tool_admin_section' => array(
                'meliscore_tool_user',
            ),
            'meliscms_tools_section' => array(
                'meliscms_tool_site',
                'meliscms_tool_templates',
                'meliscms_tool_platform_ids'
            ),
        ),
        'meliscore_center_dashboard' => array(
            'meliscore_dashboard_recent_activity',
            'meliscms_dashboard_pages_indicators',
            'melistoolprospects_dashboard_statistics',
            'meliscore_dashboard_calendar',
        ),
        'meliscore_dashboard_recent_activity' => array(
            'melispagehistoric_dashboard_recent_activity_pages',
            'meliscore_dashboard_recent_activity_users',
        ),
    ),
    'interface_disable' => array(
    )
);
