---
aliases:
- Replace All
author:
- '[[authors/patrickchiang|patrickchiang]]'
categories: []
description: Replace all in vault.
downloads: 553
mobile: true
number: 1956
stars: 4
title: Replace All
type: plugin
updated: '2024-10-22T10:06:43'
url: https://github.com/patrickchiang/obsidian-replace-all
version: 1.0.5
---

%% README_START %%

# Obsidian Replace All

Replace All is an Obsidian plugin that injects replace all functionality directly into the core file plugin.

![Replace All](https://raw.githubusercontent.com/patrickchiang/obsidian-replace-all/HEAD/img/replaceall.png)

## Usage

1. Use the built-in Obsidian find to find instances to replace.
2. Enter the replacement string in the input box.
3. Press Enter.

**Undo replace all**: Use the command palette (Ctrl+P or Cmd+P) and search for "Undo replace all" to undo all changes applied by the previous replacement.

## Installing

1. **Install the Plugin**:
   - (Recommended) If installing through Obsidian, go to Settings > Community plugins > Browse and search for "Replace All".
   - If downloading manually, place the plugin files in your Obsidian plugins folder.
2. **Enable the Plugin**: Go to Settings > Community plugins, find "Replace All" and toggle it on.

## Development

If you want to contribute or modify the plugin, follow these steps:

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.
- Feel free to file a pull request with any improvements.


%% README_END %%