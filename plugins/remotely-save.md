---
aliases:
- Remotely Save
author:
- '[[authors/remotely-save|fyears]]'
categories: '[[categories/Syncing and collaboration|Syncing and collaboration]]'
description: Yet another unofficial plugin allowing users to synchronize notes between
  local device and the cloud service.
downloads: 977827
mobile: true
number: 362
stars: 4700
title: Remotely Save
type: plugin
updated: '2024-10-20T15:14:34'
url: https://github.com/remotely-save/remotely-save
version: 0.5.25
---

%% README_START %%

# Remotely Save

English | [中文](./README.zh-cn.md)

This is yet another unofficial sync plugin for Obsidian. If you like it or find it useful, please consider give it a [star ![GitHub Repo stars](https://img.shields.io/github/stars/fyears/remotely-save?style=social)](https://github.com/fyears/remotely-save) on Github.

[![BuildCI](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml/badge.svg)](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml)

[![downloads of latest version](https://img.shields.io/github/downloads-pre/remotely-save/remotely-save/latest/main.js?sort=semver)](https://github.com/fyears/remotely-save/releases)

## Disclaimer

- **This is NOT the [official sync service](https://obsidian.md/sync) provided by Obsidian.**

## !!!Caution!!!

**ALWAYS, ALWAYS, backup your vault before using this plugin.**

## Features

- Supports:
  - Amazon S3 or S3-compatible (Cloudflare R2 / BackBlaze B2 / MinIO / ...)
  - Dropbox
  - OneDrive for personal (App Folder)
  - OneDrive for personal (Full) (PRO feature)
  - Webdav (NextCloud / InfiniCloud / Synology webdav server / ...)
  - Webdis
  - Google Drive (GDrive) (PRO feature)
  - Box (PRO feature)
  - pCloud (PRO feature)
  - Yandex Disk (PRO feature)
  - Koofr (PRO feature)
  - Azure Blob Storage (PRO feature)
  - [Here](./docs/services_connectable_or_not.md) shows more connectable (or not-connectable) services in details.
- **Obsidian Mobile supported.** Vaults can be synced across mobile and desktop devices with the cloud service as the "broker".
- **[End-to-end encryption](./docs/encryption/README.md) supported.** Files would be encrypted using openssl / rclone crypt format before being sent to the cloud **if** user specify a password.
- **Scheduled auto sync supported.** You can also manually trigger the sync using sidebar ribbon, or using the command from the command palette (or even bind the hot key combination to the command then press the hot key combination).
- **[Minimal Intrusive](./docs/minimal_intrusive_design.md).**
- **Skip Large files** and **skip paths** by custom regex conditions!
- **[Sync Algorithm](./docs/sync_algorithm/v3/intro.md) is provided for discussion.**
- **[Basic Conflict Detection And Handling](./docs/sync_algorithm/v3/intro.md)** for free version. **[Advanced Smart Conflict Handling](./pro/README.md)** for PRO version. 
- Source Available. See [License](./LICENSE) for details.

## Limitations

- **Cloud services cost you money.** Always be aware of the costs and pricing. Specifically, all the operations, including but not limited to downloading, uploading, listing all files, calling any api, storage sizes, may or may not cost you money.
- **Some limitations from the browser environment.** More technical details are [in the doc](./docs/browser_env.md).
- **You should protect your `data.json` file.** The file contains sensitive information.
  - It's strongly advised **NOT** to share your `data.json` file to anyone.
  - It's usually **NOT** a good idea to check the file into version control. By default, the plugin tries to create a `.gitignore` file inside the plugin directory if it doesn't exist, for ignoring `data.json` in the `git` version control. If you know exactly what it means and want to remove the setting, please modify the `.gitignore` file or set it to be empty.
- **Obsidian API on Mobile has performance issues syncing large files (>= 50 MB).**
  - Setting the "Skip Large Files" option can help resolve issues related to syncing large files.

## Questions, Suggestions, Or Bugs

You are greatly welcome to ask questions, post any suggestions, or report any bugs! The project is mainly maintained on GitHub:

- Questions: [GitHub repo Discussions](https://github.com/remotely-save/remotely-save/discussions)
- Suggestions: also in [GitHub repo Discussions](https://github.com/remotely-save/remotely-save/discussions)
- Bugs: [GitHub repo Issues](https://github.com/remotely-save/remotely-save/issues) (NOT Discussion)

Additionally, the plugin author may occasionally visit Obsidian official forum and official Discord server, and pay attention to this-plugin-related information there.

## Download and Install

- Option #1: Search in the official "community plugin list", or visit this: [https://obsidian.md/plugins?id=remotely-save](https://obsidian.md/plugins?id=remotely-save) (which should redirect you into Obsidian app), then install the plugin.
- Option #2: You can also use [Obsidian42 - BRAT](https://github.com/TfTHacker/obsidian42-brat) to install this plugin. Input `remotely-save/remotely-save` in the configuration of BRAT.
- Option #3: [![GitHub release (latest by SemVer and asset including pre-releases)](https://img.shields.io/github/downloads-pre/fyears/remotely-save/latest/main.js?sort=semver)](https://github.com/fyears/remotely-save/releases) Manually download assets (`main.js`, `manifest.json`, `styles.css`) from the latest release.
- Option #4: [![BuildCI](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml/badge.svg)](https://github.com/fyears/remotely-save/actions/workflows/auto-build.yml) Every artifacts are placed in the "Summary" under every successful builds. It's automatically generated by every commit, may break something.

## Usage

### S3

- Tutorials / Examples:
  - [Cloudflare R2](./docs/remote_services/s3_cloudflare_r2/README.md)
  - [BackBlaze B2](./docs/remote_services/s3_backblaze_b2/README.md)
  - [Storj](./docs/remote_services/s3_storj_io/README.md)
  - [腾讯云 COS](./docs/remote_services/s3_tencent_cloud_cos/README.zh-cn.md) | [Tencent Cloud COS](./docs/remote_services/s3_tencent_cloud_cos/README.md)
  - [MinIO](./docs/remote_services/s3_minio/README.md)
  - [又拍云](./docs/remote_services/s3_upyun/README.zh-cn.md)
- Prepare your S3 (-compatible) service information: [endpoint, region](https://docs.aws.amazon.com/general/latest/gr/s3.html), [access key id, secret access key](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html), bucket name.
- If you are using AWS S3, create [policy and user](./docs/remote_services/s3_general/s3_user_policy.md).
- Very old version of Obsidian needs [configuring CORS](./docs/remote_services/s3_general/s3_cors_configure.md).
- Download and enable this plugin.
- Enter your information to the settings of this plugin.
- If you do not set the prefix in the settings, the bucket should be empty and solely for syncing a vault. You can set the prefix in the settings so that the same bucket can store multiple vaults.
- If you want to enable end-to-end encryption, also set a password in settings. If you do not specify a password, the files and folders are synced in plain, original content to the cloud.
- Click the new "circle arrow" icon on the ribbon (the left sidebar), **every time** you want to sync your vault between local and remote. (Or, you could configure auto sync in the settings panel (See next chapter).) While syncing, the icon becomes "two half-circle arrows". Besides clicking the icon on the sidebar ribbon, you can also activate the corresponding command in the command palette.
- **Be patient while syncing.** Especially in the first-time sync.
- If you want to sync the files across multiple devices, **your vault name should be the same** while using default settings.

### Dropbox

- **This plugin is NOT an official Dropbox product.** The plugin just uses Dropbox's public API.
- After the authorization, the plugin can read your name and email (which cannot be unselected on Dropbox api), and read and write files in your Dropbox's `/Apps/remotely-save` folder.
- If you decide to authorize this plugin to connect to Dropbox, please go to plugin's settings, and choose Dropbox then follow the instructions. [More with screenshot is here](./docs/dropbox_review_material/README.md).
- Password-based end-to-end encryption is also supported. But please be aware that **the vault name itself is not encrypted**.
- If you want to sync the files across multiple devices, **your vault name should be the same** while using default settings.

### OneDrive for personal (App Folder)

- **This plugin is NOT an official Microsoft / OneDrive product.** The plugin just uses Microsoft's [OneDrive's public API](https://docs.microsoft.com/en-us/onedrive/developer/rest-api).
- This plugin only works for "OneDrive for personal", and not works for "OneDrive for Business" (yet). See [#11](https://github.com/fyears/remotely-save/issues/11) to further details.
- After the authorization, the plugin can read your name and email, and read and write files in your OneDrive's `/Apps/remotely-save` folder. **The free version of Remotely Save only connects to App Folder, while the PRO version can connect to the root folder in Onedrive. See below PRO part.** 
- If you decide to authorize this plugin to connect to OneDrive, please go to plugin's settings, and choose OneDrive then follow the instructions.
- Password-based end-to-end encryption is also supported. But please be aware that **the vault name itself is not encrypted**.
- If you want to sync the files across multiple devices, **your vault name should be the same** while using default settings.
- You might also want to checkout [faq for OneDrive](./docs/remote_services/onedrive/README.md).

### webdav

- Tutorials / Examples:
  - [Nextcloud](./docs/remote_services/webdav_nextcloud/README.md)
  - [The Good Cloud](./docs/remote_services/webdav_thegoodcloud/README.md)
  - [ownCloud](./docs/remote_services/webdav_owncloud/README.md)
  - [InfiniCloud](./docs/remote_services/webdav_infinicloud_teracloud/README.md)
  - [Synology webdav server](./docs/remote_services/webdav_synology_webdav_server/README.md) | [群晖 webdav server](./docs/remote_services/webdav_synology_webdav_server/README.zh-cn.md)
  - [dufs](./docs/remote_services/webdav_dufs/README.md)
  - [AList（中文）](./docs/remote_services/webdav_alist/README.zh-cn.md) | [AList (English)](./docs/remote_services/webdav_alist/README.md)
  - [坚果云](./docs/remote_services/webdav_jianguoyun/README.zh-cn.md) | [JianGuoYun/NutStore](./docs/remote_services/webdav_jianguoyun/README.md)
  - [Open Media Vault](./docs/remote_services/webdav_openmediavault/README.md)
  - [Nginx (`ngx_http_dav_module`, `nginx-dav-ext-module`, with Docker)](./docs/remote_services/webdav_nginx/README.md)
  - [Apache (with Docker)](./docs/remote_services/webdav_apache/README.md)
  - [Caddy with `http.handlers.webdav` module](./docs/remote_services/webdav_caddy/README.md)
- Very old version of Obsidian needs [configuring CORS](./docs/remote_services/webdav_general/webav_cors.md).
- Your data would be synced to a `${vaultName}` sub folder on your webdav server.
- Password-based end-to-end encryption is also supported. But please be aware that **the vault name itself is not encrypted**.
- If you want to sync the files across multiple devices, **your vault name should be the same** while using default settings.

### Webdis

- Tutorials:
  - [Webdis](./docs/remote_services/webdis/README.md)
- Mostly experimental.
- You have to setup and protect your web server by yourself.

### Onedrive (Full access) (PRO feature)

PRO (paid) feature "sync with Onedrive (Full)" allows users to to sync with Onedrive root folder. Tutorials and limitations are documented [here](./docs/remote_services/onedrivefull/README.md).

### Google Drive (GDrive) (PRO feature)

PRO (paid) feature "sync with Google Drive" allows users to to sync with Google Drive. Tutorials and limitations are documented [here](./docs/remote_services/googledrive/README.md).

### Box (PRO feature)

PRO (paid) feature "sync with Box" allows users to to sync with Box. Tutorials and limitations are documented [here](./docs/remote_services/box/README.md).

### pCloud (PRO feature)

PRO (paid) feature "sync with pCloud" allows users to to sync with pCloud (using its native API instead of webdav). Tutorials and limitations are documented [here](./docs/remote_services/pcloud/README.md).

### Yandex Disk (PRO feature)

PRO (paid) feature "sync with Yandex Disk" allows users to to sync with Yandex Disk (using its native API instead of webdav). Tutorials and limitations are documented [here](./docs/remote_services/yandexdisk/README.md).

### Koofr (PRO feature)

PRO (paid) feature "sync with Koofr" allows users to to sync with Koofr (using its native API instead of webdav). Tutorials and limitations are documented [here](./docs/remote_services/koofr/README.md).

### Azure Blob Storage (PRO feature)

PRO (paid) feature "sync with Azure Blob Storage" allows users to to sync with Azure Blob Storage. Tutorials and limitations are documented [here](./docs/remote_services/azureblobstorage/README.md).

## Smart Conflict (PRO feature)

Basic (free) version can detect conflicts, but users have to choose to keep newer version or larger version of the files.

PRO (paid) feature "Smart Conflict" gives users one more option: merge small markdown files, or duplicate large markdown files or any-size non-markdown files.

See documents [here](./docs/pro/README.md)

## Scheduled Auto Sync

- You can configure auto syncing every N minutes in settings.
- In auto sync mode, if any error occurs, the plugin would **fail silently**.
- Auto sync only works when Obsidian is being opened. It's **technically impossible** to auto sync while Obsidian is in background, because the plugin just works in the browser environment provided by Obsidian.

## Sync On Save

- You can configure sync on save in settings.
- In sync on save mode, if any error occurs, the plugin would **fail silently**.

## Config Folder / Files and Bookmarks

By default, the plugin doesn't sync config folder / files of obsidian (normally `.obsidian` folder) because it's one of the hidden files. 

However, in the latest version, you can enable syncing config folder in settings. Please be aware that it's an experimental feature. Notably some config files' modified times are changed everytime when Obsidian is opened, and this destroys the assumptions of the plugin, so some information may not be synced properly.

Moreover, the bookmarks of Obsidian are actually stored in `.obsidian/bookmarks.json` file. You can also set syncing this file (instead of the whole config folder) in settings. The plugin will keep the latest modified one across devices.

## Hidden Files Or Folders

**By default, all files or folder starting with `.` (dot) or `_` (underscore) are treated as hidden files, and would NOT be synced.** It's useful if you have some files just staying locally. But this strategy also means that themes / other plugins / settings of this plugin would neither be synced.

In the latest version, you can change the settings to allow syncing `_` files or folders, as well as `.obsidian` special config folder as described above (but not any other `.` files or folders).

## PRO (paid) Features

See [PRO](./docs/pro/README.md) for more details.

## How To Debug

If you see any errors, please check the doc [here](./docs/how_to_debug/README.md) for more details.

Moreover, sometimes the program runs but slowly, you want to check the performance by [enabling the profiler](./docs/check_performance/README.md).

## Bonus: Import And Export Not-Oauth2 Plugin Settings By QR Code

See [here](./docs/import_export_some_settings.md) for more details.

## Download History

Download history can be viewed on the unofficial [Obsidian Stats](https://www.moritzjung.dev/obsidian-stats/plugins/remotely-save/#downloads) (NOT affiliated with official Obsidian and GitHub and Remotely Save).

## Star History 

(NOT affiliated with official Obsidian and GitHub and Remotely Save.)

[![Star History Chart](https://api.star-history.com/svg?repos=remotely-save/remotely-save&type=Date)](https://star-history.com/#remotely-save/remotely-save&Date)


%% README_END %%