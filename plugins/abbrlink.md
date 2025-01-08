---
aliases:
- Abbrlink
author:
- '[[authors/Hoshino-Yumetsuki|Q78KG]]'
categories: []
description: Automatically generate permanent short links for your markdown files.
downloads: 102
mobile: true
number: 2047
stars: 0
title: Abbrlink
type: plugin
updated: '2024-12-04T19:20:00'
url: https://github.com/Hoshino-Yumetsuki/obsidian-plugin-abbrlink
version: 1.1.4
---

%% README_START %%

# Abbrlink for Obsidian

English | [简体中文](README.zh-CN.md)

Generate permanent links for Markdown files.

## Features

- Generate unique links for Markdown files
- Support both automatic and manual generation modes
- Configurable hash length (4-32 digits)
- Hash collision detection and prevention
- Optional random hash generation mode
- Skip files with existing abbrlinks
- Step-by-step task building for efficient batch processing

## Usage

1. Enable the plugin in Obsidian settings
2. Click the link icon in the sidebar to batch generate abbrlinks for all files
3. Choose to automatically generate abbrlinks for new files

## Settings

### Basic Settings
- **Abbrlink Length**: Set the length of generated hash (4-32 digits)

### Automation Options
- **Skip Existing**: Skip processing files that already contain abbrlinks
- **Auto Generate**: Automatically generate abbrlinks for newly created Markdown files

### Advanced Options
- **Random Mode**: Use randomly generated SHA256 hash instead of filename-based hash
- **Check Hash Collision**: Automatically detect and avoid hash value conflicts

## Generated Format

The plugin adds an abbrlink field in the file's frontmatter:

```yaml
---
abbrlink: 1a2b3c4d
---
```


%% README_END %%