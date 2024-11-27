---
aliases:
- Tab Panels
author:
- GnoxNahte
author_page: https://gnoxnahte.com
categories: []
description: Create tab panels to organize content into sections
downloads: 821
funding_page: https://ko-fi.com/gnoxnahtedev
mobile: true
number: 1950
title: Tab Panels
type: plugin
updated: '2024-11-15T12:40:43'
url: https://github.com/GnoxNahte/obsidian-tab-panels
version: 1.0.2
---

%% README_START %%

[![GitHub manifest version](https://img.shields.io/github/manifest-json/v/gnoxnahte/obsidian-tab-panels)](../../releases)
[![GitHub last commit](https://img.shields.io/github/last-commit/gnoxnahte/obsidian-tab-panels)](../../commits/main/)
[![GitHub Open Issues](https://img.shields.io/github/issues/gnoxnahte/obsidian-tab-panels)](../../issues)
[![GitHub Closed Issues](https://img.shields.io/github/issues-closed/gnoxnahte/obsidian-tab-panels)](../../issues?q=is%3Aissue+is%3Aclosed)
[![GitHub License](https://img.shields.io/github/license/gnoxnahte/obsidian-tab-panels)](/LICENSE)
[![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&query=%24%5B%22tab-panels%22%5D.downloads&logo=obsidian&logoColor=a88bfa&label=downloads&color=a88bfa)](https://obsidian.md/plugins?id=tab-panels)

# obsidian-tab-panels
[Obsidian](https://obsidian.md/) plugin to easily create tab panels to organize content into sections.

## 🚀 Getting Started
### 🖼️ Preview
![GIF showing how the plugin looks](https://raw.githubusercontent.com/GnoxNahte/obsidian-tab-panels/HEAD/readme-assets/tab-panels-preview.gif)

Left - How it looks when it's rendered out (Live Preview/Reading mode) <br>
Right - The markdown used to render it (Source mode)

[Markdown used for the GIF](/readme-assets/preview-markdown.md). <br>
Try copying it to view how it looks like in your vault!

### 📝 Syntax 
```tab-panels
--- Tab 1
Content for tab 1
--- Tab 2
Content for tab 2
```

> [!Tip]
> Add `(default)` to the tab name to open it automatically <br>
> Example: `--- Default tab (default)`
> 

<!-- TODO: ### :sparkles: Features -->

<!-- TODO: ### :art: Styles -->

## ⚠️: Known Issues & Limitations

### ❗Adding code blocks inside the tab contents
Use `~~~` instead when defining code blocks. Or if you want to continue to use \```, use `~~~tab-panels` to create the code block instead

This prevents conflicts with the 2 syntaxes: ~~~ and ```

### ❗Code block not rendering
This is an Obsidian bug where if the code block is very long, Obsidian does not trigger the code that makes the plugin render the content. This happens to other plugins too.

**Workaround**: Scroll all the way down to the end of the code block

## 🛤️ Roadmap
Please [suggest any features](../../issues/new/choose) you want!

## 💬 Feedback
Have some feedback? Create a GitHub issue: [Bug report](https://github.com/GnoxNahte/obsidian-tab-panels/issues/new?template=bug-report.yml) or [Feature request](https://github.com/GnoxNahte/obsidian-tab-panels/issues/new?template=feature-request.md)
Questions (e.g. unsure how to use the plugin): [GitHub discussions](https://github.com/GnoxNahte/obsidian-tab-panels/discussions)

## 🌟 Credits
- [Syntax](#-syntax) was inspired by [Obsidian HTML Tabs](https://github.com/ptournet/obsidian-html-tabs), made by [ptournet](https://github.com/ptournet)

%% README_END %%