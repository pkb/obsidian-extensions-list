---
aliases:
- Customizable Menu
author:
- '[[kzhovn|kzhovn]]'
categories: []
description: Allows you to add any command to Obsidian's right-click menu.
downloads: 24059
mobile: true
number: 293
title: Customizable Menu
type: plugin
updated: '2022-06-06T09:02:45'
url: https://github.com/kzhovn/obsidian-customizable-menu
version: 2.2.0
---

%% README_START %%

# Obsidian Customizable Right Click Menu

This plugin allows you to add or hide any commands, including those of community plugins, to the right click menu and assign custom icons to them. Note that adding commands is available only on the note menu in Source and Live Preview mode, but not Preview mode or in the sidebars.

Note: this plugin, like all my plugins, is semi-abandonded, and I may not get to any issues. If you're having problems, check out Obsidian Commander, a plugin which lets you add commands to any part of the user interface; it has the same functionality and is as of 2023 being regularly updated by the maintainers.

## Custom Icons

If the command doesn't yet have an icon, you can assign one from Obsidian's internal icons and Lucide icons. You can also reassign icons for commands with preixisiting icons by clicking the "edit" button once a command has been reigstered.

## Remove Commands
Add the name of the command to hide exactly as it appears in the Obsidian menu. Note that this setting will remove *all* instances of a command with that name from all context menus across Obsidian (note menu, file explorer menu, etc), not just the in-note menu. This means that in cases where a command with the same name appears in several different menus (for instance, "Open in default app" in both the file explorer menu and the note menu), it is currently impossible to hide just one of them.

If you would like to style the listed commands yourself, instead of simply removing them, the selector is `div.custom-menu-hide-item`.

## Thanks
This plugin was initially a fork of phibr0's excellent [customizable sidebar](https://github.com/phibr0/obsidian-customizable-sidebar), and still uses many elements from it. The code for hiding menu items comes in part from Panossa's [Mindful Obsidian](https://github.com/Panossa/mindful-obsidian/blob/master/main.ts)


%% README_END %%