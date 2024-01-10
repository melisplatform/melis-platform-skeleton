let mix = require('laravel-mix');

/**
 * These scripts and style is for the installer
 */
 mix.styles([
	'vendor/melisplatform/melis-installer/public/setup/css/OpenSans.css',
	'vendor/melisplatform/melis-installer/public/setup/css/Roboto.css',
	'vendor/melisplatform/melis-installer/public/setup/css/Monseratt.css',
	
	'vendor/melisplatform/melis-installer/public/setup/css/fontawesome/f-assets/f-css/font-awesome.min.css',
	'vendor/melisplatform/melis-installer/public/setup/css/module.admin.page.index.min.css',
	'vendor/melisplatform/melis-installer/public/setup/css/bootstrap.min.css',
	'vendor/melisplatform/melis-installer/public/setup/css/owl-carousel/owl.carousel.min.css',
	'vendor/melisplatform/melis-installer/public/setup/css/owl-carousel/owl.theme.default.min.css',
	'vendor/melisplatform/melis-installer/public/setup/css/bootstrap-switch.css',
	'vendor/melisplatform/melis-installer/public/setup/core/css/styles.css',
	'vendor/melisplatform/melis-installer/public/setup/css/setup.css',
	
	
 ], 'vendor/melisplatform/melis-installer/public/bundle/css/bundle.css');
 
 mix.scripts([
	'vendor/melisplatform/melis-installer/public/setup/js/jquery.min.js',
	'vendor/melisplatform/melis-installer/public/setup/js/jquery.validate.js',
	'vendor/melisplatform/melis-installer/public/setup/js/bootstrap.min.js',
	'vendor/melisplatform/melis-installer/public/setup/js/owl.carousel.min.js',
	'vendor/melisplatform/melis-installer/public/setup/js/bootstrap-switch.js',
	'vendor/melisplatform/melis-installer/public/setup/js/bootstrap-switch.init.js',
	'vendor/melisplatform/melis-installer/public/setup/core/js/melisHelper.js',
	'vendor/melisplatform/melis-installer/public/setup/core/js/melisCoreTool.js',
	'vendor/melisplatform/melis-installer/public/setup/js/setup.js',
	
 ], 'vendor/melisplatform/melis-installer/public/bundle/js/bundle.js');
 
let cache = [
'/melis/MelisInstaller/Translation/getTranslation',
'/MelisInstaller/setup/js/jquery.min.js',
'/MelisInstaller/setup/js/jquery.validate.js',
'/MelisInstaller/setup/js/bootstrap.min.js',
'/MelisInstaller/setup/js/owl.carousel.min.js',
'/MelisInstaller/setup/js/bootstrap-switch.js',
'/MelisInstaller/setup/js/bootstrap-switch.init.js',
'/MelisInstaller/setup/js/setup.js',
'/MelisInstaller/setup/core/js/melisHelper.js',
'/MelisInstaller/setup/core/js/melisCoreTool.js',
'/MelisInstaller/setup/css/OpenSans.css',
'/MelisInstaller/setup/css/Roboto.css',
'/MelisInstaller/setup/css/Monseratt.css',
'/MelisInstaller/setup/css/fontawesome/f-assets/f-css/font-awesome.min.css',
'/MelisInstaller/setup/css/module.admin.page.index.min.css',
'/MelisInstaller/setup/css/bootstrap.min.css',
'/MelisInstaller/setup/css/owl-carousel/owl.carousel.min.css',
'/MelisInstaller/setup/css/owl-carousel/owl.theme.default.min.css',
'/MelisInstaller/setup/css/bootstrap-switch.css',
'/MelisInstaller/setup/core/css/styles.css',
'/MelisInstaller/setup/css/setup.css',
];