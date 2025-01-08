---
aliases:
- Force Read Mode
author:
- '[[authors/al3xw|al3xw]]'
categories: []
description: Forces Markdown files in specified folders to open in read-only mode.
downloads: 180
mobile: true
number: 2081
stars: 7
title: Force Read Mode
type: plugin
updated: '2024-12-28T21:13:19'
url: https://github.com/al3xw/force-read-mode
version: 1.0.3
---

%% README_START %%

# Force Read Mode

**Force Read Mode** is a simple Obsidian plugin that ensures all markdown files within specified folders are always opened in read (preview) mode. It’s useful when you want to prevent accidental edits or enforce a read-only experience in certain folders.

## Features

- Automatically switches markdown files to read mode (preview) when opened from specified folders.
- Supports multiple folder paths.
- Simple settings interface to configure folder paths.
- Quickly disable the plugin using the Command Palette:
   - Use "Force Read Mode: Disable" to deactivate.
   - Use "Force Read Mode: Enable" to activate.

## How to Use

1. Go to **Settings → Community Plugins → Browse** and install the **Force Read Mode** plugin.
2. Enable the plugin from **Settings → Community Plugins**.
3. Open **Settings → Force Read Mode** to configure:
   - Add folder paths where you want markdown files to open in read mode (one path per line).
4. Use the Command Palette (Ctrl+P or Cmd+P) to toggle the plugin on or off with "Force Read Mode: Enable" or "Force Read Mode: Disable".

## Development

To contribute or modify this plugin:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Build the plugin with `npm run build`.
4. Load the plugin into Obsidian for testing.
5. To contribute, open a PR with your changes


%% README_END %%