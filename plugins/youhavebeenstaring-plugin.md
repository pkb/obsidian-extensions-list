---
aliases:
- YouHaveBeenStaring
author:
- '[[fxal|Felix Almer]]'
categories:
- '[[categories/Statistics|Statistics]]'
description: This plugin tells you in the status bar for how long you've been staring
  at your obsidian vault. Well - at least how long your vault is open.
downloads: 5131
mobile: true
number: 70
stars: 5
title: YouHaveBeenStaring
type: plugin
updated: '2021-05-23T15:04:20'
url: https://github.com/fxal/obsidian-youhavebeenstaring-plugin
version: 1.2.2
---

%% README_START %%

# Obsidian Plugin *YouHaveBeenStaring*

This is a plugin for Obsidian (https://obsidian.md).

It tells you in natural language in the status bar for how long your vault is open (since how long ago the plugin was loaded). Also for how long you had your vault open in total, but that's optional.

A sweet, short and subtle reminder that you might want to take a break from staring at your screen 🧐.

## Features
- [x] Show for how long you've been staring at your vault since startup of obsidian in the status bar
- [x] Show total staring time (measured in increments of 1s whenever the plugin is active) in the status bar
- [x] Allow customization of display text `You have been staring at your vault for $amount` (both total and current staring duration)
- [x] Starting and stopping of the counter with a ribbon button
- [x] Saving of the staring time is done every 10 minutes as well as on every settings change, when unloading the plugin and when starting/stopping the counter via the ribbon icon to prevent too many disk writes
- [x] Allow actual time (days, hours, minutes, etc.) to be used in the status text instead of only the humanize output of the duration

## TODO
- [ ] Implement `take a break` reminders, configurable
- [ ] Add visualization for staring time, similar to github activity
- [ ] Enhance status bar text by allowing templating

## Deprecated
~~Allow calculating the current staring duration from midnight today, if the startup was earlier than midnight today~~

## How to install
*You can find this plugin in the official third party obsidian plugins*

### For downloading from this repo:

Simply download and install this plugin in your *.obsidian/plugins* folder.

Then restart your Obsidian instance, navigate to "Settings -> Third-party plugins" and enable "YouHaveBeenStaring".

You will see the time since when you've been staring at your vault in the lower right status bar.

![](https://raw.githubusercontent.com/fxal/obsidian-youhavebeenstaring-plugin/HEAD/screenshot.png)


%% README_END %%