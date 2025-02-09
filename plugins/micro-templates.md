---
aliases:
- Micro templates
author:
- '[[authors/epszaw|Konstantin Epishev]]'
categories:
- '[[categories/Templates|Templates]]'
description: Flexible embedded micro templates powered by javascript functions
downloads: 3563
mobile: true
number: 1034
stars: 8
title: Micro templates
type: plugin
updated: '2023-07-31T02:59:17'
url: https://github.com/epszaw/obsidian-micro-templates
version: 1.0.3
---

%% README_START %%

# Obsidian Micro Templates

## How it works

The plugin allows to use templates stored inside your vault as text snippets.

![](https://raw.githubusercontent.com/epszaw/obsidian-micro-templates/HEAD/static/demo.gif)

## Usage

1. Create a folder with templates inside your vault or select an existing one.
2. Use `Ctrl/Cmd + P` to open the command palette and select `Micro temlates: select source folder` (or set it manually in the plugin settings).
3. Then, use `Ctrl/Cmd + P` to open the command palette and select `Micro temlates: insert template` anywhere you want.

## Features

The plugin uses [ejs](https://ejs.co/) template engine to compile templates. It means that you can use any javascript code inside your templates.

Additionaly it provides [dayjs](https://day.js.org/) to use it as is right in the templates:

```md
<%= d().format("YYYY-MM-DD") %>
```

Use `$cur` marker string to mark place where cursor should be placed after template insertion:

```md
This is a template cursor should be between these [ $cur ] bkackets.
```


%% README_END %%