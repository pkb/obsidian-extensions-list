---
aliases:
- JSON table
author:
- '[[authors/dario-baumberger|Dario Baumberger]]'
categories: []
description: Simply switch between JSON and tables. Generate a table from a JSON string
  or a URL (which returns JSON) in your notes. Generate JSON from a table in your
  notes.
downloads: 4576
mobile: true
number: 1227
stars: 13
title: JSON table
type: plugin
updated: '2024-09-01T15:26:57'
url: https://github.com/dario-baumberger/obsidian-json-table
version: 1.0.3
---

%% README_START %%

[![Build and Test](https://github.com/dario-baumberger/obsidian-json-table/actions/workflows/build.yml/badge.svg)](https://github.com/dario-baumberger/obsidian-json-table/actions/workflows/build.yml)
[![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?color=7e6ad6&labelColor=34208c&label=Obsidian%20Downloads&query=$['json-table'].downloads&url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json&)](obsidian://show-plugin?id=json-table)
![GitHub stars](https://img.shields.io/github/stars/dario-baumberger/obsidian-json-table?style=flat)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/dario-baumberger/obsidian-json-table/blob/master/LICENCE)

# Obsidian JSON table

Simply switch between JSON and tables.

Generate a table from a JSON string or a URL (which returns JSON) in your notes. Generate JSON from a table in your notes.

## Commands

| Command                               | Description                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Generate table from selected JSON     | Creates a Markdown table based on your selected JSON. The JSON needs to be valid.                    |
| Generate table from selected JSON URL | Creates a Markdown table based on JSON data from selected URL. The URL needs to return a valid JSON. |
| Generate JSON from a selected table   | Creates JSON based on your selected table.                                                           |

### Examples

#### Table

```
| Name | Age | City   |
| ---- | --- | ------ |
| Doe  | 22  | Berlin |
| Pan  | 34  | Mumbai |
```

![Table to JSON](https://raw.githubusercontent.com/dario-baumberger/obsidian-json-table/HEAD/demo/table-to-json.gif)

#### JSON

```
[{"Name":"Doe","Age":"22","City":"Berlin"},{"Name":"Pan","Age":"34","City":"Mumbai"}]
```

![JSON to Table](https://raw.githubusercontent.com/dario-baumberger/obsidian-json-table/HEAD/demo/json-to-table.gif)

#### URL

-   `https://raw.githubusercontent.com/dario-baumberger/obsidian-json-table/master/demo/example.json`
-   `https://jsonplaceholder.typicode.com/todos`

![URL to Table](https://raw.githubusercontent.com/dario-baumberger/obsidian-json-table/HEAD/demo/url-to-table.gif)

## Installation

### Community Plugin

-   Follow this link [Obsidian Plugin](https://obsidian.md/plugins?id=json-table)
-   Or open Obsidian Settings, go to Community Plugins, browse "JSON Table" click install and activate.

### Manually installing the plugin

-   Go to the latest [Releases](https://github.com/dario-baumberger/obsidian-json-table/releases)
-   Download `main.js`, `manifest.json`
-   save into your vault `VaultFolder/.obsidian/plugins/obsidian-json-to-table/`

## Contribution

-   Feel free to [open an issue](https://github.com/dario-baumberger/obsidian-json-table/issues) if you miss something
-   Feel free to open a Pull request to implement a feature
    -   Please extend tests if you add logic


%% README_END %%