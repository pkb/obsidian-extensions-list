---
aliases:
- Shukuchi
author:
- '[[authors/tadashi-aikawa|tadashi-aikawa]]'
categories: []
description: Teleport to links (URL or internal link) and jump to their destinations.
downloads: 3903
mobile: true
number: 965
stars: 22
title: Shukuchi
type: plugin
updated: '2024-01-01T12:26:59'
url: https://github.com/tadashi-aikawa/shukuchi
version: 0.4.1
---

%% README_START %%

# Shukuchi (縮地)

[![release](https://img.shields.io/github/release/tadashi-aikawa/shukuchi.svg)](https://github.com/tadashi-aikawa/shukuchi/releases/latest)
![downloads](https://img.shields.io/github/downloads/tadashi-aikawa/shukuchi/total)

Shukuchi is an Obsidian plugin that enables you to teleport to links (URL or internal link) and jump to their destinations.

https://user-images.githubusercontent.com/9500018/235339189-70bfef2b-2425-49aa-a35b-9fe30a1a6c4a.mp4

It essentially operates like the 'Follow link under cursor' command. The only difference is that even if there is no link under the cursor, it can close the distance to a nearby link and then navigate to its destination.

The priority of choosing a link is as follows.

1. Moves to the nearest link on the same line (depends on options).
2. If no link is on the same line, it moves to the link closest to the cursor.

## ⏬ Install

You can download from `Community plugins` in Obsidian settings.

## ⚙️ Options

![direction of possible teleportation](https://raw.githubusercontent.com/tadashi-aikawa/shukuchi/master/resources/direction-of-possible-teleportation.png)

## 🎮 Commands

- Open link
- Open link in new tab
- Open link in new window

## 📱 Mobile support

It both supports desktop and mobile.

## ❓ Why the plugin's name is Shukuchi (縮地)?

> The word shukuchi (縮地) is a Japanese-language term for various mythical techniques of rapid movement.  
> (referenced from [Shukuchi \- Wikipedia](https://en.wikipedia.org/wiki/Shukuchi))



%% README_END %%