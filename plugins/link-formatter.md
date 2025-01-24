---
aliases:
- Link Formatter
author:
- '[[authors/dilantha|Dilantha Nanayakkara]]'
categories: []
description: Formats a block of links into a clean markdown list
downloads: 106
mobile: false
number: 2074
stars: 1
title: Link Formatter
type: plugin
updated: '2024-12-10T18:09:08'
url: https://github.com/dilantha/link-formatter
version: 1.0.3
---

%% README_START %%

# Link Formatter

![Downloads](https://img.shields.io/github/downloads/dilantha/link-formatter/total)

Formats a block of links into a clean markdown list in Obsidian.

Here I'm pasting links from Firefox bookmarks and formatting them.

![Pasting and formatting](https://raw.githubusercontent.com/dilantha/link-formatter/HEAD/link-formatter.gif)

## Installing from Obsidian

1. Enable Community Plugins in Obsidian settings.
2. Click the Link Formatter plugin link.
3. Or browse the Community Plugins list and search for "Link Formatter".
4. Click "Install" to install the plugin.
5. Enable the plugin in the Plugins settings.

## Installing from BRAT

First install the [BRAT](https://tfthacker.com/BRAT) plugin. 

Then either from the BRAT settings page, or from the command palette, select "Add beta plugin". Paste the plugin URL https://github.com/dilantha/obsidian-link-formatter and then install.

## How to use

Once installed select the links you want to format and search for `Link Formatter: Format links to unordered list` in the command pallet.

Once you select that the links will be formatted. You can also setup a hotkey for this command.

## Development

This plugin uses a Makefile to streamline development tasks. Here are the available commands:

- `make install` - Install dependencies using pnpm
- `make build` - Build the project
- `make test` - Run tests
- `make dev` - Run in development mode with auto-rebuilding
- `make clean` - Clean build artifacts
- `make all` - Run install, build, and test in sequence

For version management and releases:
- `make bump-major` - Bump major version number
- `make bump-minor` - Bump minor version number
- `make bump-patch` - Bump patch version number
- `make release` - Release the current version (create git tag and push)

> If you find this plugin useful, please consider [donating](https://buymeacoffee.com/dilantha) to support me. Cheers!

%% README_END %%