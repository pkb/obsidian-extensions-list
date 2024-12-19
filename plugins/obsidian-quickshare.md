---
aliases:
- QuickShare
author:
- '[[authors/mcndt|Maxime Cannoodt (@mcndt)]]'
categories:
- '[[categories/Sharing and publishing|Sharing and publishing]]'
description: Securely share your Obsidian notes with one click. Notes are end-to-end
  encrypted. No API keys or configuration required.
downloads: 21664
mobile: true
number: 588
stars: 256
title: QuickShare
type: plugin
updated: '2023-01-07T14:36:55'
url: https://github.com/mcndt/obsidian-quickshare
version: 1.3.1
---

%% README_START %%

[![GitHub tag (Latest by date)](https://img.shields.io/github/v/tag/mcndt/obsidian-quickshare)](https://github.com/mcndt/obsidian-quickshare/releases) ![GitHub all releases](https://img.shields.io/github/downloads/mcndt/obsidian-quickshare/total)

# Obsidian QuickShare - Securely share your Obsidian notes with one click

Host Obsidian notes over the internet using end-to-end encryption. Requires zero configuration and no account.

I built this service mainly to use for myself, as I got sick of finding third-party services to quickly share some Markdown notes I wrote in Obsidian. Because I believe that others might find this useful too, I decided to release it as a public service.

## How it works

Your notes are stored securely using strong AES-256-CBC encryption. The decryption key is never sent to the server, so not even the server can open your notes.

By default, notes are stored on my companion project, [Noteshare.space](https://noteshare.space/). It is a simple storage service that caches your encrypted notes for 31 days and hosts a web application for viewing them. Both the server and frontend are [open source](https://github.com/mcndt/noteshare.space) under the MIT license. Users are free to host an instance of the storage service at their own domain.

![Explainer](https://raw.githubusercontent.com/mcndt/obsidian-quickshare/HEAD/img/explainer-img.png)
## Functionality

- AES-256-CBC encryption with single-use encryption keys
- Requires no account or external API keys
- Use [Noteshare.space](https://noteshare.space) to share notes for free, or [host your own instance](https://github.com/mcndt/noteshare.space#deployment) to gain full control.

## Installing

Both the plugin and Noteshare.space are currently in beta. To beta test, you can install the plugin using BRAT (see [BRAT > Adding a beta plugin](https://github.com/TfTHacker/obsidian42-brat#adding-a-beta-plugin) for further instructions).

## Feedback

The preferred way to report bugs or request new features for the web app or the Obsidian plugin is via the [GitHub issues page](https://github.com/mcndt/obsidian-quickshare/issues/new/choose).

If you want a more interactive way to discuss bugs or features, you can join the [Discord server](https://discord.gg/y3HqyGeABK).

## Support
If you like this plugin and want to support me, you can do so via [Buy me a Coffee](https://www.buymeacoffee.com/mcndt):

<a href="https://www.buymeacoffee.com/mcndt"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=mcndt&button_colour=5F7FFF&font_colour=ffffff&font_family=Inter&outline_colour=000000&coffee_colour=FFDD00"></a>


%% README_END %%