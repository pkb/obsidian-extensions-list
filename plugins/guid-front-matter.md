---
aliases:
- Add an ID to the front matter
author:
- '[[llimllib|Bill Mill]]'
categories: []
description: Add a globally unique ID to every markdown document's front matter
downloads: 4379
mobile: true
number: 1003
stars: 21
title: Add an ID to the front matter
type: plugin
updated: '2023-06-21T07:06:13'
url: https://github.com/llimllib/obsidian-guid-plugin
version: 1.2.0
---

%% README_START %%

# Obsidian GUID plugin

This plugin will:

-   Add an unique ID to the front matter of every markdown file you edit.
-   Create a command `Add an ID to all notes` which will... add an ID to all notes

## Obsidian Documentation

See https://github.com/obsidianmd/obsidian-api and https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines

## Making a release

prerequisites: `jq`, `gh` and `make`. On mac: `brew install jq gh make`

-   update the version number in `manifest.json` and in `package.json`
-   run `make release`
-   follow the [obsidian docs to submit the plugin for review](https://marcus.se.net/obsidian-plugin-docs/publishing/submit-your-plugin#step-2--submit-your-plugin-for-review)


%% README_END %%