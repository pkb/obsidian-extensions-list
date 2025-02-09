---
aliases:
- Checklist Reset
author:
- '[[authors/lhansford|Luke Hansford]]'
categories: []
description: Adds a command to reset the state of any checklists in a document in
  Obsidian.
downloads: 5552
mobile: true
number: 738
stars: 14
title: Checklist Reset
type: plugin
updated: '2023-12-08T12:56:49'
url: https://github.com/lhansford/obsidian-checklist-reset
version: 1.2.1
---

%% README_START %%

# Obsidian Checklist Reset

This plugin adds a command to reset the state of any checklists in a document in Obsidian.

## Usage

This plugin adds the following commanfs to the Command Palette:

| Command name     | Description                                              |
|------------------|----------------------------------------------------------|
| Reset checklists | Uncheck all checked checklist items in the open document.|
| Check all        | Check all unchecked checklist items in the open document.|

## Development

### Deploying

- Update version in package.json, manifest.json, and versions.json
- Create release in Github
- Build app and attach `main.js` and `manifest.json` to release.

### Developing locally

1. `npm run dev`
2. `mv ~/Obsidian/Personal/.obsidian/plugins/obsidian-checklist-reset/main.js ~/Obsidian/Personal/.obsidian/plugins/obsidian-checklist-reset/main.js.bak`
3. `ln -s /Users/luke/Documents/Development/obsidian-checklist-reset/main.js ~/Obsidian/Personal/.obsidian/plugins/obsidian-checklist-reset/main.js`
4. Reload plugin in Obsidian

To revert:

1. `rm ~/Obsidian/Personal/.obsidian/plugins/obsidian-checklist-reset/main.js`
2. `mv ~/Obsidian/Personal/.obsidian/plugins/obsidian-checklist-reset/main.js.bak ~/Obsidian/Personal/.obsidian/plugins/obsidian-checklist-reset/main.js`


%% README_END %%