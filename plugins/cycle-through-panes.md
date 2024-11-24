---
aliases:
  - Tab Switcher
author:
  - Vinzent & phibr0
author_page: https://github.com/Vinzent03
categories:
  - "[[categories/UI customization|UI customization]]"
description: Switch your tabs with Ctrl + Tab in recently used order like in a browser.
downloads: 70672
funding_page: https://ko-fi.com/vinzent
mobile: true
number: 39
title: Tab Switcher
type: plugin
updated: 2023-08-22T00:17:44
url: https://github.com/Vinzent03/tab-switcher
version: 1.4.0
---

%% README_START %%

# Tab Switcher ![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/Vinzent03/tab-switcher) ![](https://tokei.rs/b1/github/Vinzent03/tab-switcher) ![GitHub all releases](https://img.shields.io/github/downloads/Vinzent03/tab-switcher/total)

Previously called "Cycle Through Panes"

_In Combination with Mr. Jackphils Jump to Link plugin and Vim Keybindings, this plugin allows you to control Obsidian entirely without a Mouse!_

## How to use

There are two different groups of commands:

- Navigate in the order of the tabs from left to right. In contrast to the native Obsidian commands, they ignore panes/tab groups and work per window.
  - "Go to right tab" Typically set to <kbd>Ctrl</kbd> + <kbd>Tab</kbd>
  - "Go to left tab" Typically set to <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>
- Navigate in the order they were last used. These support holding the <kbd>Ctrl</kbd> key like in a browser.
  - "Go to previous tab" Typically set to <kbd>Ctrl</kbd> + <kbd>Tab</kbd>
  - "Go to next tab" Typically set to <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd>

Note that this plugin does not set any default hotkeys, so that you can choose the behavior you prefer.

## Showcase of the second mode

![Showcase](https://raw.githubusercontent.com/Vinzent03/tab-switcher/master/showcase.gif)

---

### Manually installing the plugin

- Copy over `main.js`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/cycle-through-panes/`.

### API Documentation

See https://github.com/obsidianmd/obsidian-api


%% README_END %%