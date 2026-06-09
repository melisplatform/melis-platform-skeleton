---
title: MelisPlatformSkeleton (project root)
package: melisplatform/melis-platform-skeleton
doc_type: project-documentation
audience: [users, developers, ai]
language: en
module_version: unversioned
last_reviewed: 2026-06-08
maintainer: Melis Technology
keywords: [skeleton, project, root, install, setup, composer, create-project, vhost, MELIS_PLATFORM, MELIS_MODULE, config, autoload, platforms, module.load, webpack, bundle, foundation, core]
screenshots_dir: ./images
---

# MelisPlatformSkeleton — Functional & Technical Documentation (for AI)

> **What this is.** MelisPlatformSkeleton is **not a module — it is the project itself**: the
> `composer create-project` starting point that becomes the root of a Melis Platform install.
> It carries the Laminas bootstrap, the `config/` folder, the `module/` slots where your site lives,
> the asset-bundling setup, and the `composer.json` that pulls in the **MelisCore foundation**. Every
> Melis site begins as a copy of this skeleton.
>
> **Two parts:** **[Part A — Functional Guide](#part-a--functional-guide)** ·
> **[Part B — Technical Reference](#part-b--technical-reference)** (developers/AI, with examples).
> Consumed by the **MelisAI** MCP. Reviewed 2026-06-08.

---

## 0. The skeleton vs. the MelisCore foundation

> The skeleton is the **container**; the **MelisCore foundation** modules are what it installs and
> runs. Its `composer.json` requires the six foundation packages, and `config/melis.module.load.php`
> loads them in order. Understand the skeleton together with:

- **MelisCore** — back-office foundation. → [MelisCore doc](../../../melis-core/etc/MelisAI/doc/MelisCore.md)
- **MelisAssetManager** — serves & **bundles** module assets (drives `webpack.mix.js`); module discovery.
  → [MelisAssetManager doc](../../../melis-asset-manager/etc/MelisAI/doc/MelisAssetManager.md)
- **MelisDbDeploy** — applies DB migrations (hooked on every `composer update`).
  → [MelisDbDeploy doc](../../../melis-dbdeploy/etc/MelisAI/doc/MelisDbDeploy.md)
- **MelisComposerDeploy** — runs Composer from inside the platform.
  → [MelisComposerDeploy doc](../../../melis-composerdeploy/etc/MelisAI/doc/MelisComposerDeploy.md)
- **MelisInstaller** — the first-run wizard you hit after creating the skeleton.
  → [MelisInstaller doc](../../../melis-installer/etc/MelisAI/doc/MelisInstaller.md)
- **MelisMarketPlace** — the in-platform module store.
  → [MelisMarketPlace doc](../../../melis-marketplace/etc/MelisAI/doc/MelisMarketPlace.md)

**Mental model:** *skeleton = the house's foundations and wiring; foundation modules = the utilities
that move in; site modules (under `module/MelisSites/`) = the rooms you build.*

---
---

# PART A — Functional Guide

## A1. What the skeleton is for

It's the **blank Melis project**. You don't edit the skeleton in place as a library — you **create a
project from it**, then build your site inside it. Out of the box it gives you:

- a working Laminas MVC bootstrap (`public/index.php`),
- the `config/` folder wired for **multi-environment** setups,
- empty `module/` slots for your own project config and your sites,
- the asset-build pipeline (webpack/laravel-mix) for the back-office bundle,
- a `composer.json` that pulls the whole MelisCore foundation.

## A2. Creating a new platform (the happy path)

1. **Create the project** from the skeleton:
   ```bash
   composer create-project melisplatform/melis-platform-skeleton .
   git submodule init && git submodule update     # pulls melis-docker
   ```
2. **Set up a vhost** pointing at `public/`, with two environment variables (see A3).
3. Add a local hosts entry (e.g. `127.0.0.1  www.mysite.local`) and **create an empty database**
   (`utf8_general_ci`).
4. Browse to the site URL — the **MelisInstaller** wizard runs the first-time setup.
5. Log in to the back-office at `/melis`.

## A3. The two environment variables

Set these in the vhost — they're how one codebase serves many environments and sites:

| Variable | Meaning |
|---|---|
| **`MELIS_PLATFORM`** | Which **environment** you are (`development`, `preprod`, `prod`…). Selects the matching per-platform config file and platform row. |
| **`MELIS_MODULE`** | Which **site module** is the front-office for this domain (e.g. `MelisDemoCms`). |

```apache
ServerName www.mysite.local:80
SetEnv MELIS_PLATFORM "development"
SetEnv MELIS_MODULE   "MelisDemoCms"
```

## A4. Where things live (folder tour)

| Folder | What it's for |
|---|---|
| `public/` | Web root (`index.php`, `.htaccess`, media). Point the vhost here. |
| `config/` | Application & environment config (see B2). |
| `module/MelisModuleConfig/` | **Your project's own module** — project-level config/forms/interface overrides. |
| `module/MelisSites/` | Where your **site modules** (front-office websites) are installed. |
| `vendor/` | Composer-installed modules (the foundation + anything you add). |
| `cache/` | Merged-config & module-map cache. |
| `dbdeploy/data/` | DB-delta working area for MelisDbDeploy. |
| `etc/bundles/` | Asset-bundle output area. |
| `thirdparty/` | Drop-in third-party libraries. |
| `install/` | Sample vhost (`vhost.txt`) and install notes. |
| `melis-docker/` | Git submodule for the Docker setup. |

> **Screenshots** (recommended, to capture, under `./images/`): the installer landing page reached
> after first browse, and the project folder tree in an IDE. None captured yet — this is a code
> scaffold, so it has little UI of its own (its UI is the MelisInstaller wizard).

---
---

# PART B — Technical Reference

## B1. Metadata & dependencies

| Item | Value |
|---|---|
| Package | `melisplatform/melis-platform-skeleton` · **type `project`** · OSL-3.0 |
| Requires | PHP `^8.1\|^8.3` + the six foundation packages at `^5.3`: `melis-asset-manager`, `melis-composerdeploy`, `melis-core`, `melis-dbdeploy`, `melis-installer`, `melis-marketplace` |
| Submodule | `melis-docker` (`.gitmodules`) |
| Node | `laravel-mix` (webpack) — `npm run dev` / `npm run prod` |

**Composer lifecycle hooks** (`composer.json` → `scripts.post-update-cmd`) run after **every**
`composer update`:

```php
"MelisCore\\ModuleComposerScript::executeScripts",            // per-module post-install/update scripts
"MelisDbDeploy\\DbDeployOnComposerUpdate::postUpdate"         // apply pending DB deltas automatically
```

This is why installing/updating a module through Composer (or the MarketPlace) also wires its config
and migrates the database without a manual step.

## B2. The `config/` folder (platform configuration)

### `config/application.config.php` — module manager & config merge

```php
'modules' => array_merge(
    MelisCore\MelisModuleManager::getModuleComponents(),  // framework/lib components
    MelisCore\MelisModuleManager::getModules()            // active Melis modules (from melis.module.load.php)
),
'module_listener_options' => [
    'module_paths' => ['./module', './module/MelisSites'],   // project module + your sites
    'config_glob_paths' => [
        realpath(__DIR__).'/autoload/{{,*.}global,{,*.}local}.php',
        realpath(__DIR__).'/autoload/platforms/'.getenv('MELIS_PLATFORM').'.php',  // per-environment override
    ],
    'cache_dir' => 'cache/config/',
],
```

The **config_glob_paths** line is the heart of multi-environment config: every module's config is
merged, then `autoload/global.php`, then `autoload/local.php`, then finally
`autoload/platforms/<MELIS_PLATFORM>.php` — so a `prod` box and a `dev` box share one codebase but
load different overrides by env var.

### `config/melis.module.load.php` — the active-module list (ordered)

```php
return ['MelisAssetManager','MelisDbDeploy','MelisComposerDeploy','MelisMarketPlace','MelisInstaller','MelisModuleConfig'];
```

`MelisModuleManager::getModules()` reads this file. It is **rewritten by MelisAssetManager /
MelisMarketPlace** when you plug/unplug or install/remove modules (`createModuleLoader()`), so order
and membership are managed for you — don't hand-edit it on a live platform.

### `config/autoload/` — environment overrides

| File | Role | Tracked? |
|---|---|---|
| `global.php` | environment-agnostic, **non-sensitive** overrides | yes (committed) |
| `local.php` (copy of `local.php.dist`) | **sensitive** values: DB credentials, etc. | no (gitignored) |
| `platforms/<MELIS_PLATFORM>.php` | per-environment overrides, chosen by env var | per project |
| `development.local.php` (from `.dist`) | dev-mode: `display_exceptions`, 404 reasons | no |

### Development mode

```bash
composer development-enable    # copies development.config.php.dist + development.local.php.dist into place
composer development-status
composer development-disable
```

Enables `Laminas\DeveloperTools` and exception display (`config/development.config.php` +
`autoload/development.local.php`). `public/index.php` merges `development.config.php` if present.

## B3. `public/index.php` — the bootstrap

Standard Laminas entry point: `chdir` to project root, include `vendor/autoload.php`, load
`config/application.config.php` (merging `development.config.php` when present), then
`Application::init($appConfig)->run();`. Nothing Melis-specific here — all the Melis wiring happens
through the modules listed by `MelisModuleManager`.

## B4. The project module slot — `module/MelisModuleConfig`

A real Laminas module shipped *inside* the skeleton, meant to hold **project-level** configuration
that overrides modules. It merges three config files in its `Module::getConfig()`:

```php
$configFiles = [
    include __DIR__.'/config/module.config.php',   // routes / services / controllers (empty stubs by default)
    include __DIR__.'/config/app.interface.php',   // back-office interface overrides
    include __DIR__.'/config/app.forms.php',       // form overrides
];
// merged with Laminas\Stdlib\ArrayUtils::merge
```

Use it when you need to override a core form, tweak the BO interface tree, or register
project-specific services without touching a vendor module. (The bundled `README.md` here is a
**legacy** carry-over from the old CMS skeleton — its `/melis/setup` URL and PHP 5.5 notes are
outdated; follow the root `README.md` instead.)

## B5. Asset bundling (`webpack.mix.js` + `package.json`)

The skeleton drives **laravel-mix/webpack** to compile the back-office assets into single bundles
(`vendor/melisplatform/melis-core/public/build/css/bundle.css` and `…/js/bundle.js`) from the long
explicit lists of MelisCore CSS/JS. `webpack.mix.static.js` is required first for static assets. This
is the project-side counterpart to **MelisAssetManager**'s `build`/`disable_bundle` config that each
module declares.

```bash
npm install
npm run dev      # = laravel-mix "development"
npm run prod     # = "production" (minified)
```

## B6. Quick code map

```
melis-platform-skeleton/                  (composer type: project)
├── composer.json                  → requires the 6 foundation pkgs; post-update hooks (scripts + dbdeploy)
├── public/index.php · .htaccess · web.config   → web root / Laminas bootstrap
├── config/
│   ├── application.config.php      → module manager + config_glob_paths (per-platform merge)
│   ├── melis.module.load.php       → ordered active-module list (managed by asset-manager/marketplace)
│   ├── development.config.php.dist → dev-mode app config
│   └── autoload/  global.php · local.php(.dist) · development.local.php.dist · platforms/<env>.php
├── module/
│   ├── MelisModuleConfig/          → project-level config/forms/interface overrides (a real module)
│   └── MelisSites/                 → your site (front-office) modules live here
├── webpack.mix.js · webpack.mix.static.js · package.json   → back-office asset bundling (laravel-mix)
├── cache/ · data/ · dbdeploy/data/ · etc/bundles/ · thirdparty/ · public/media/   → runtime/work dirs
├── install/ (vhost.txt, README) · test/ (phpunit templates) · melis-docker/ (submodule)
└── etc/ MelisAI/doc (this doc)
```

---

*Document for AI consumption (MelisAI MCP) — `melisplatform/melis-platform-skeleton`. Part A =
functional; Part B = technical with examples. This is the **project root** that hosts the MelisCore
foundation, not a module. Last reviewed 2026-06-08.*
