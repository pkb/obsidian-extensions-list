---
aliases:
- Canvas Conversation
author:
- André Baltazar
author_page: https://github.com/AndreBaltazar8
categories: []
description: Canvas Conversation is a plugin that allows you to create a ChatGPT conversation
  using Canvas Cards.
downloads: 6322
mobile: false
number: 767
title: Canvas Conversation
type: plugin
updated: '2023-01-31T03:14:59'
url: https://github.com/AndreBaltazar8/obsidian-canvas-conversation
version: 1.1.1
---

%% README_START %%

# Obsidian Canvas Conversation

A plugin for Obsidian that allows you to create a canvas conversation using ChatGPT.

It works on Canvas Nodes. Right-click a node and "Prompt ChatGPT".

This needs to be configured with User Agent, Session Token, and Clearance token from ChatGPT, which you might need to refresh every 2 hours.

The code is mostly undocumented and messy.

Some improvements to be made:

-   Proper using a streaming mechanism for the chat conversation
-   Refreshing tokens
-   Clean up undocumented APIs/monkey patches when they are available
-   Better error messages
-   Add edges between nodes (no easy way of doing it right now)

# Install

## From Obsidian Community Plugins

-   Open Settings -> Community Plugins
-   Search for "Canvas Conversation" and install.

## From BRAT

-   Install BRAT from Obsidian Community Plugins (if you don't have it)
-   Add this repository (AndreBaltazar8/obsidian-canvas-conversation) as a new plugin.

## From Releases

-   Download the latest release. Place the `main.js` and `manifest.json` files inside folder: `{{your_vault}}/.obsidian/plugins/obsidian-canvas-conversation`

## From Source

-   Clone this repository into your vault plugins folder.
-   Run `pnpm install` followed by `pnpm build`

# Acknowledgments

Took a bit of code for ChatGPT from: https://github.com/transitive-bullshit/chatgpt-api

# License

MIT (see LICENSE)


%% README_END %%