---
aliases:
- Snippet Commands
author:
- '[[authors/deathau|death_au]]'
categories: []
description: Registers custom css snippets as commands (which you can bind hotkeys
  to)
downloads: 6169
mobile: true
number: 313
stars: 30
title: Snippet Commands
type: plugin
updated: '2021-10-12T12:45:18'
url: https://github.com/deathau/snippet-commands-obsidian
version: 0.0.2
---

%% README_START %%

# Snippet Commands Obsidian Plugin
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/deathau/snippet-commands-obsidian?style=for-the-badge&sort=semver)](https://github.com/deathau/snippet-commands-obsidian/releases/latest)
![GitHub All Releases](https://img.shields.io/github/downloads/deathau/snippet-commands-obsidian/total?style=for-the-badge)

A plugin for [Obsidian](https://obsidian.md) to add all your CSS snippets as commands, accessible from the command pallette and even assignable to hotkeys!

**Important:** If your snippets change while Obsidian is running, there is also a command to "Reload all snippet commands"

### Compatibility

Compatible with Obsidian v0.9.18+ (when the CSS snippets were introduced).

### Notes
This is all very experimental at the moment, so parts might not work, etc.

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

## Pricing
Huh? This is an open-source plugin I made *for fun*. It's completely free.
However, if you absolutely *have* to send me money because you like it that
much, feel free to throw some coins in my hat via the following:

[![GitHub Sponsors](https://img.shields.io/github/sponsors/deathau?style=social)](https://github.com/sponsors/deathau)
[![Paypal](https://img.shields.io/badge/paypal-deathau-yellow?style=social&logo=paypal)](https://paypal.me/deathau)

# Version History

## 0.0.1
Initial Release


%% README_END %%