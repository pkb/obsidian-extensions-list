---
aliases:
- Beeminder Word Count Plugin
author:
- '[[authors/kenzan100|Yuta Miyama]]'
categories: []
description: This lets you post word counts directly from obsidian file to Beeminder.
downloads: 4141
mobile: true
number: 165
stars: 13
title: Beeminder Word Count Plugin
type: plugin
updated: '2021-05-10T04:00:26'
url: https://github.com/kenzan100/beeminder-obsidian-word-count
version: 1.0.1
---

%% README_START %%

## Obsidian Plugin - Beeminder Word Count

This is a small plugin for Obsidian -> Beeminder word count integration.
- Obsidian https://obsidian.md
- Beeminder https://www.beeminder.com

## What it does

![4135afb222d7d94892f57f29fd17dbb5](https://user-images.githubusercontent.com/570263/116797588-4518fc80-aab5-11eb-9f9f-12efb5260307.gif)


1. Once installed, it will register command called "Send word count to Beeminder".
2. When command is selected, it'll count the words in current editing file. **It will only count the actively selected area.***
3. It then sends the value to the Beeminder endpoint.

*For my use-case, I do not want to over report the word counts when I edit the same file over multiple days.

## Setup

- Installing the plugin will register new setting in Plugin Options tab.
- Go to that tab, enter following 3 values:
  - user name for your Beeminder account
  - goal name to which word count will be posted to, and 
  - auth_token specified by http://api.beeminder.com/#personal-authentication-token.


## Upkeep of the plugin

### Releasing new releases

- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments.
- Publish the release.

### Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.

### API Documentation

See https://github.com/obsidianmd/obsidian-api


%% README_END %%