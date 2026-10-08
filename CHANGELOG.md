# Changelog

## v6.0.12 - 2026-10-06
### Dependencies & build
* **deps:** bump melis-core to v6.0.13 and melis-installer to v6.0.4 in the lock
* **deps:** bump melis-core to v6.0.12 in the lock
* **deps:** bump melisplatform packages with dependencies in the lock

## v6.0.10 - 2026-09-23
### Security
* **security:** session cookie hardening and no Set-Cookie rewrite (audit 10.0)
### Fixed
* **config:** skip the app.interface.php include when the file is missing
### Changed
* Drive error display from the platform config in MelisModuleConfig
### Dependencies & build
* **deps:** bump melis-marketplace to v6.0.6 and melis-asset-manager to v6.0.4 in the lock
* **deps:** bump melis-core to v6.0.10 in the lock

## v6.0.9 - 2026-08-20
### Dependencies & build
* **deps:** bump melis core modules in the lock

## v6.0.8 - 2026-08-12
### Dependencies & build
* **deps:** bump melis-composerdeploy to v6.0.4 in the lock
* **deps:** bump melis-core to v6.0.5 in the lock

## v6.0.6 - 2026-08-12
### Added
* **react:** let WITH_REACT=0 opt out of the React back-office
* **react:** load the React back-office modules from application.config.php
### Dependencies & build
* **deps:** bump melis-core, melis-installer and melis-react-override in the lock
### Docs
* **react:** align the module-gate comment with melis-docker-react's patcher

## v6.0.5 - 2026-08-11
### Dependencies & build
* Update composer.lock for the react modules v6.0.2

## v6.0.4 - 2026-08-10
### Added
* **composer:** add docs link and authors block, drop redundant zf2 keyword (laminas already present)

## v6.0.3 - 2026-08-10
### Dependencies & build
* Update composer.lock for melis-composerdeploy v6.0.3

## v6.0.2 - 2026-08-10
### Dependencies & build
* Update composer.lock for melis-composerdeploy v6.0.2

## v6.0.1 - 2026-08-10
### Dependencies & build
* Update composer.lock for melis-core v6.0.2

## v6.0.0 - 2026-08-10
### Added
* **MelisAI:** add MelisPlatformSkeleton AI documentation
* Add melisplatform Laminas fork repositories for PHP 8.4/8.5 support
### Changed
* Bump melisplatform core packages to ^6.0
* Change crypt version
* Removed laminas forks
### Dependencies & build
* Regenerate composer.lock for the ^6.0 constraints
* Pin platform php 8.3.0 and regenerate composer.lock for the laminas forks
* Update melis-installer and other dependencies in composer files

## v5.3.5 - 2026-05-13
### Added
* Added ai module path

## v5.3.4 - 2026-05-12
### Changed
* Refactor code structure for improved readability and maintainability

## v5.3.3 - 2025-02-12
### Added
* Add melis-docker as submodule
### Changed
* Updated melis logo and favicon
* Updated readme

## v5.3.1 - 2024-10-21
### Added
* Added etc folder for bundle files
### Dependencies & build
* Composer update
* Change bundle folder name

## v5.3.0 - 2024-10-08
### Changed
* Data directory added
### Dependencies & build
* Composer update

## v5.2.2 - 2024-09-04
### Changed
* Installer update

## v5.2.1 - 2024-07-25
### Added
* Added option to disable bundle per env
### Changed
* Remove unset of cache control in htaccess

## v5.2.0 - 2024-06-06
### Added
* Added bundles generated folder
### Dependencies & build
* Update dependency

## v5.1.1 - 2024-02-13
### Dependencies & build
* Composer update

## v5.1.0 - 2024-02-13
### Fixed
* Fixed problem building minified assets
### Changed
* Update package.json for minifying assets
* Change zend autoload to laminas
### Dependencies & build
* COmposer update
* Update composer
* Update composer lock file
* Temporarily added front and engine in the composer
* Update composer lock
* Update  composer lock file
* Temporarily add engine and front in main composer
* Update composer json for php 8.3 dependencies
* Updated npm dependency

## v5.0.2 - 2023-05-24
### Dependencies & build
* Updated composer.lock

## v5.0.1 - 2022-06-23
### Changed
* Melis installer change version

## v5.0.0 - 2022-06-22
### Added
* Added allow-plugin key for symfony
* Added php8 as one of the required php versions
