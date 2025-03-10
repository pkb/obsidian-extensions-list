---
aliases:
- Plugin Reloader
author:
- '[[authors/Benature|Benature]]'
categories:
- '[[categories/Plugin management|Plugin management]]'
description: Manually reload plugins.
downloads: 1976
mobile: true
number: 1468
stars: 4
title: Plugin Reloader
type: plugin
updated: '2024-03-31T23:08:34'
url: https://github.com/Benature/obsidian-plugin-reloader
version: 0.0.3
---

%% README_START %%

# Plugin Reloader

Manually reload plugins on command palette or hotkey, or you can bind the command to ribbon via [Commander](https://obsidian.md/plugins?id=cmdr).

use cases:
- Reload a plugin for force update or something else.
  - *e.g. as a workaround before [Toggl Track](https://github.com/mcndt/obsidian-toggl-integration) support manual reload button ([#139](https://github.com/mcndt/obsidian-toggl-integration/issues/139#issuecomment-1959183577))*
- First initialization of a plugin requires reload.
- Some plugins require reload to ensure new configurations take effect.


## Install

### Install from plugin community

[click to install](https://obsidian.md/plugins?id=plugin-reloader), or:

- Open Obsidian and go to Settings > Community Plugins
- Search for `Plugin Reloader`
- Click `Install`

### Install by [BRAT Plugin](https://obsidian.md/plugins?id=obsidian42-brat)

- First install [BRAT Plugin](https://obsidian.md/plugins?id=obsidian42-brat):
- In BRAT Plugin, click `Add Beta plugin`
- Enter https://github.com/Benature/obsidian-plugin-reloader
- Enable `Plugin Reloader` in `Community plugins`

### Manually install

- Download latest version in [Releases](https://github.com/Benature/obsidian-plugin-reloader/releases/latest)
- Copy over `main.js`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/metadata-icon/`
- Reload plugins in `Community plugins` and enable `Plugin Reloader`

## How to build

- `git clone https://github.com/Benature/obsidian-plugin-reloader` clone this repo.
- `npm i`  install dependencies
- `npm run dev` to start compilation in watch mode.
- `npm run build`  to build production.


## Support

If you find this plugin useful and would like to support its development, you can sponsor me via [Buy Me a Coffee ☕️](https://www.buymeacoffee.com/benature), WeChat, Alipay or [AiFaDian](https://afdian.net/a/Benature-K). Any amount is welcome, thank you!

<p align="center">
<img src="https://s2.loli.net/2024/01/30/jQ9fTSyBxvXRoOM.png" width="500px">
</p>


%% README_END %%