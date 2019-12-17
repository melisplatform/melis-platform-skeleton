MELIS PLATFORM V2 READ ME FILE
----------------------------------------------------------------------------------

SETUP: Follow the following steps to install Melis CE:

1/ Create your vhost (check file /install/vhost.txt for example)
   Define your MELIS_PLATFORM inside your vhost.
   Define your MELIS_MODULE, your site's module folder name in /module/MelisSites
   You might need to add/remove "Require all granted" from your vhost directory depending on your server version

2/ Add this entries to your hosts file (or update if you're changing the local domains)
   127.0.0.1       www.mysite.local

3/ Create database, using utf8_general_ci encoding

4/ Go to the following URL: http://www.mysite.local/melis/setup

5/ Open file /module/MelisModuleConfig/config/app.interface.php
   Update host section for your Melis Back Office if needed

6/ You can now connect at http://www.mysite.local/melis


NB: 
No modules should be touched in order to get updates.
Only one module should be modified to arrange/update your configuration: MelisModuleConfig
This module is made for the only purpose of configurating and overiding configuration from other modules:
> /module/MelisModuleConfig/config/module.load.php for Melis Platform's list of modules to be loaded, use the tool on the platform if you want to activate or deactivate modules.
> /module/MelisModuleConfig/config/app.interface.php for variables, overriding other modules conf, ordering or disabling interfaces arrays.


----------------------------------------------------------------------------------

Melis Products includes 3rd party software that is licensed to that specific copy of the software, 
and can not be redistributed, copied or used for any other purpose.