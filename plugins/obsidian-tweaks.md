---
aliases:
- ObsidianTweaks
author:
- '[[authors/JeppeKlitgaard|Jeppe Klitgaard]]'
categories: []
description: Adds some convenient tweaks including improved toggling and ergonomic
  commands
downloads: 5436
mobile: true
number: 396
stars: 51
title: ObsidianTweaks
type: plugin
updated: '2022-03-22T05:22:27'
url: https://github.com/JeppeKlitgaard/ObsidianTweaks
version: 0.4.0
---

%% README_START %%

# ObsidianTweaks

[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/JeppeKlitgaard/ObsidianTweaks?style=for-the-badge&sort=semver)](https://github.com/JeppeKlitgaard/ObsidianTweaks/releases/latest)
![GitHub All Releases](https://img.shields.io/github/downloads/JeppeKlitgaard/ObsidianTweaks/total?style=for-the-badge)

This is a small plugin that implements some features of Obsidian that I believe
should've been part of the core release -- perhaps in the future they will be? ❤️

## Philosophy

- **By default no features are enabled**. You can enable the features you want.
  - Thus all features can also be disabled.
- All code is released into public domain without any requirement for attribution using the [Unlicense](https://unlicense.org/).

## Features

Below is a list of the current functionality available for you to enable.

Note that hotkeys cannot be 'disabled', but they can be set to <kbd>Blank</kbd>.
They are all set to <kbd>Blank</kbd> by default. Go to `Settings > Hotkeys` to set the shortcut to match suggestions below, or use your own binding!

### Commands
| Recommended hotkey | Action |
| --- | --- |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd> | Move Selection Left |
| <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd> | Move Selection Right |
| <kbd>Blank</kbd> | Better Toggle Bold (asterisks) |
| <kbd>Ctrl</kbd> + <kbd>B</kbd> | Better Toggle Bold (underscores) |
| <kbd>Blank</kbd> | Better Toggle Italics (asterisks) |
| <kbd>Ctrl</kbd> + <kbd>I</kbd> | Better Toggle Italics (underscores) |
| <kbd>Blank</kbd> | Better Toggle Code |
| <kbd>Ctrl</kbd> + <kbd>/</kbd> | Better Toggle Comment |
| <kbd>Blank</kbd> | Better Toggle Highlight |
| <kbd>Blank</kbd> | Better Toggle Strikethrough |
| <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> | Select Current Line(s) |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↑</kbd> | Copy Current Line(s) Up |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd> | Copy Current Line(s) Down |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd> | Copy Current Line(s) Left |
| <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd> | Copy Current Line(s) Right |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>1</kbd> | Toggle Heading - H1 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd> | Toggle Heading - H2 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>3</kbd> | Toggle Heading - H3 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>4</kbd> | Toggle Heading - H4 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>5</kbd> | Toggle Heading - H5 |
| <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>6</kbd> | Toggle Heading - H6 |
| <kbd>Blank</kbd> | New Adjacent File |
| <kbd>Blank</kbd> | Duplicate File |
### Better Toggles

The default toggles in Obsidian can be a bit wonky at times and do not always
work well. The toggles implemented here should always return to the
same state when toggled twice.

They also do nice word-wrapping for you.

Additionally __Bold__ and _Italics_ are implemented with underscores as well
as asterisks. Simply bind the command you want.

Math toggles are also included.

![Default formatting](https://raw.githubusercontent.com/JeppeKlitgaard/ObsidianTweaks/HEAD/images/DefaultFormatting.gif)

![Better formatting](https://raw.githubusercontent.com/JeppeKlitgaard/ObsidianTweaks/HEAD/images/BetterFormatting.gif)

## How to install

Install the Obsidian plugin via one of the three methods described below.

### Community Plugins

Install this plugin via the Obsidian Community Plugin interface (**Strongly Recommended**)

You can activate this plugin within Obsidian by doing the following:

    - Open Settings > Third-party plugin
    - Make sure Safe mode is off
    - Click Browse community plugins
    - Search for "**AnkiBridge**"
    - Click Install
    - Once installed, close the community plugins window and activate the newly installed plugin

### BRAT

If you have [Obsidian BRAT](https://github.com/TfTHacker/obsidian42-brat) plugin installed you can install ObsidianTweaks by doing the following:

    - Open `Command Palette`
    - Select the `Obsidian42 - BRAT: Add a beta plugin for testing` command
    - Paste in `JeppeKlitgaard/ObsidianTweaks` into the text field
    - Press `Add Plugin`
    - Activate the plugin now found under the `Settings → Community Plugins` menu

### Manual Installation

    Alternatively you can do a manual installation:
    
    - Download the latest `ObsidianTweaks-X.Y.Z.zip` from GitHub releases.
    - Create a new folder named `ObsidianTweaks`
    - Extract the files within the zip file into `ObsidianTweaks` folder
    - Place the folder in your .obsidian/plugins directory
    - Reload plugins (the easiest way is just restarting Obsidian)
    - Activate the plugin as normal.


## Why Unlicense?

In case the developers of Obsidian want to just straight copy some code into Obsidian, they can do that without worrying about licensing at all.

**Note that any contributions to ObsidianTweaks will thus also be Unlicensed.**

## Honorable Mentions

I initally planned to contribute to the [Hotkeys++](https://github.com/argenos/hotkeysplus-obsidian) plugin, but since I don't necessarily want ObsidianTweaks to be limited to hotkeys in the future, I decided to make my own.

## Contributors

- [Jeppe Klitgaard](https://github.com/JeppeKlitgaard)


%% README_END %%