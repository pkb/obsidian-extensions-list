---
aliases:
- Inline spoilers
author:
- '[[logonoff|logonoff]]'
categories: []
description: Adds Discord-like syntax for inline spoilers.
downloads: 1442
mobile: true
number: 1826
stars: 9
title: Inline spoilers
type: plugin
updated: '2024-11-15T06:28:10'
url: https://github.com/logonoff/obsidian-inline-spoilers
version: 1.1.2
---

%% README_START %%

# Inline Spoilers for Obsidian
This plugin adds support for inline spoilers in [Obsidian](https://obsidian.md) using the `||` syntax.

![Demo gif](https://i.imgur.com/YyfMuJt.gif)

## Usage
To create an inline spoiler, wrap the text you want to hide in `||`, or by performing the **Inline spoilers: Create spoiler** command. For example:

```
||This text will be hidden||
```

If you want to combine various formatting options, you can nest them, but make sure they are outside the spoiler:

```
**||This text will be hidden and bolded||**

*||This text will be hidden and italicized||*
```

To reveal or hide a spoiler, click on it. You may opt to always show all spoilers by enabling the **Always show spoilers** setting.


## Known issues
- When **Hide spoilers in editor view (experimental)** is enabled, the spoiler text will be visible if it is inside a table cell.


%% README_END %%