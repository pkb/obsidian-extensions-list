---
aliases:
- Hexo Publisher
author:
- '[[authors/zhenlohuang|zhenlohuang]]'
categories:
- '[[categories/Sharing and publishing|Sharing and publishing]]'
description: Publish your notes to Hexo
downloads: 123
mobile: false
number: 1825
stars: 5
title: Hexo Publisher
type: plugin
updated: '2024-06-30T18:24:49'
url: https://github.com/zhenlohuang/obsidian-hexo-publisher
version: 0.0.5
---

%% README_START %%

# Obsidian Hexo Publisher

Obsidian Hexo Publisher is an Obsidian plugin that enables users to sync their Obsidian notes to their Hexo blog effortlessly. With this plugin, users can easily synchronize their notes written in Obsidian to their Hexo blog, including both the article content and related images.

## Features

- Sync Obsidian notes to Hexo blog
- Automatically handle Markdown formatting, including comment and image link conversion
- Configurable Hexo site settings

## Installation

1. Open Obsidian.
2. Go to Settings and select the "Community Plugins" tab.
3. Click on "Browse" and search for "Obsidian Hexo Publisher".
4. Click "Install".

## Configuration

1. Open the plugin settings.
2. Configure the following options under "Hexo Site Settings":
   - **Git Repo**: The Git repository path of the Hexo site.
   - **Source Dir**: The source folder path of the Hexo site.

## Usage

1. Write your notes and add `publish=true` in frontmatter in Obsidian.
```
publish: true
```
2. Use the "Publish Posts" command in the plugin to sync your notes to the Hexo site.
3. Check your Hexo site to confirm that the notes have been successfully synced.

## Author

This plugin is developed by [zhenlohuang](http://www.yidoo.xyz/).

## Support

For any issues or suggestions, please submit an issue or request on the GitHub repository.


%% README_END %%