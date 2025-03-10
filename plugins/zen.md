---
aliases:
- Zen
author:
- '[[authors/Maxymillion|Maxymillion]]'
categories:
- '[[categories/UI customization|UI customization]]'
description: A focus mode Obsidian plugin.
downloads: 8261
mobile: false
number: 828
stars: 46
title: Zen
type: plugin
updated: '2023-07-24T17:55:15'
url: https://github.com/Maxymillion/zen
version: 0.6.5
---

%% README_START %%

# Zen

[![GitHub release (latest)](https://img.shields.io/github/v/release/Maxymillion/zen?style=flat-square&sort=semver)](https://github.com/Maxymillion/zen/releases/latest) 
[![Total Downloads](https://img.shields.io/github/downloads/Maxymillion/Zen/total?style=flat-square)](https://github.com/Maxymillion/zen/releases/latest) 

A focus mode Obsidian plugin. Inspired by "iA Writer". Sometimes you need to remove all distractions, or at least a few. What if you could just disable elements on a whim?

## Instructions
After installing the plugin you can quite easily change the "hidden items" from the settings tab.

### (Optional) Install beta using [Obsidian42 - BRAT](https://github.com/TfTHacker/obsidian42-brat)
1. Install BRAT from the Community Plugins in Obsidian.
2. Open the command palette and run the command BRAT: Add a beta plugin for testing.
3. Paste this repo's link into the pop-up.
	a. `https://github.com/Maxymillion/zen`.
4. Click on Add Plugin -- wait a few seconds and BRAT will tell you what is going on.
5. After BRAT confirms the installation, in Settings go to the **Community plugins** tab.
6. Refresh the Community plugins list.
7. Enable the **Zen** plugin.
8. If you do find any bugs, please report them [here](https://github.com/Maxymillion/zen/issues).

## Integrations
The plugin contains a system which allows end users to write integrations following a provided [interface](src/plugin.integrations.ts). This allows for functions called when entering and leaving zen-mode. I've written an integration for the following plugin(s):
- [Typewriter Scroll Obsidian Plugin by deathau](https://github.com/deathau/cm-typewriter-scroll-obsidian), the integrations enables/disables the typewriter interface when entering/leaving zen-mode.

## Screenshots
### Enable/Disable Zen
![Screenshot](https://s3.gifyu.com/images/Screen-Recording-2023-02-14-at-15.07.12.gif)

### Options - Highlights
Sometimes those names can be quite convoluted, hold the eye button next to the toggle to get a glimpse of which element you will be hiding.
![Options 1](https://i.imgur.com/ddO59TN.png)

## Todo / Future Plans
- [ ] Add Command Macro's to Integrations (which would allow you to run commands on start and close).
- [ ] Provide "Focus Profiles" which allows you to go into several "focus modes"

## Other plugins
This plugin works perfectly with my other plugin, [Simple Zoom](https://github.com/Maxymillion/simple-zoom) which allows you to use the `CMD/CTRL` and `=` or `-` key to only increase the font size of the editor instead of the complete UI.

## Credits
- [@ces3001](https://github.com/ces3001) for the [Stille](https://github.com/michaellee/stille) Integration 
- [@joshestein](https://github.com/joshestein) for quality of life improvements


%% README_END %%