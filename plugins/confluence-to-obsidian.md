---
aliases:
- Confluence Import
author:
- '[[authors/KkEi34|K]]'
categories:
- '[[categories/Import|Import]]'
description: Import Confluence space into Obsidian vault
downloads: 4892
mobile: false
number: 959
stars: 33
title: Confluence Import
type: plugin
updated: '2024-01-26T22:17:11'
url: https://github.com/KkEi34/confluence-to-obsidian-plugin
version: 0.2.6
---

%% README_START %%

# Confluence Import

This plugin imports [Confluence](https://www.atlassian.com/software/confluence) space exported as HTML into [Obsidian](https://obsidian.md) vault.

> [!NOTE]
> - The plugin is currently WIP, so use it on your own risk
> - Works only on desktop (tested on Windows 10, Ubuntu 22, macOS Sonoma)
> - Under the hood the plugin uses [confluence-to-markdown](https://github.com/KkEi34/confluence-to-markdown)

# Requirements
You must have [pandoc](http://pandoc.org/installing.html) command line tool installed.
> [!NOTE]
> On macOS, the plugin assumes that Pandoc is located in `/usr/local/bin`, which is its default installation path when using `brew install pandoc`.
> You can use `which pandoc` in the terminal to check the location of pandoc.

# How to use
1. Export Confluence space as HTML
   - **Confluence Server**
     - Open space
     - Select **Space Tools** | **Content Tools** | **Export** 
     - Select **HTML** as export format and click **Next>>**
     - In **Export HTML Options** choose **Normal** or **Custom** export and click **Export**
     - Download `zip` file
   - **Confluence Cloud**
     - Open space
     - Select **Space Settings**, in **Manage space** group select "Export space"
     - Select **HTML** as export format and click **Next>>**
     - In **Export HTML Options** choose Normal or Custom export and click **Export**
     - Download `zip` file
 2. Import Space into Obsidian
    - Extract zip file
    - In Obsidian command palette select **Confluence Import: Import Confluence space** command
    - In **Space directory** field of **Import Confluence space** dialog provide path to the confluence space folder, extracted from `zip` file and click **Import**

![import-space](https://raw.githubusercontent.com/KkEi34/confluence-to-obsidian-plugin/HEAD/docs/assets/import-space.gif)



%% README_END %%