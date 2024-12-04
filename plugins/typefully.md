---
aliases:
- Typefully
author:
- '[[dsebastien|Sébastien Dubois]]'
categories:
- '[[categories/Integration|Integration]]'
- '[[categories/Sharing and publishing|Sharing and publishing]]'
description: Typefully integration. Publish social media posts with ease
downloads: 93
mobile: true
number: 1940
stars: 8
title: Typefully
type: plugin
updated: '2024-10-27T08:57:03'
url: https://github.com/dsebastien/obsidian-typefully
version: 1.2.10
---

%% README_START %%

# Obsidian Typefully integration

Obsidian plugin that integrates [Typefully](./images/demo.gif)

![Demo of the Typefully plugin for obsidian](https://raw.githubusercontent.com/dsebastien/obsidian-typefully/HEAD/images/demo.gif)

## Features

- Publish the current note
- Publish the current selection

## Limitations

The Typefully API doesn't support images, Markdown, or HTML at this point (as far as I know). For this reason, I try to only send raw text over to the Typefully API.

For now, the plugin strips out:

- Obsidian links: `[[Some Link]]` becomes `Some Link`
- Markdown links: `[Google](https://www.google.com)` becomes `Google`
- Markdown quotes: `> Hey Jude` becomes `Hey Jude`
- YAML front matter (note properties)

That list will probably need to get longer (e.g., to handle embeds, callouts, etc). Don't hesitate to file issues.

## Configuration

- Typefully API Key: the API key to use. You can create one here: Settings > API & Integrations > API Keys
- Enable Auto retweet: If enabled, the post will have an AutoRT enabled, according to the one set on Typefully for the account
- Enable Auto plug: If enabled, the post will have an AutoPlug enabled, according to the one set on Typefully for the account
- Enable Threadify: If enabled, content will be automatically split into multiple tweets
- Enable Auto scheduling: If enabled, the post will be automatically scheduled in the next free slot

## News & support

To stay up to date about this plugin, Obsidian in general, Personal Knowledge Management and note-taking, subscribe to [my newsletter](https://dsebastien.net). Note that the best way to support my work is to become a paid subscriber ❤️.


%% README_END %%