---
aliases:
- Palta Note
author:
- '[[mrniket|Niket Shah]]'
categories: []
description: Render Bhatkhande notation for Tabla.
downloads: 2758
mobile: true
number: 1165
stars: 3
title: Palta Note
type: plugin
updated: '2024-05-09T23:54:05'
url: https://github.com/mrniket/palta-obsidian-plugin
version: 1.7.1
---

%% README_START %%

# Palta Note Obsidian Plugin

Write Kaydas, Gats and Relas in Bhatkhande notation in Obsidian. Under the hood it uses the [`<palta-note>`](https://github.com/mrniket/palta-note) web component.

![Demo of Palta Obsidian Plugin in use](https://raw.githubusercontent.com/mrniket/palta-obsidian-plugin/HEAD/docs/demo.gif)

## Usage

Install the plugin. Then in any note you can create a palta code block with the follow structure: 

````
```palta
vibhags: 0 1 2
---
Tin Tin Na
Dhin Na
Dhin Na
```
````

which will then be rendered into:

![Rendered Example (Rupak)](https://raw.githubusercontent.com/mrniket/palta-obsidian-plugin/HEAD/docs/rendered_example_with_vibhags.png)

### Without vibhags

You can also choose to not specify the vibhag structure (if you want to quickly note things down for example):

````
```palta
Tin Tin Na
Dhin Na
Dhin Na
```
````

![Rupak without vibhags](https://raw.githubusercontent.com/mrniket/palta-obsidian-plugin/HEAD/docs/rendered_example_without_vibhags.png)

%% README_END %%