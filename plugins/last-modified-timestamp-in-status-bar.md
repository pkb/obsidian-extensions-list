---
aliases:
- File Creation and Last Modified Timestamps in Status Bar
author:
- '[[authors/Yustynn|Yustynn]]'
categories: []
description: Dynamic display of file modification and creation timestamps in the status
  bar.
downloads: 6725
mobile: false
number: 923
stars: 17
title: File Creation and Last Modified Timestamps in Status Bar
type: plugin
updated: '2024-10-21T00:18:39'
url: https://github.com/Yustynn/obsidian-last-modified-timestamp-in-status-bar
version: 1.3.0
---

%% README_START %%

# Last Modified Timestamp in Status Bar
Displays the last modified timestamp of your current note on your status bar!

## Usage
The timestamp updates frequently (every 2 seconds, and when notes are switched).

![demo](https://raw.githubusercontent.com/Yustynn/obsidian-last-modified-timestamp-in-status-bar/HEAD/img/demo.png)

## Customizability
- Enable/disable toggle for both **created** and **last modified** timestamps
- Timestamp format for both **created** and **last modified** timestamps
- Timestamp title in status bar for both **created** and **last modified** timestamps
- Refresh interval for **last modified** timestamp

![settings](https://raw.githubusercontent.com/Yustynn/obsidian-last-modified-timestamp-in-status-bar/HEAD/img/settings.png)

# Change Log
## 1.3.0
- (efficiency) Update modification time based on a change (vault `modify`) event, instead of constant polling

Thanks to @pjeby for the PR

## 1.2.0
- Add ability to toggle **Created** and **Last Modified** timestamps

Thanks to @joeraad for the PR

## 1.1.0
- Add **Created** timestamp
- Add ability to change the **Last Modified** refresh interval


%% README_END %%