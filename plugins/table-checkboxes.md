---
aliases:
- Markdown table checkboxes
author:
- Dylan Giesberts
author_page: https://github.com/DylanGiesberts
categories: []
description: Converts markdown checkboxes in tables to HTML, and reflects the state
  upon (un)checking them.
downloads: 8880
mobile: true
number: 1199
title: Markdown table checkboxes
type: plugin
updated: '2024-04-06T19:37:03'
url: https://github.com/DylanGiesberts/obsidian-table-checkboxes
version: 2.0.8
---

%% README_START %%

# Obsidian Tables Checkboxes
This plugin for [Obsidian](https://obsidian.md) replaces markdown checkboxes `-[]` inside markdown tables with HTML checkboxes.

## Example
https://github.com/DylanGiesberts/obsidian-table-checkboxes/assets/66573865/7a218dd4-2575-41e8-b615-01f97c0a9bdb

## Installing the plugin
Now available in the plugin store!
1. Navigate to the plugins store (Settings => Community plugins -> Browse)
2. Search for 'Markdown table checkboxes'
3. Select the plugin and click Install

## How to use
- Simply enable the plugin and type a markdown checkbox inside a table. It will get converted to a HTML checkbox.
- In either live preview or view mode, (un)check the checkbox and the state will be reflected in your file.

## How it works
- Whenever a closing bracket `]` is typed to close a checkbox, it will be replaced by an HTML checkbox `<input type="checkbox" unchecked id="...">`.
- When the checkbox is clicked in the preview, the checkbox in the file is found by its ID.
- The `checked` state of the checkbox gets toggled.


%% README_END %%