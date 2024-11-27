---
aliases:
- Encoder/Decoder
author:
- '[[rudimuc|Rudi Häusler]]'
categories: []
description: Converts text into other formats (base64, ROT13)
downloads: 2112
mobile: true
number: 1325
title: Encoder/Decoder
type: plugin
updated: '2024-02-13T14:28:13'
url: https://github.com/rudimuc/obsidian-coder
version: 1.1.0
---

%% README_START %%

# Encoder/Decoder Obsidian Plugin

This is a plugin for [Obsidian](https://obsidian.md) to encode / decode texts.

The first version supports only a text to base64 encoding.

The library used for the encoding is [base64-js](https://github.com/beatgammit/base64-js).


## Installation
### From within Obsidian
From Obsidian v0.9.8, you can activate this plugin within Obsidian by doing the following:
- Open Settings > Third-party plugin
- Make sure Safe mode is **off**
- Click Browse community plugins
- Search for "Encoder/Decoder Plugin"
- Click Install
- Once installed, close the community plugins window and activate the newly installed plugin

### From Github
- Clone this repository
- Follow the instructions of the official [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin) to deploy it in your local installation

## Usage

Following conversions are available

| Source    | Destination   | Markdown keyword       |
|-----------|---------------|------------------------|
| text      | base64        | transform-text-base64  |
| text      | ROT13         | transform-text-rot13   |
| ROT13     | text          | transform-rot13-text   |


Type the Markdown keyword to use the specific encoding.

For example if you like to print out a given text as base64 you have to write:

````markdown
```transform-text-base64
this is a text to encode
```
````

The result will be this:

dGhpcyBpcyBhIHRleHQgdG8gZW5jb2Rl

## Version History

### 1.1.0
- Added ROT13 conversion

### 1.0.0
- First version to convert text to base64


## Roadmap

Upcoming changes for this plugin:

- Base64 to text
- Text to Vigenere
- Vigenere to text
- ROT13 to text
- Text to hex
- Hex to text
- Text to ascii art (based on https://www.npmjs.com/package/figlet)
- 


%% README_END %%