---
aliases:
- Lavadocs
author:
- Saalik Lokhandwala
author_page: https://saaliklok.com
categories: []
description: Public docs, from the fires of your vault.
downloads: 760
mobile: true
number: 1539
title: Lavadocs
type: plugin
updated: '2024-04-07T12:20:27'
url: https://github.com/saaliklok/lavadocs-obsidian
version: 1.0.4
---

%% README_START %%

# The Lavadocs Obsidian Plugin

Welcome to the [Lavadocs](https://lavadocs.com) plugin for Obsidian! This plugin integrates your Obsidian vault with Lavadocs, so it's easy to share one-off documents, whenever you need to. Here's everything you need to get started.

### Prerequisites

- A [Lavadocs](https://lavadocs.com) account is required to use this plugin.

## Installation

#### Option 1: Through Obsidian Community Plugins

1. Search for "Lavadocs" in the Obsidian community plugin browser
2. Install the plugin
3. Enable the plugin
4. Follow instructions in the "Setup" section below

#### Option 2: Manual Installation

1. Clone this repo.
2. In the repo’s directory, `npm install` to install dependencies
3. Run `npm run build` to compile to `main.js`
4. Copy over `main.js`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`
5. In settings, under “Community Plugins”, toggle the plugin on to activate it.
6. Continue to the "Setup" section below

## Setup

After installing the plugin, you'll need to connect your Lavadocs account:

1. In your browser, log into Lavadocs and copy your `Lava Key`. (It's in your [Account Settings](https://lavadocs.com/users/edit))
2. In Obsidian, head to Settings > Community Plugins > Lavadocs.
3. Paste in your “Lava Key” to authenticate your account.
4. If you're self-hosting Lavadocs, include the full URL it's hosted on.

## Usage

With the Lavadocs plugin enabled, sharing your documents is straightforward:

1. Open the document you wish to share in Obsidian.
2. Click on the newly added ⛰️ mountain icon in your sidebar.
3. Your document will be pushed to Lavadocs, and you should be able to access and share it!

## Lavadocs Pricing

There's more on the [landing page](https://lavadocs.com/home), but the TLDR is: Your docs are yours to keep.

Hosted edition:

- **Start With**: 50 documents free.
- **Additional Documents**: For every 100 additional documents, it's $4.99.

Self-hosted edition:

- Get access to the self-hosted edition code repository, with gift pricing: pay what you want.

## Privacy

Your privacy is important! It’s part of the reason I built this. Please review the [Privacy Policy](https://lavadocs.com/privacy_policy) to understand how Lavadocs handles data.

TL;DR - I don't sell, share, or do anything other than store the docs you push to Lavadocs. I might share aggregated numbers every now and then: "5 docs were created this week, wooot!"

## Support

If you encounter any issues, reach out to me: saalik@tangibleinfo.com.

## License

This plugin is licensed under the MIT License. See the LICENSE file for details.


%% README_END %%