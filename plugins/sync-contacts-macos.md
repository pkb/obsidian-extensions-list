---
aliases:
- Sync Contacts on macOS
author:
- '[[authors/motschel123|Marcel Schöckel]]'
categories: []
description: Sync your contacts from macOS to your Obsidian Vault.
downloads: 3219
mobile: false
number: 1158
stars: 13
title: Sync Contacts on macOS
type: plugin
updated: '2024-10-15T21:00:53'
url: https://github.com/motschel123/Mac-Contact-Sync-Obsidian
version: 1.0.6
---

%% README_START %%

# Mac Contact Sync Plugin for Obsidian

<p align="center">
	<img src="https://img.shields.io/github/manifest-json/v/motschel123/Mac-Contact-Sync-Obsidian?color=blue">
    <img src="https://img.shields.io/github/release-date/motschel123/Mac-Contact-Sync-Obsidian">
	<img src="https://img.shields.io/github/license/motschel123/Mac-Contact-Sync-Obsidian">
	<img src="https://img.shields.io/github/downloads/motschel123/Mac-Contact-Sync-Obsidian/total">
	<img src="https://img.shields.io/github/issues/motschel123/Mac-Contact-Sync-Obsidian">
</p>

<p align="center">
This plugin provides a function to sync your contacts from your Mac's Contacts App into a folder in your Obsidian vault.
</p>
	
## Features

- Sync contacts from your Mac's Contacts app to Obsidian
- Contacts to sync can be filtered directly in the Contacts App
- Create a file for each contact, with configurable contact details

## How to use

1. Install the plugin
2. Change the Plugin Settings, i.e. rename ´Smart List´ Name 'Obsidian' if you like
3. Create the specified ´Smart List´ in the your Contacts App 
4. Run the command `Sync Contacts on macOS: Syncs contacts` to sync your contacts
5. After syncing, you will see a notification stating how many Contacts have been synced

## Notes
- In order to communicate with the Contacts app this plugin runs an AppleScript: when asked for permission, **allow Obsidian to access the Contacts app or this Plugin won't work.** 
- This plugin will only sync contacts on the `Smart List` defined in Settings, defaults to `'Obsidian'`.
- To create this list go to Contacts app > Edit > Smart Lists > Add Smart List > Name it according to your setting > Save.
- This plugin is not affiliated with Apple in any way.


%% README_END %%