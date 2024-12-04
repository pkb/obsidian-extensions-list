---
aliases:
- Reading Time
author:
- '[[avr|avr]]'
categories: []
description: Add the current note's reading time to Obsidian's status bar.
downloads: 72071
mobile: true
number: 13
stars: 67
title: Reading Time
type: plugin
updated: '2024-08-31T07:34:31'
url: https://github.com/avr/obsidian-reading-time
version: 1.1.2
---

%% README_START %%

# Obsidian Reading Time Plugin

Simple plugin to add an estimated reading time for the selected note to the StatusBar.

![Screenshot](https://raw.githubusercontent.com/avr/obsidian-reading-time/main/images/example.png)
![Screenshot](https://raw.githubusercontent.com/avr/obsidian-reading-time/main/images/settings.png)

## How to install the plugin

- Download the [Latest release](https://github.com/avr/obsidian-reading-time/releases/latest)
- Extract the `obsidian-reading-time` folder from the zip to your vault `<vault>/.obsidian/plugins/`

## Contributing

### Development

```
npm install
npm run build
cp main.js manifest.json /path/to/your/vault/.obsidian/plugins/obsidian-reading-time
```

### Release

- After all changes for the release are merged create a new branch for the release
- Update the changelog with new features and fixes
- Run the `version-bump.mjs` script with the new version as an argument
- Commit all changed files and create a pull request
- After the pull request is merged, create a new annotated tag for the release:

```
git checkout main
git pull
git tag -a x.y.z -m "x.y.z"
git push --tags
```

The release will automatically be drafted.

%% README_END %%