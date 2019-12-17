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
                ),
                'development' => array(
                    'host' => 'http://www.mysite.local',
                    'emails' => array(
                        'active' => 0,
                    ),
                    'errors' => array(
                        'error_reporting' => E_ALL & ~E_USER_DEPRECATED,
                        'display_errors' => 1,
                    ),
                ),
                'preprod' => array(
                    'host' => 'http://preprod.mysite.com',
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
