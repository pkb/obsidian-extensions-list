---
aliases:
- Advanced Codeblock
author:
- '[[authors/lijyze|Lijyze]]'
categories: []
description: Give additioinal features to  code blocks.
downloads: 12804
mobile: true
number: 533
stars: 58
title: Advanced Codeblock
type: plugin
updated: '2023-07-28T17:23:58'
url: https://github.com/lijyze/obsidian-advanced-codeblock
version: 1.1.5
---

%% README_START %%

# Obsidian Advanced Codeblock

Add additioinal features to code blocks.

## Demo

![demo](https://raw.githubusercontent.com/lijyze/obsidian-advanced-codeblock/main/assets/demo.png)

## Feature

1. Add line numbers to code block
2. Add line highlight to code block

## Usage

All features won't apply universally, if you need any feature, you need to correctly specify params to specific code block. Params should be split by `' '`.

| Feature           | param    | description     |
| ----------------- | -------- | --------------- |
| show line numbers | nums     |
| highlight line    | {a, b-c} | brackets matter |

## Notice

- **Code block won't update in preview mode if you only change params of blocks.**
  
  Obsidian cache every section of artical, but it directly ignore anything follows the first space after ```` ```language ````. Which means if you only change params of a code block, obsidian will think nothing has been changed, so it won't call any post processor in preview view render process. 

## Manually installing the plugin

-   Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/obsidian-advanced-codeblock/`.

## Releases

### 1.1.0

1. Funcitonalities are available in live-preview mode!

## Donating

<a href="https://www.buymeacoffee.com/lijyze" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 40px !important;width: 160px !important;" ></a>


%% README_END %%