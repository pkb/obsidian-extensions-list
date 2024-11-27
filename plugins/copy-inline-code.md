---
aliases:
- Copy Inline Code
author:
- '[[Alddar|Ondrej Zavodny]]'
categories: []
description: Easily copy the contents of an inline code element with a single click.
downloads: 6571
mobile: true
number: 1057
title: Copy Inline Code
type: plugin
updated: '2023-12-02T23:58:45'
url: https://github.com/Alddar/obsidian-copy-inline-code-plugin
version: 1.2.0
---

%% README_START %%

# Obsidian Copy Inline Code Plugin

This plugin for [Obsidian](https://obsidian.md) adds an icon inside each inline code, which when clicked, copies the content of the code into the clipboard. See screenshot of the functionality below.

![Screenshot of the copy inline code plugin](https://raw.githubusercontent.com/Alddar/obsidian-copy-inline-code-plugin/HEAD/plugin-screenshot.png)

## Installation
### Using built-in Obsidian plugin installer
From Obsidian v0.9.8, you can activate this plugin within Obsidian by doing the following:

- Open Settings > Third-party plugin
- Make sure Safe mode is off
- Click Browse community plugins
- Search for "Copy Inline Code"
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin

### Installing manually

- Download `main.js`, `styles.css`, `manifest.json` from the latest release
- Copy the files to your vault `[valut-folder]/.obsidian/plugins/copy-inline-code-plugin/`.

### Updates
You can follow the same procedure to update the plugin

## Development

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.


%% README_END %%