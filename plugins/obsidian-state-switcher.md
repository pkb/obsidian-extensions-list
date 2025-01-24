---
aliases:
- Yaml Manager
author:
- '[[authors/lijyze|Lijyze]]'
categories: []
description: Keep you away from directly operating of yaml front matter
downloads: 9556
mobile: true
number: 526
stars: 43
title: Yaml Manager
type: plugin
updated: '2022-06-30T08:02:09'
url: https://github.com/lijyze/obsidian-state-switcher
version: 1.3.3
---

%% README_START %%

# Obsidian Yaml Manager

Keey you away from directly operating yaml front matter, so you won't make mistake.

## Demo

![demo](https://raw.githubusercontent.com/lijyze/obsidian-state-switcher/main/assets/demo.gif)

## Usage

- Update single field
  - select `Yaml Manager: key-value update` in command palette to update `key-value` field.
  - select `Yaml Manager: key-array insert` or `Yaml Manager: key-array remove` to insert item to `key-array` field or remove item from `key-array` field.
  - Select field name and field value in order.
- Bulk update
  - select `Yaml Manager: bulk update` in command palette, you will understand the rest.


**These command only available in edit mode!!!**

You can assign hotkeys to these commands for conviences;

## Notice

This plugin only switch value of field which is placed in yaml front matter, if no front matter was founded, it will create one then insert the key-value pair just selected into it.

## Working on

1. Make it support more data structure, such as key-object(still no clue and not sure if it's necessary).

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/obsidian-state-switcher/`.

## Release

### 1.3.0
The formation of yaml array is customizable(`- item` or `[item]`)!

### 1.2.0
Now you can update multiple fields in one time!

### 1.1.0
You may need to reset hotkey to call this plugin if you have set ever.

1. Key-array structure supported
2. Add return option to sub menu

## Donating

<a href="https://www.buymeacoffee.com/lijyze" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 160px !important;" ></a>


%% README_END %%