---
aliases:
  - Open with Natural Language Dates
author:
  - "[[charliecm|Charlie Chao]]"
categories:
  - "[[categories/Date and calendar|Date and calendar]]"
description: Open a daily note using natural language. Requires "Natural Language Dates" plugin to work.
downloads: 74
mobile: true
number: 1976
title: Open with Natural Language Dates
type: plugin
updated: 2024-10-17T11:39:40
url: https://github.com/charliecm/obsidian-open-with-nldates
version: 1.0.0
---

%% README_START %%

# Obsidian Open with Natural Language Dates

An [Obsidian](https://obsidian.md) plugin that adds a command that lets you quickly open a daily note using natural language. It requires the [Natural Language Dates](https://github.com/argenos/nldates-obsidian/tree/master) plugin to be enabled.

<img src="https://raw.githubusercontent.com/charliecm/obsidian-open-with-nldates/main/demo.gif" width="856" />

I wrote this plugin because I needed a faster way to open a daily note without needing to use a calendar or remember the exact file name. This is useful if you're trying to recall something or want to add to a future daily note. Thanks [@argenos](https://github.com/argenos) for writing Natural Language Dates, which inspired this plugin.

## How to Install

From inside Obsidian…
1. Go to Settings → **Community plugins**.
2. Disable **Safe mode**.
3. Click **Browse**, search for **Line Commands**, and click **Install**.
4. Click the toggle button to enable the plugin.

For manual installation, download this repo and copy over `main.js` and `manifest.json` to your vault: `VaultFolder/.obsidian/plugins/obsidian-open-with-nldates/`.

## Development

1. Clone this repo.
2. `yarn` to install dependencies.
3. `yarn dev` to start compilation in watch mode.
4. `bash install-built.sh /path/to/your/vault -d` to create symbolic links of built files to your vault for quick development.

## Release

1. Run `yarn build`.
2. Run `npm version [patch/minor/major]` to bump version in `manifest.json` and `versions.json`.
3. Add changes in `CHANGELOG.md`.
4. Add a new version tag and push it.
    ```
    git tag -a 1.0.1 -m "1.0.1"
    git push origin 1.0.1
    ```
5. Go to “Releases” in GitHub and edit the latest release (created by GitHub Actions). Insert the changelog texts in the description and ensure `main.js` and `manifest.json` are attached. 
6. Click “Publish release”.

## Support

If you really like this plugin and want to support its development, please consider [buying me a coffee](https://www.buymeacoffee.com/charliecm) 🙂 Thanks!

<a href="https://www.buymeacoffee.com/charliecm" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="217" height="60" /></a>


%% README_END %%