---
aliases:
- Hierarchical Backlinks
author:
- '[[jasonmotylinski|Jason Motylinski]]'
categories: []
description: Displays backlinks in a hierarchy
downloads: 319
mobile: true
number: 1977
stars: 6
title: Hierarchical Backlinks
type: plugin
updated: '2024-11-28T06:37:57'
url: https://github.com/jasonmotylinski/hierarchical-backlinks
version: 1.0.5
---

%% README_START %%

[![GitHub manifest version](https://img.shields.io/github/manifest-json/v/jasonmotylinski/hierarchical-backlinks)](../../releases)
[![GitHub last commit](https://img.shields.io/github/last-commit/jasonmotylinski/hierarchical-backlinks)](../../commits/main/)
[![GitHub Open Issues](https://img.shields.io/github/issues/jasonmotylinski/hierarchical-backlinks)](../../issues)
[![GitHub Closed Issues](https://img.shields.io/github/issues-closed/jasonmotylinski/hierarchical-backlinks)](../../issues?q=is%3Aissue+is%3Aclosed)
[![GitHub License](https://img.shields.io/github/license/jasonmotylinski/hierarchical-backlinks)](/LICENSE)
[![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&query=%24%5B%22hierarchical-backlinks%22%5D.downloads&logo=obsidian&logoColor=a88bfa&label=downloads&color=a88bfa)](https://obsidian.md/plugins?id=hierarchical-backlinks)

# Hierarchical Backlinks

## Overview
Displays backlinks for the active document as a hierarchy based on the folder structure of the references.

 ![image](https://raw.githubusercontent.com/jasonmotylinski/hierarchical-backlinks/HEAD/docs/plugin_example.png)

## Motivation
In the age old folders vs tags debate I lean heavier on physically organizing notes into high level categories of directories. The tag hierarchy display provides a nice overview of tags and how they relate to each other and I wanted something similar that leveraged the directory structure to display backlinks as a tree.

## Example
Here's a comparison of the core plugin vs the hierarchical backlinks plugin in action.

This is how the out-of-the-box core backlinks plugin displays backlinks:
![image](https://raw.githubusercontent.com/jasonmotylinski/hierarchical-backlinks/HEAD/docs/core.png)

This is how this plugin displays backlinks:
 ![image](https://raw.githubusercontent.com/jasonmotylinski/hierarchical-backlinks/HEAD/docs/plugin.png)

## Features
- Collapsable tree structure allows you to easily focus on what what is most important
- Clickable links to references

## Commands
The following commands are available in the Obsidian Command Palett:

| Command | Description |
|---------|-------------|
| Show hierarchical backlinks | Displays the panel in the event it was closed |

## Development

### Setup
```bash
npm install
```

### Running
```bash
npm run dev
```

<a href="https://www.buymeacoffee.com/jasonmotylinski" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee"></a>

%% README_END %%