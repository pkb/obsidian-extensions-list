---
aliases:
- Text Progress Bar
author:
- '[[authors/michaeladams|Michael Adams]]'
categories: []
description: Display low-fi text progress bars in your notes.
downloads: 6084
mobile: true
number: 796
stars: 38
title: Text Progress Bar
type: plugin
updated: '2023-04-28T16:43:38'
url: https://github.com/michaeladams/obsidian-text-progress-bar
version: 0.2.0
---

%% README_START %%

# Text Progress Bars for Obsidian

[![Release](https://img.shields.io/github/v/release/michaeladams/obsidian-text-progress-bar?display_name=tag)](https://github.com/michaeladams/obsidian-text-progress-bar/releases/latest)
[![Tests](https://github.com/michaeladams/obsidian-text-progress-bar/actions/workflows/test.yml/badge.svg)](https://github.com/michaeladams/obsidian-text-progress-bar/actions/workflows/test.yml)

Adds text-based and emoji progress bars to Obsidian.

## Usage

To create a progress bar, start a code block with "text-progress-bar".

A minimal bar contains the bars label, how much is complete, and the total number.

Defaults will be taken from the plugin settings.

~~~
```text-progress-bar
Books read:1/10
```
~~~

![Default example](https://raw.githubusercontent.com/michaeladams/obsidian-text-progress-bar/HEAD/images/example-default.jpg)

Optionally, all the settings can be specified:

~~~
```text-progress-bar
Books read:5/10
transition:|
fill:▓
empty: 
prefix:[
suffix:]
length:10
```
~~~

![Default example](https://raw.githubusercontent.com/michaeladams/obsidian-text-progress-bar/HEAD/images/example-all-settings.jpg)

Note that empty has "` `" - a special empty character.

Want emojis?  We got em:

~~~
```text-progress-bar
Chickens hatched:5/10
fill:🐥
empty:🥚
prefix:[
suffix:]
length:10
```
~~~

![Default example](https://raw.githubusercontent.com/michaeladams/obsidian-text-progress-bar/HEAD/images/example-emoji.jpg)

Specify a transition to display a character for partial completion:

~~~
```text-progress-bar
Thats no moon:10/20
transition: 🌘,🌗,🌔
fill:🌕
empty:🌑
prefix:[
suffix:]
length:3
```
~~~

![Default example](https://raw.githubusercontent.com/michaeladams/obsidian-text-progress-bar/HEAD/images/example-transition-emoji.jpg)

And use decimal numbers to specify the partial completion of emojis

~~~
```text-progress-bar
Books read:5.5/10
transition:📖
fill:📗
empty:📕
length:10
```
~~~

Or use ASCII characters for the transition:
~~~
```text-progress-bar
Books read:5/10
transition:⣦
fill:⣿
empty:⣀
prefix:⎸
suffix:⎹
length:3
```
~~~

![ASCII Transition](https://raw.githubusercontent.com/michaeladams/obsidian-text-progress-bar/HEAD/images/example-transition-ascii.jpg)

### Multiple progress bars.

Progress bars can be grouped together in one block using multiple labels.
~~~
```text-progress-bar
JAN:10.0/10
FEB:1.0/10
MAR:5.5/10
transition:📖
fill:📗
empty:📕
length:10
```
~~~

![Grouped progress](https://raw.githubusercontent.com/michaeladams/obsidian-text-progress-bar/HEAD/images/example-multiple.png)

## Installation

The plugin can be installed manually:

1. Download the latest release
2. Extract the contents into your ./obsidian/plugins/ folder
3. Reload Obsidian
4. Enable the plugin from your settings


%% README_END %%