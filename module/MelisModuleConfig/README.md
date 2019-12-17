# Melis Platform CMS Skeleton

Skeleton app of Melis Platform CMS

## Requirements

* PHP 5.5+
* PHP openssl extension
* PHP json extension
* PHP pdo_mysql extension

## Installation

* Download [Composer](https://getcomposer.org/download/): `curl -sS https://getcomposer.org/composer.phar -o composer.phar`
* Install the skeleton: `php composer.phar create-project -sdev melisplatform/melis-cms-skeleton`
* Setup your HTTP server (as described in [HTTP server config](#http-server-config) section
* Add this entries to your hosts file (or update if you're changing the local domains)  
```
    127.0.0.1       www.mysite.local
```
* Create a database, using utf8_general_ci encoding
* Go to the following URL: http://www.mysite.local/melis/setup
* Open file /module/MelisModuleConfig/config/app.interface.php  
  Update host section for your Melis Back Office if needed
* You can now connect at http://www.mysite.local/melis

## HTTP server config

To setup apache, setup a virtual host that points to the public/ directory of the project and you should be ready to go!
It should be something similar to:

```
<VirtualHost *:80>
    DocumentRoot "PATH_DOCROOT/public"
    <Directory "PATH_DOCROOT/public">
        Options +Indexes +FollowSymLinks +ExecCGI
        DirectoryIndex index.php
        Order allow,deny
        Allow from all
        AllowOverride All
        Require all granted
    </Directory>

    ServerName www.mysite.local:80
    SetEnv MELIS_PLATFORM "development"
    SetEnv MELIS_MODULE "MySiteTest"

</VirtualHost>
```

## Contributing

Please note that this project is released with a [Contributor Code of Conduct](http://contributor-covenant.org/version/1/2/0/).
By participating in this project you agree to abide by its terms.

Feel free to fork the project, create a feature branch, and send us a pull request!