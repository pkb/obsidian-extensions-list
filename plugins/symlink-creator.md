---
aliases:
  - Symlink Creator
author:
  - "[[pteridin|Tobias Heidler]]"
categories:
  - "[[categories/File management|File management]]"
description: Create symlinks to files and folders inside and outside of your vault.
downloads: 248
mobile: false
number: 1909
title: Symlink Creator
type: plugin
updated: 2024-10-31T18:24:00
url: https://github.com/pteridin/obsidian_symlink_plugin
version: 0.1.3
---

%% README_START %%

# Symlink Creator

A Community Plugin for [Obsidian.md](https://obsidian.md) to add symlinks and junctions to your vault.

## Disclaimer

Please note that this Plugin is in early development and may not work as expected.
Furthermore, creating symlinks and junctions can be dangerous and may lead to data loss. Please use this Plugin with caution.

This plugin only works in Desktop mode, thus **mobile users are not supported**!


## Features

- Create symlinks to folders within & outside of your vault
  - Utilizes `ln -s` to create symlinks on Linux and MacOS
  - Utilizes `mklink /D` to create symlinks on Windows across different drives, requires admin privileges
  - Utilizes `mklink /J` to create junctions on Windows, requires no admin privileges
- Create symlinks to files within & outside of your vault
  - Utilizes `ln -s` to create symlinks on Linux and MacOS
  - Utilizes `mklink` to create symlinks on Windows, requires admin privileges

## Available Commands

- `Creates a symlink to a file`: Creates a symlink to a file
- `Creates a symlink to a folder`: Creates a symlink to a folder


%% README_END %%