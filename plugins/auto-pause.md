---
aliases:
- AutoPause
author:
- '[[ckep1|Chris Kephart]]'
categories: []
description: Allows one audio track to be played at a time, pausing or stopping any
  others.
downloads: 85
mobile: true
number: 1906
stars: 1
title: AutoPause
type: plugin
updated: '2024-09-25T01:46:38'
url: https://github.com/ckep1/obsidian-AutoPause
version: 1.0.1
---

%% README_START %%

# AutoPause

AutoPause is a simple Obsidian plugin that automatically pauses playing audio when a new clip is played, with the option to reset to the beginning instead of just pausing. This is to allow for one audio stream maximum without needing to locate the previous playing file.

## Features

- Automatically pauses playing audio when a new clip is played
- Option to reset to the beginning instead of just pausing
- Works on desktop and mobile across tabs and document types.

## Installation

1. Download the latest release from the [Releases](https://github.com/ckep1/obsidian-autopause/releases) page (manifest.json and main.js)
2. Add these files to a folder called `auto-pause` in the Plugins folder of your Obsidian Vault
3. Reload Obsidian

## Usage

- No interaction is required besides enabling the plugin.
- With an audio clip playing, starting another one will pause or stop the initial playing one depending on the setting.
- Tested and working with local audio files and the default Obsidian audio embed.

## Settings

- Reset to beginning: When enabled, other audio clips will be reset to the beginning instead of just pausing. This is the same as stopping in other audio players.


%% README_END %%