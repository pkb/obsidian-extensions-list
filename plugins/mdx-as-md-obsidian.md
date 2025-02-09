---
aliases:
- mdx as md
author:
- '[[authors/mkozhukharenko|death_au]]'
categories: []
description: Edit mdx files as if they were markdown
downloads: 5397
mobile: true
number: 155
stars: 24
title: mdx as md
type: plugin
updated: '2021-04-19T01:48:28'
url: https://github.com/mkozhukharenko/mdx-as-md-obsidian
version: 0.0.1
---

%% README_START %%

# mdx as md Obsidian plugin
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/mkozhukharenko/mdx-as-md-obsidian?style=for-the-badge&sort=semver)](https://github.com/mkozhukharenko/mdx-as-md-obsidian/releases/latest)
![GitHub All Releases](https://img.shields.io/github/downloads/mkozhukharenko/mdx-as-md-obsidian/total?style=for-the-badge)

A plugin for [Obsidian](https://obsidian.md) which allows editing of mdx files as if they were markdown.


### Compatibility

The required APIs were only added in Obsidian **0.10.12**, and as such, that is the minimum version of Obsidian required to use this plugin. 

## Installation

### From within Obsidian
From Obsidian v0.9.8, you can activate this plugin within Obsidian by doing the following:
- Open Settings > Third-party plugin
- Make sure Safe mode is **off**
- Click Browse community plugins
- Search for this plugin
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin
#### Updates
You can follow the same procedure to update the plugin

### From GitHub
- Download the Latest Release from the Releases section of the GitHub Repository
- Extract the plugin folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`  
Note: On some machines the `.obsidian` folder may be hidden. On MacOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.
- Reload Obsidian
- If prompted about Safe Mode, you can disable safe mode and enable the plugin.
Otherwise head to Settings, third-party plugins, make sure safe mode is off and
enable the plugin from there.

## Security
> Third-party plugins can access files on your computer, connect to the internet, and even install additional programs.

The source code of this plugin is available on GitHub for you to audit yourself, but installing plugins into Obsidian is currently a matter of trust.

I can assure you here that I do nothing to collect your data, send information to the internet or otherwise do anything nefarious with your system. However, be aware that I *could*, and you only have my word that I don't.

## Development

This project uses Typescript to provide type checking and documentation.  
The repo depends on the latest [plugin API](https://github.com/obsidianmd/obsidian-api) in Typescript Definition format, which contains TSDoc comments describing what it does.

**Note:** The Obsidian API is still in early alpha and is subject to change at any time!

If you want to contribute to development and/or just customize it with your own
tweaks, you can do the following:
- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run build` to compile.
- Copy `manifest.json`, `main.js` and `styles.css` to a subfolder of your plugins
folder (e.g, `<vault>/.obsidian/plugins/<plugin-name>/`)
- Reload obsidian to see changes

Alternately, you can clone the repo directly into your plugins folder and once
dependencies are installed use `npm run dev` to start compilation in watch mode.  
You may have to reload obsidian (`ctrl+R`) to see changes.

# Version History
## 0.0.1
Initial release!


%% README_END %%