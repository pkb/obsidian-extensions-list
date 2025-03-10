---
aliases:
- Inbox
author:
- '[[authors/Zachatoo|Zachatoo]]'
categories: []
description: Show in app notification if there is data to process in the "inbox" note.
downloads: 5360
mobile: true
number: 795
stars: 26
title: Inbox
type: plugin
updated: '2024-03-06T11:06:20'
url: https://github.com/Zachatoo/obsidian-inbox
version: 3.0.2
---

%% README_START %%

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22inbox%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

# Obsidian Inbox

When using a third party tool to quickly write content to your Obsidian vault without opening your vault, often it's easiest to write it to an "inbox" note or folder to process later.

This plugin will let you know if there's content to process in your inbox note/folder when launching Obsidian.

## Installation

Recommended to install from the Obsidian community store.

You can manually install this using the [BRAT](https://github.com/TfTHacker/obsidian42-brat) Obsidian plugin. Generic installation instructions are available on that plugin's documentation.

## Settings

### Track note or folder

Whether to track inbox by referencing the contents of a single file or a folder of files.

### Inbox path

Path for inbox note/folder.

For example, if your inbox note is in the root of your vault and called "Mobile Inbox", then the path would be "Mobile Inbox.md".

### Compare type

What to compare the inbox note contents to when deciding whether or not to notify. 'Compare to last tracked' will compare to a snapshot from when Obsidian was last closed. 'Compare to base' will compare to a base contents that you define.

### Inbox base contents

If note content matches this exactly, then you will not be notified. This is only available if you select 'Compare to base' as the compare type.

For example, if the "unproccessed" version of your inbox note looks like this

```md
# Mobile Inbox
```

then you should set your inbox base contents to match. That way, you will only be notified if there's additional contents besides the heading.

### Inbox notice duration

Duration to show Notice when there is data to process, in seconds. Set to `0` for infinite duration. Clear to use global default Notice duration.

## Attributions

-   Thank you to marcusolsson for [obsidian-svelte](https://github.com/marcusolsson/obsidian-svelte) that I used for creating many of the UI elements.


%% README_END %%