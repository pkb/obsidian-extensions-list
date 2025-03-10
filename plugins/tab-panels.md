---
aliases:
- Tab Panels
author:
- '[[authors/GnoxNahte|GnoxNahte]]'
categories: []
description: Create tab panels to organize content into sections
downloads: 2401
mobile: true
number: 1950
stars: 21
title: Tab Panels
type: plugin
updated: '2024-12-27T11:02:25'
url: https://github.com/GnoxNahte/obsidian-tab-panels
version: 1.1.4
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

Install link: https://obsidian.md/plugins?id=tab-panels

## Getting Started
### Preview

https://github.com/user-attachments/assets/0eff7ace-bea9-4c7d-9a24-18d1b08f3e9c

Left - How it looks when it's rendered out (Live Preview/Reading mode) <br>
Right - The markdown used to render it (Source mode)

[Markdown used in the video](/readme-assets/preview-markdown.md?plain=1). <br>
Try copying it to view how it looks like in your vault!

### Syntax 
````
```tabs
--- Tab 1
Content for tab 1

--- Tab 2
Content for tab 2
```
````

> [!Tip]
> Add `(default)` to the tab name to open it automatically <br>
> Example: `--- Default tab (default)`
> 

## Additional Features
### Cache (Experimental)
The cache feature enables Obsidian to process data inside the tab panels, just like it does for regular markdown content. This means that **links, headings, and tags** within tab panels are now fully integrated with Obsidian's core functionality.

What this enables (similar to Obsidian's standard behaviour, but **now works in tab panels**):
- [Backlinks](https://help.obsidian.md/Plugins/Backlinks) and [Outgoing links](https://help.obsidian.md/Plugins/Outgoing+links) works.
- [Renaming linked files](https://help.obsidian.md/Files+and+folders/Manage+notes#Rename+a+note) updates markdown links in tab panels automatically.
- Headings in tab panels appear in the [Outline](https://help.obsidian.md/Plugins/Outline) (Table of Contents).
- [Tags](https://help.obsidian.md/Editing+and+formatting/Tags) within tab panels are searchable and visible in the [Tags view](https://help.obsidian.md/Plugins/Tags+view).
- Plugins like [Dataview](https://github.com/blacksmithgu/obsidian-dataview) can query and use data within tab panels.

> [!TIP]
> **Enabling caching for the first time**
> 
> To update the cache on the file, do one of these
> - Edit the file. It can be anything, adding a space, deleting a character, etc. Note that this only updates the cache for the edited file only.
> - Running "Rebuild cache" from the settings. This goes through your whole vault, finds all the data inside the tab panel code blocks and adds it to Obsidian's cache.

> [!WARNING]
> This feature is marked as experimental due to its complexity and recent release. While testing has shown it works as intended, there may still be edge cases or unexpected issues.
> - If you encounter any problems, please [report them](https://github.com/GnoxNahte/obsidian-tab-panels/issues/new?template=bug-report.yml).
> - This feature does not modify your files, so even if something goes wrong, your data is safe.
> - To remove all cache from this plugin:
> 	1. Disable caching
>   2. Reload Obsidian

<!-- TODO: ## Styles -->

## Known Issues & Limitations

### Adding code blocks inside the tab contents
If you use ` ``` tabs` to define the code blocks, Obsidian will assume you would want to close the tab panels when you use ` ``` ` again when you want to open a markdown code block. 

To solve this, do one of these:
- Use a different number of backticks for each code block.
`````
```` tabs
--- Tab 1
``` python
print("Hello world!")
```
````
`````
- Switch between `~~~` and ` ``` ` for declaring the tab panels block and for the markdown code block inside the tab contents.

`````
~~~ tabs
--- Tab 1
``` python
print("Goodbye world!")
```
~~~
`````

### Editing tab content
The plugin will only display a read-only version of the notes. Any interactivity will be lost. For example, checking a checkbox will not work.

### Caching - Footnotes
To use footnotes inside tabs, ensure that both the *footnote reference* (`[^1]`) and the *footnote definition* (`[^1]: definition`) are placed within the same tabs codeblocks. If either the footnote reference or its definition is located outside the tabs codeblock, Obsidian won't register it and will just display it as text instead of a footnote.

> [!NOTE]
> This doesn't apply for [inline footnotes](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#:~:text=You%20can%20also%20inline,not%20in%20Live%20Preview.) (`^[Inline footnote]`) as they combine the footnote reference and definition together.

## Roadmap
- [ ] Add more settings to control styling

Please [suggest any features](../../issues/new/choose) you want!

## Feedback
Have some feedback? Create a GitHub issue: [Bug report](https://github.com/GnoxNahte/obsidian-tab-panels/issues/new?template=bug-report.yml) or [Feature request](https://github.com/GnoxNahte/obsidian-tab-panels/issues/new?template=feature-request.md)
Questions (e.g. unsure how to use the plugin): [GitHub discussions](https://github.com/GnoxNahte/obsidian-tab-panels/discussions)

## Credits
- [Syntax](#syntax) was inspired by [Obsidian HTML Tabs](https://github.com/ptournet/obsidian-html-tabs), made by [ptournet](https://github.com/ptournet)

%% README_END %%