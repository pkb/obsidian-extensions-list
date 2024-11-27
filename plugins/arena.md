---
aliases:
- Are.na unofficial
author:
- 0xroko
author_page: https://github.com/0xroko
categories: []
description: Allows you to save Are.na blocks as notes.
downloads: 2140
mobile: true
number: 1276
title: Are.na unofficial
type: plugin
updated: '2024-06-24T18:46:28'
url: https://github.com/0xroko/obsidian-arena-plugin
version: 1.0.3
---

%% README_START %%

# Are.na plugin for Obsidian

Allows you to save [Are.na](are.na/about) blocks as Obsidian notes.

![demo](https://raw.githubusercontent.com/0xroko/obsidian-arena-plugin/HEAD/.github/demo.gif)

[Install here](https://obsidian.md/plugins?id=arena)

## Features

> [!IMPORTANT]
> If you want to save private blocks, you need to [create a personal access token](#create-your-arena-personal-access-token)

-   Local first, save Are.na blocks in your Obsidian notes
-   Display Are.na blocks in your Obsidian notes, block <-> note
-   Support for all block types
-   Easily open Are.na blocks in your browser
-   No DB -> file name is the block id

If you want to see a feature implemented, open an issue or a PR.

## Usage

### Create your Are.na personal access token

1. Go to [dev.are.na/oauth/applications](https://dev.are.na/oauth/applications) and login with your Are.na account (this is the official Are.na API)
   ![](https://raw.githubusercontent.com/0xroko/obsidian-arena-plugin/HEAD/.github/ap.png)

2. Create a new application
   ![](https://raw.githubusercontent.com/0xroko/obsidian-arena-plugin/HEAD/.github/ap2.png)

-   Name the application whatever you want (e.g. Obsidian plugin)
-   Set the redirect URI to `https://example.com` (it doesn't matter)
-   Submit

3. Copy the `Personal Access Token` and enter it in the plugin settings
   ![](https://raw.githubusercontent.com/0xroko/obsidian-arena-plugin/HEAD/.github/ap3.png)

### Insert block

1. Open the command palette and search for `Insert Are.na block`
2. Done! Block will be inserted in your current note (and saved locally in `are.na` folder)


%% README_END %%