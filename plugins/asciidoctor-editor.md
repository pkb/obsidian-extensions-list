---
aliases:
- Asciidoctor editor
author:
- '[[authors/dzruyk|dzruyk]]'
categories:
- '[[categories/Other formats|Other formats]]'
description: View and modify asciidoc pages
downloads: 278
mobile: false
number: 1955
stars: 17
title: Asciidoctor editor
type: plugin
updated: '2024-12-22T03:50:59'
url: https://github.com/dzruyk/obsidian-asciidoc
version: 0.1.4
---

%% README_START %%

# Obsidian Asciidoc editor plugin

A plugin that allows you to edit and view documents in the asciidoc language.

The plugin supports both view and edit modes, which can be switched using standard `Toggle reading view` hotkey.

Global file search is not supported by Obsidian due to the limitations of the Obsidian API. But you can use the omnisearch plugin https://github.com/scambier/obsidian-omnisearch)


## preview

![preview](https://raw.githubusercontent.com/dzruyk/obsidian-asciidoc/HEAD/img/asciidoc.gif)

## How to use

- Clone this repo.
- Make sure your NodeJS is at least v16 (`node --version`).
- `npm i` or `yarn` to install dependencies.
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

## Please bump this Obsidian API feature request

https://forum.obsidian.md/t/expand-support-for-non-markdown-text-files/79807


%% README_END %%