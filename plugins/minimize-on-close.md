---
aliases:
- Minimize on Close
author:
- '[[authors/alberti42|Andrea Alberti]]'
categories: []
description: Minimizes the app window to an icon after closing the last open pane
downloads: 269
mobile: false
number: 1921
stars: 3
title: Minimize on Close
type: plugin
updated: '2024-09-25T18:55:26'
url: https://github.com/alberti42/obsidian-minimize-on-close
version: 1.3.3
---

%% README_START %%

# Obsidian plugin: Minimize on Close

## Overview

This plugin for [Obsidian](https://obsidian.md) minimizes the application window to the dock or taskbar when all open panes are closed. This behavior is particularly standard on macOS and can now be optionally applied across all platforms.

## Features

- **MacOS-Standard Behavior**: Automatically minimize the Obsidian window when all open panes are closed, consistent with macOS application behavior.
- **Cross-Platform Support**: Works on macOS, Windows, and Linux. You can choose whether to restrict this behavior to macOS or apply it to all operating systems.
- **Configurable Options**: Customize the plugin to enable the minimize-on-close behavior only for macOS, or extend it to other platforms based on your preference.
- **Command Palette Support**: Includes two commands accessible from the command palette:
  - **Minimize to Icon**: Minimize the Obsidian window to the dock or taskbar.
  - **Exit Obsidian**: Completely exit the Obsidian application.
  These commands can be assigned custom hotkeys for quick access (e.g., "⌘Q" to minimize and "⌘⌥Q" to exit) from the Hotkeys configuration pane.


## Installation

### From Obsidian Community Plugins

Either copy the link `obsidian://show-plugin?id=minimize-on-close` into your browser or follow the instructions below:

1. Open Obsidian.
2. Go to `Settings` > `Community Plugins` > `Browse`.
3. Search for **Minimize on Close**.
4. Click `Install`, then `Enable`.

### Manual Installation

#### Option 1: Download Pre-Built Files

1. Download the latest release from the [GitHub releases page](https://github.com/alberti42/obsidian-minimize-on-close/releases).
2. In the release, you'll find the `main.js` and `manifest.json` files.
3. Copy both `main.js` and `manifest.json` to a new folder in your vault's `.obsidian/plugins/` directory (e.g., `.obsidian/plugins/minimize-on-close`).
4. Enable the plugin in Obsidian via `Settings` > `Community Plugins`.

#### Option 2: Build from Source

1. Clone this repository or download the source code.
2. Run the following commands to install the necessary dependencies and build the plugin. The build process will generate the `main.js` and `manifest.json` files inside the `/dist` subfolder within the repository directory:

   ```bash
   npm install
   npm run build
   ```

## Usage

1. Once the plugin is installed and enabled, you can configure it in `Settings` > `Minimize on Close`.
2. Choose whether you want the minimize behavior only on macOS (default) or across all platforms.

### MacOS Behavior (Default)

By default, the plugin mimics macOS behavior, minimizing the Obsidian window when all panes are closed. This provides a consistent experience for Mac users.

## Compatibility

- **macOS**: Tested and works as expected.
- **Windows**: Tested and works as expected.
- **Linux**: Tested and works as expected.

## Contribution

Feel free to open an issue or submit a pull request if you encounter any bugs or have suggestions for improvement!

## License

This project is licensed under the [MIT License](LICENSE).

## Donations
I would be grateful for any donation to support the development of this plugin.

[<img src="https://raw.githubusercontent.com/alberti42/obsidian-minimize-on-close/HEAD/docs/images/buy_me_coffee.png" width=300 alt="Buy Me a Coffee QR Code"/>](https://buymeacoffee.com/alberti)

## Author
- **Author:** Andrea Alberti
- **GitHub Profile:** [alberti42](https://github.com/alberti42)
- **Donations:** [![Buy Me a Coffee](https://img.shields.io/badge/Donate-Buy%20Me%20a%20Coffee-orange)](https://buymeacoffee.com/alberti)

Feel free to contribute to the development of this plugin or report any issues in the [GitHub repository](https://github.com/alberti42/import-attachments-plus/issues).


%% README_END %%