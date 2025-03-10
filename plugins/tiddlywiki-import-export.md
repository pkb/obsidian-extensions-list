---
aliases:
- Import/Export TiddlyWiki
author:
- '[[authors/lucasbordeau|Lucas Bordeau]]'
categories:
- '[[categories/Import|Import]]'
- '[[categories/Export|Export]]'
description: Import and export TiddlyWiki from and to Obsidian.
downloads: 3967
mobile: false
number: 847
stars: 20
title: Import/Export TiddlyWiki
type: plugin
updated: '2024-12-23T06:15:45'
url: https://github.com/lucasbordeau/obsidian-tiddlywiki
version: 1.1.0
---

%% README_START %%

# Import/Export TiddlyWiki 

Import and export from TiddlyWiki with JSON files.

## How to use

Just install it from the store.

Or copy over `main.js`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## How to dev

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

Setup `DEV_VAULT_PLUGIN_FOLDER` (your obsidian dev-vault plugin folder) in a .env file (copy the .env.example)

I couldn't manage to have the [hot-reload](https://github.com/pjeby/hot-reload) plugin to work, just turn off an on again the plugin in Obsidian and it will reload.




%% README_END %%