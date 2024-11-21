# Melis Platform Skeleton

The skeleton of Melis Platform.  
This is the package you need to use to start a setup of Melis Platform.  

## Requirements

* PHP 7.0+
* PHP openssl extension
* PHP json extension
* PHP pdo_mysql extension
* PHP zip extension

## Installation Options

### Standard Installation with Composer

1. Download [Composer](https://getcomposer.org/download/)
2. Install the skeleton with submodules using one of these methods:
   ```bash
   # Method 1: Using create-project with --keep-vcs flag to preserve Git information
   composer create-project melisplatform/melis-platform-skeleton . --keep-vcs

   # After create-project, initialize and update submodules
   git submodule init
   git submodule update
   ```
   
   OR
   
   ```bash
   # Method 2: Clone with submodules directly
   git clone --recursive https://github.com/melisplatform/melis-platform-skeleton
   composer install
   ```

3. Setup your HTTP server (as described in [HTTP server config](#http-server-config) section)
4. Add this entry to your hosts file if you're working locally: `127.0.0.1       www.mysite.local`
5. Create a database, using utf8_general_ci encoding
6. Go to the following URL: http://www.mysite.local/ and do the setup
7. You can now connect at http://www.mysite.local/melis

### Docker Installation

To run Melis Platform using Docker:

1. Clone the repository with submodules:
```bash
# Clone with submodules in one command
git clone --recursive https://github.com/melisplatform/melis-platform-skeleton

# Or, if already cloned, initialize and update submodules
git submodule init
git submodule update
```

2. Follow the setup instructions in the melis-docker submodule documentation.

## HTTP server & vhost configuration

Setup a virtual host that points to the public/ directory of the project.  
Add the MELIS_PLATFORM (identifies your platform when having multiple environments like local/preprod/prod) and MELIS_MODULE (identifies which site will be loaded as the front office for this domain) variable.  
Vhost should look like this:

```apache
<VirtualHost *:80>
    DocumentRoot "PATH_DOCROOT/public"
    <Directory "PATH_DOCROOT/public">
        Options -Indexes +FollowSymLinks +ExecCGI
        DirectoryIndex index.php
        Order allow,deny
        Allow from all
        AllowOverride All
        Require all granted
    </Directory>

    ServerName www.mysite.local:80
    SetEnv MELIS_PLATFORM "development"
    SetEnv MELIS_MODULE "MelisDemoCms"

</VirtualHost>
```
  
If you are using Windows, you might want to add the following lines in your vhost to ensure that downloads of modules through composer can be managed by PHP.  
Be aware that running composer through PHP (setup, marketplace, updates) requires memory and space.  
```apache
<VirtualHost *:80>
    [...]
    <IfModule fcgid_module>
        FcgidIOTimeout 3600
        FcgidBusyTimeout 1800
        FcgidConnectTimeout 3600
        FcgidOutputBufferSize 65536
        FcgidMaxRequestsPerProcess 500
        FcgidMinProcessesPerClass 0
        FcgidProcessLifeTime 3600 
    </IfModule>
    [...]
</VirtualHost>
```

## Contributing

Please note that this project is released with a [Contributor Code of Conduct](http://contributor-covenant.org/version/1/2/0/).
By participating in this project you agree to abide by its terms.

Feel free to fork the project, create a feature branch, and send us a pull request!

## Authors

* **Melis Technology** - [www.melistechnology.com](https://www.melistechnology.com/)

See also the list of [contributors](https://github.com/melisplatform/melis-platform-skeleton/contributors) who participated in this project.

## License

This project is licensed under the OSL-3.0 License - see the [LICENSE](LICENSE) file for details