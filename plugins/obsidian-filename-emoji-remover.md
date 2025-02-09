---
aliases:
- Filename Emoji Remover
author:
- '[[authors/YTolun|Yüksel Tolun]]'
categories: []
description: This is a simple plugin to automatically remove emojis from filenames.
  Main purpose is to get rid of Dropbox sync issues for Readwise imported content.
downloads: 3880
mobile: true
number: 511
stars: 8
title: Filename Emoji Remover
type: plugin
updated: '2022-05-01T21:26:55'
url: https://github.com/YTolun/obsidian-filename-emoji-remover
version: 1.0.1
---

%% README_START %%

# Obsidian Filename Emoji Remover Plugin

A simple plugin for the note taking app [Obsidian](https://obsidian.md) that will rename your files to remove emojis in their names.

---

## Disclaimer

### 🔴 ! Please note that this is the first Obsidian plugin I've developed and likely has bugs. Make backups before using and use with caution ! 🔴

---

## Use Case

Services that automatically imports notes from other apps (like Readwise) sometimes imports content with emojis in the note filename. However, this can be an issues for other services, mainly, Dropbox.

## Functionality

-   **Manual Removal:** Scan all the existing files in your vault and remove emojis from filenames. Can be triggered from plugin settings tab or through a command from the command pallette.
-   **Auto-remove on create:** When a new file is created, automatically remove emojis from its title. Useful if you import content from another platform, for exaple Readwise. _Needs to be enabled from plugin settings._
-   **Auto-remove on rename:** When a file is renamed, automatically remove emojis from its title. _Needs to be enabled from plugin settings._
-   **No empty filename:** If a file's name consists solely of emojis and therefore becomes an empty string after the removal, this plugin will generate a generic and random name for that file to prevent it from disappearing.

## Changelog

### 1.0.1

-   Improved code quality based on reviews

## Roadmap

-   Improve generic/random file names that are generated for filenames that becomes an empty string after the removal.


%% README_END %%