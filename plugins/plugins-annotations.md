---
aliases:
- Plugins Annotations
author:
- '[[authors/alberti42|Andrea Alberti]]'
categories:
- '[[categories/Annotations and highlights|Annotations and highlights]]'
description: Allows adding personal comments to each installed plugin.
downloads: 2246
mobile: true
number: 1715
stars: 15
title: Plugins Annotations
type: plugin
updated: '2024-10-20T20:16:29'
url: https://github.com/alberti42/obsidian-plugins-annotations
version: 1.7.8
---

%% README_START %%

# Obsidian Plugins Annotations

Obsidian Plugins Annotations is a plugin for [Obsidian](https://obsidian.md) that allows users to add personal annotations to each installed plugin. This is particularly useful for keeping track of why certain plugins are installed and their specific use cases.

## Features

- Add personal annotations to any installed plugin in the settings pane.
- Annotations can be formatted using Markdown and can include Obsidian links.
- Annotations are saved persistently and can be edited at any time.
- Annotations are displayed directly below the plugin information.
- Detailed instructions how to edit the annotations are provided in the _setting pane_ of the plugin.
- Possible to lock the annotations with the lock button next to the title "Installed plugins". This feature is useful in combination with the toggle hiding the annotations fields where there is no user annotation yet. 

## Installation

The preferred method to install the plugin is to use the Community Plugins Preference pane in Obsidian.

## Manual installation

1. Download the latest release from the [Releases](https://github.com/alberti42/obsidian-plugins-annotations/releases) page.
2. Extract the downloaded package and copy only the following files to your Obsidian plugins folder: `<vault>/.obsidian/plugins/plugins-annotations`:
   - `main.js`
   - `styles.css`
   - `manifest.json`
3. Enable the plugin in the "Community plugins" settings pane.

## Usage

1. Open the "Community plugins" settings pane.
2. You will see a text area below each installed plugin where you can add your personal annotation.
3. Annotations are automatically saved and will be displayed whenever you open the settings pane.

## Screenshot

![Screenshot of the setting pane showing installed plugins with annotations by the user](https://raw.githubusercontent.com/alberti42/obsidian-plugins-annotations/HEAD/docs/images/screenshot_dark.jpg)

## Development

To contribute to the development of this plugin, follow these steps:

1. Fork the repository on GitHub.
2. Clone your forked repository somewhere on your local machine:
   ```sh
   git clone https://github.com/your-username/obsidian-plugins-annotations.git
   ```
3. Navigate to the cloned repository directory:
   ```sh
   cd obsidian-plugins-annotations
   ```
4. Install the dependencies:
   ```sh
   npm install
   ```
5. Build the plugin:
   ```sh
   npm run build
   ```
6. Create a `plugins-annotations` folder in your Obsidian plugins directory:
   ```sh
   mkdir -p <vault>/.obsidian/plugins/plugins-annotations
   ```
7. Copy or soft-link the compiled files from the `dist` folder to the `plugins-annotations` folder:
   ```sh
   # Copy files
   cp -r dist/* <vault>/.obsidian/plugins/plugins-annotations/
   
   # Or create a soft-link (on Unix-based systems)
   ln -s <path-to-cloned-repo>/dist <vault>/.obsidian/plugins/plugins-annotations
   ```
8. Enable the plugin in Obsidian and start developing!

## Donations

I would be grateful for any donation to support the development of this plugin.

[<img src="https://raw.githubusercontent.com/alberti42/obsidian-plugins-annotations/HEAD/docs/images/buy_me_coffee.png" width=300 alt="Buy Me a Coffee QR Code"/>](https://buymeacoffee.com/alberti)

## Author

- **Author:** Andrea Alberti
- **GitHub Profile:** [alberti42](https://github.com/alberti42)
- **Donations:** [![Buy Me a Coffee](https://img.shields.io/badge/Donate-Buy%20Me%20a%20Coffee-orange)](https://buymeacoffee.com/alberti)

Feel free to contribute to the development of this plugin or report any issues in the [GitHub repository](https://github.com/alberti42/obsidian-plugins-annotations/issues).


%% README_END %%