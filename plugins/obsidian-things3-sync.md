---
aliases:
- Things3 Sync
author:
- '[[authors/royxue|Royx]]'
categories:
- '[[categories/Integration|Integration]]'
- '[[categories/Task management|Task management]]'
description: An Obsidian plugin for sync between Obsidian and Things3, create Todo
  and sync Todo status
downloads: 11930
mobile: true
number: 652
stars: 82
title: Things3 Sync
type: plugin
updated: '2024-04-23T16:35:02'
url: https://github.com/royxue/obsidian-things3-sync
version: 1.3.0
---

%% README_START %%

# Things3 Sync
An Obsidian plugin for syncing between Obsidian and Things3. Supporting with Multi Language, Tags and Date, Cross-Platform.
## Features

* Support Mac OS and iOS.
* Support **Multiple Language** when creating todo.
* Support **Todo Tags**. You can just add tags after todo, or add default tags in setting.
* Support **Capture Date**, if you the file has a Date in it, it will capture the date when create the todo.

## Usage

### Create Todo
![create](https://raw.githubusercontent.com/royxue/obsidian-things3-sync/HEAD/misc/create.png)

* Select the line of todo

* Using `cmd + p` and run the `Things3 Sync: Create Todo`

* ***Tags***: for now, the tags only support Things exsited tags. So add tag in Things3 first, and then use this plugin.

### Toggle Todo

* Select the line of todo

* Using `cmd + P` and run the `Things3 Sync: Toggle Todo`

* The Todo will be toggled both in Obsidian and Things3

***Notes:*** If you wanna use the command conveniently, it would be better to set up a hotkeys for it.

### Create Todo from Note
Directly create a Todo from Obsidian Note, with a backlink in Things3

## Roadmap

- [x] Multiple Markdown elements support.

- [x] Permanent URL support.

- [x] Better tags support.

- [ ] ~~Better toggle trigger method.~~ Due to Things API limitation

- [ ] ~~Multi-line support.~~ Due to Things x Obsidian communication limitation

- [x] Obsidian Note to Things3 Todo

## Security

This plugin require your Things 3 Auth Token for sync Todo status. The token will be locally saved in your vault obsidian folder(./obsidian/plugins). So be carefully not to share the folder directly to anyone else, incase they got your token.

## Feedback & Request

Any feedback or request, please submit a issue here ;)
Thanks a lot.

## Attribution
These following repos offered great help during development:
* [Todoist Text](https://github.com/wesmoncrief/obsidian-todoist-text)
* [Things Link](https://github.com/gavinmn/obsidian-things-link)

## Buy me a coffee

<a href="https://www.buymeacoffee.com/royx" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>


%% README_END %%