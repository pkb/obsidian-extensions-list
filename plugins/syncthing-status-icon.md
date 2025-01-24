---
aliases:
- Syncthing status icon
author:
- '[[authors/Diego-Viero|Diego Viero]]'
categories: []
description: Displays a status icon displaying whether the Syncthing server is on
  or not.
downloads: 73
mobile: false
number: 2115
stars: 0
title: Syncthing status icon
type: plugin
updated: '2025-01-07T21:58:32'
url: https://github.com/Diego-Viero/Syncthing-status-icon-Obsidian-plugin
version: 1.0.3
---

%% README_START %%

# Syncthing status icon

This Obsidian plugin adds an icon in the status bar displaying:
- A red dot if the syncthing process is not running.
- A green dot if syncthing is running.


## Features
Provides an always visible feedback of whether syncthing is running or not.
The rate at which the check is performed can be tuned in the plugin settings.


## Requirements
None

## How It Works
1. It periodically sends a request to localhost:8384.
2. If a response comes back, it displays a green dot in the status bar; otherwise it displays a red dot.


## Installation
From the Obsidian Community Plugins:
-	Open Settings > Community Plugins.
-	Click Browse, search for “Syncthing status icon”.
-	Click Install, then enable the plugin.
-	Optional: Open the plugin settings and change the rate at which the request is sent.

## Future Features
- 

## Feedback and Contributions

If you encounter issues, have feature requests, or want to contribute improvements, please open an issue or submit a pull request on the GitHub repository.

%% README_END %%