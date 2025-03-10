---
aliases:
- Tab Selector
author:
- '[[authors/namikaze-40p|namikaze-40p]]'
categories: []
description: Quickly switch tabs in various ways.
downloads: 4114
mobile: true
number: 1522
stars: 15
title: Tab Selector
type: plugin
updated: '2025-01-03T16:33:20'
url: https://github.com/namikaze-40p/obsidian-tab-selector
version: 0.8.5
---

%% README_START %%

# Obsidian Tab Selector

This is an [Obsidian](https://obsidian.md/) plugin which can quickly switch tabs in various ways.

## How to use

### `Go to previous/next tab` - Switch tab by general way in like other apps

1. Set up the `Go to previous/next tab` command in the plugin's settings.
    1. In the default configuration, each command are as follows.
        1. Tab Selector: Go to previous tab: `^Tab` or `Ctrl + Tab`
        1. Tab Selector: Go to next tab: `^⇧Tab` or `Ctrl + Shift + Tab`
    1. Don't use shortcut keys reserved by the OS. OS shortcut keys take precedence and don't work properly.
        1. In case MacOS, `⌘Tab` and `⌥Tab` etc… can't use.
1. Set hotkeys to match the command settings implemented above.
1. From then on you can switch tabs using hotkeys.

![demo](https://raw.githubusercontent.com/namikaze-40p/obsidian-tab-selector/main/demo/ver-0.5.0/switch-tab-in-history.gif)

### `Open tab selector` - Switch tab with keeping the keyboard home position on the modal

1. Call the modal in one of the following ways.
    1. Using hotkey. (**recommend**)
    1. Click the icon(`Open tab selector`) from the [Ribbon](https://help.obsidian.md/User+interface/Ribbon).
    1. Selecting `Tab Selector: Open tab selector` from the command palette.
1. Select the tab you want to switch to in one of the following ways.
    1. Press the one-letter key displayed to the left of the tab name. (**recommend**)
    1. Move the cursor with arrow keys and select the tab.
    1. Click on the tab name with the mouse cursor.
1. If you want to close a tab, you can do in one of the following ways.
    1. Hold down the `Control` key, press the one-letter key displayed to the left of the tab name.
    1. Move the cursor with arrow keys and press `Backspace` or `Delete` key.
    1. Click on the `X` button with the mouse cursor.

![demo](https://raw.githubusercontent.com/namikaze-40p/obsidian-tab-selector/main/demo/switch-tab.gif)

### `Show tab shortcuts` - Switch tab with keeping the keyboard home position without the modal

> [!NOTE]
>
> This command is available on PC or tablet devices. It’s not available on smartphones.

1. Call the modal in one of the following ways.
    1. Using hotkey. (**recommend**)
    1. Selecting `Tab Selector: Show tab shortcuts` from the command palette.
1. Press the one-letter key displayed under the tab name.

![demo](https://raw.githubusercontent.com/namikaze-40p/obsidian-tab-selector/main/demo/ver-0.6.0/switch-tab-without-modal.gif)

### `Search tabs` - Search and open tab

1. Call the modal in one of the following ways.
    1. Using hotkey. (**recommend**)
    1. Selecting `Tab Selector: Search tabs` from the command palette.
1. Enter keywords to find a tab.
1. Select the tab you wish to open in one of the following ways.
    1. Move the cursor with arrow keys and select the item.
    1. Click on the item name with the mouse cursor.

![demo](https://raw.githubusercontent.com/namikaze-40p/obsidian-tab-selector/main/demo/ver-0.7.0/search-tabs.gif)

## Installation

Install the plugin in one of the following ways.

- [Community Plugins browser](#community-plugins-browser)
- [Manually](#manually)
- [BRAT Plugin Manager](#brat-plugin-manager)

### Community Plugins browser

This plugin is available in Obsidian's Community Plugins Browser.

1. Launch the Obsidian application.
1. Open the `Settings`, select `Community Plugins`, and select `Browse`.
1. Search for `Tab Selector`, and click it.
1. Click the `Install`.

### Manually

You can also install this plugin manually.

1. Access to [Releases](https://github.com/namikaze-40p/obsidian-tab-selector/releases), and download the 3 files(`main.js`, `manifest.json`, `style.css`) of latest version.
1. Create a new folder named `tab-selector`.
1. Move download the 3 files to the `tab-selector` folder.
1. Place the folder in your `.obsidian/plugins` directory. If you don't know where that is, you can go to Community Plugins inside Obsidian. There is a folder icon on the right of Installed Plugins. Click that and it opens your plugins folder.
1. Reload plugins. (the easiest way is just restarting Obsidian)
1. Activate the plugin as normal.

### BRAT Plugin Manager

You can also install this plugin using the BRAT plugin.

1. Install BRAT using the Obsidian Plugin manager
1. In your Obsidian settings on the left, select BRAT in the list.
1. In BRAT settings, click the button Add Beta Plugin
1. In the textbox, supply the URL to this repo => `https://github.com/namikaze-40p/obsidian-tab-selector`
1. Once `Tab Selector` is installed, activate it in your Obsidian settings.


%% README_END %%