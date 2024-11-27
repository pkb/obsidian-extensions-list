---
aliases:
- Vk group notifier
author:
- '[[filichev-evgeny|Filichev.Evgeny]]'
categories: []
description: Track news posts from the vk.com groups.
downloads: 1112
mobile: true
number: 1380
title: Vk group notifier
type: plugin
updated: '2023-12-26T17:48:39'
url: https://github.com/filichev-evgeny/obsidianvkupdatenotifier
version: 1.0.2
---

%% README_START %%

# Obsidian Vk group posts checker

This  plugin gives you ability to check new posts on the vk.com website

## How to use

- **vk.com account is required**. you can log in in the settings tab of the plugin. The requested permissions are : groups, offline. The authorization is handled by vk.com, plugin have no access to user's login/pass.
- create codeblock ``vk-group-notifier`` with "name:" argument. (use \``` at the begining of the block and \``` at the end ) (Check [Obsidian Markdown tutorial](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code%20blocks) if you don't know how to do them)

```vk-group-notifier
  name:nameOfTheGroup
```

* if group has no short name, you can use its "id". if both "name" and "id" are present, "id" will be used.

```vk-group-notifier
id: 12345
```

* you can overwrite any specific parameters for each code section

```vk-group-notifier
 name:groupName
 maxDays:23
 pinLast:true
 maxTextLength:15
 dateFormat:DD-MMMM-YYYY
```

## Manually installing the plugin

- Copy over `main.js`,  `manifest.json` to your vault `VaultFolder/.obsidian/plugins/anyFolderName/`.

## Android issues

I couldn't figure out how to use webview, so it is required to manually copy-paste auth link into the input field. Yes, I know that look not that user-friendly. You can also login on the PC, any kind of synchronization should carry the auth token.


%% README_END %%