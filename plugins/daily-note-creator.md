---
aliases:
- Daily note creator
author:
- '[[authors/mario-holubar|Mario Holubar]]'
categories: []
description: Automatically creates missing daily notes
downloads: 1592
mobile: true
number: 1387
stars: 7
title: Daily note creator
type: plugin
updated: '2024-02-06T03:33:09'
url: https://github.com/mario-holubar/obsidian-daily-note-creator
version: 1.0.0
---

%% README_START %%

# Daily note creator

Do you want [Obsidian](https://obsidian.md/) to create your [daily notes](https://help.obsidian.md/Plugins/Daily+notes) automatically, without opening the daily note on startup, and including days that you haven't opened the vault? Then this is the plugin for you!

It acts as an alternative to [Auto Journal](https://github.com/Ebonsignori/obsidian-auto-journal). Auto Journal also has backfill functionality and comes with more features such as monthly notes, but also enforces a certain folder structure.

Daily note creator is designed to be an add-on to the daily notes core plugin, rather than a replacement, and will use the settings you defined there to create missing notes.

## Features

![options](https://raw.githubusercontent.com/mario-holubar/obsidian-daily-note-creator/HEAD/images/options.png)

**Create daily note on startup** lets you disable the built-in `open daily note on startup` option. This is useful if you want to open the vault on your last open note, or your homepage.

**Auto-create missed daily notes on startup** will fill in daily notes for days that you didn't open the vault. If this is more than a week, it will ask for confirmation.

**Create missing daily notes** is a command you can trigger anytime to open a pop-up window that lets you fill in missed notes for any range of time. Use this if you want to fill in some missing days in the past.

![modal](https://raw.githubusercontent.com/mario-holubar/obsidian-daily-note-creator/HEAD/images/modal.png)

## Known issues

As of right now, the plugin will misbehave if your daily notes are organized in a folder structure (e.g. `YYYY/MM/DD`) or if they have text other than the date in the filename (e.g. `2023-12-31 New Year's Eve`). Both of these problems are caused by the underlying [obsidian-daily-notes-interface](https://github.com/liamcain/obsidian-daily-notes-interface) package and have open issues: [#21](https://github.com/liamcain/obsidian-daily-notes-interface/issues/21), [#27](https://github.com/liamcain/obsidian-daily-notes-interface/issues/27). I will update this plugin once these are resolved.


%% README_END %%