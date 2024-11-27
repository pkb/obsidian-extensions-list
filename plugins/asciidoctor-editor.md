---
aliases:
- Asciidoctor editor
author:
- '[[dzruyk|dzruyk]]'
categories:
- '[[categories/Other formats|Other formats]]'
description: View and modify asciidoc pages
downloads: 121
mobile: false
number: 1955
title: Asciidoctor editor
type: plugin
updated: '2024-11-25T02:07:04'
url: https://github.com/dzruyk/obsidian-asciidoc
version: 0.1.3
---

%% README_START %%

# Obsidian Asciidoc editor plugin

A plugin that allows you to edit and view documents in the asciidoc language.

The plugin supports view and edit modes (switching the mode with `ctrl+e` hotkey). Substring search in document is partially supported.

Global search is not supported due to the limitations of the Obsidian API (however, you can use the omnisearch plugin https://github.com/scambier/obsidian-omnisearch)


## preview

![preview](https://raw.githubusercontent.com/dzruyk/obsidian-asciidoc/HEAD/img/asciidoc.gif)

## How to use

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.


%% README_END %%