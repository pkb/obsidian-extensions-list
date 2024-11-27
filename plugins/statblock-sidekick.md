---
aliases:
- Statblock Sidekick
author:
- n21rl
author_page: https://github.com/n21rl
categories: []
description: Create and expand D&D 5e statblocks.
downloads: 1511
funding_page: ko-fi.com/n21rl
mobile: true
number: 1681
title: Statblock Sidekick
type: plugin
updated: '2024-06-13T23:33:23'
url: https://github.com/n21rl/stablock-sidekick
version: 1.0.3
---

%% README_START %%

# Statblock Sidekick
This [Obsidian](https://obsidian.md/) plugin is designed as a sidekick for your D&D 5e statblocks. Its goal is to help you edit your [Fantasy Statblocks](https://github.com/javalent/fantasy-statblocks) and implement rules from various sources.

Presently, the plugin allows you to create custom D&D 5e sidekicks based on the rules from *Tasha's Cauldron of Everything*: Expert, Spellcaster, or Warrior. It provides an interactive experience for selecting the sidekick's class, level, and features.

## Installation
The easiest way to install this plugin is within Obsidian:
1. Open **Settings** and navigate to **Community plugins**.
2. Click **Browse** and search for "Statblock Sidekick".
3. Install and Enable the plugin.

The plugin can also be installed through [BRAT](https://github.com/TfTHacker/obsidian42-brat) or manually by placing 
downloaded files from the desired [release](https://github.com/n21rl/stablock-sidekick/releases/) within a your Obsidian plugin folder.

## Settings
### Save Mode
This setting determines where the generated sidekick note will be saved. You have two options:
1. **Same Directory**: The sidekick note will be saved in the same directory as the original statblock note.
2. **Default Directory**: The sidekick note will be saved in a specific directory that you can set using the `Save Directory` setting (see below).
### Default Directory
This setting is only applicable if you have chosen the `Default Directory` option in the `Save Mode` setting. Here, you can specify the directory where the generated sidekick notes will be saved by default.

## Creating a sidekick
1. Open a note containing a valid D&D 5e statblock formatted using the `statblock` code block in the [Fantasy Statblocks format](https://plugins.javalent.com/statblock/layouts/integrated/dnd5e).
2. From the Command Palette (`Ctrl/Cmd+P`), run the `Create sidekick` command.
3. Follow the prompts to select the sidekick's class, level, and features.
4. Once all the selections are made, the plugin will open a new note with the new statblock.

## Notes
- All sidekick rules from *Tasha's* are implemented except the language requirements for the Expert and the Spellcaster.
- You will have to manually enter spells in the output statblock.
- The sidekick level is saved in the `cr` field for convenience, but remember that level and CR (and XP) are not equivalent.
- Please only use this plugin if you own *Tasha's Cauldron of Everything* and with statblocks for which you own the source materials.

## Future plans
- Levelling up of a sidekick
- Rules from *Flee Mortals!*
- Equipment management
- Reduced-threat monsters
- Open to suggestions!

## Feedback and Support
If you encounter any issues or have suggestions for improvements, please report them on the plugin's GitHub repository or reach out to **@Ant** on the [Obsidian TTRPG Community Discord](https://discord.gg/sur9nSTf).

%% README_END %%