---
aliases:
- Typewriter Mode
author:
- '[[authors/davisriedel|Davis Riedel]]'
categories: []
description: Typewriter scrolling, highlighting of the current line, dimming of unfocused
  paragraphs, writing focus and more.
downloads: 36990
mobile: true
number: 1140
stars: 97
title: Typewriter Mode
type: plugin
updated: '2025-01-07T18:13:08'
url: https://github.com/davisriedel/obsidian-typewriter-mode
version: 1.1.0
---

%% README_START %%

# Typewriter Mode for Obsidian

<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
| | | | | |
| -- | -- | -- | -- | -- |
|[![](https://img.shields.io/badge/GitHub-%2330363E.svg?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/davisriedel/obsidian-typewriter-mode)|[![](https://img.shields.io/badge/Obsidian-%23483699.svg?style=for-the-badge\&logo=obsidian\&logoColor=white)](https://obsidian.md/)|[![](https://img.shields.io/github/v/release/davisriedel/obsidian-typewriter-mode?style=for-the-badge)](https://github.com/davisriedel/obsidian-typewriter-mode/releases)|[![](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge\&logo=buy-me-a-coffee\&logoColor=black)](https://www.buymeacoffee.com/davis.riedel)|[![](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge\&logo=GitHub-Sponsors\&logoColor=#EA4AAA)](https://github.com/sponsors/davisriedel)|
<!-- markdownlint-restore -->

Typewriter Mode is plugin that adds several features to turn [Obsidian](https://obsidian.md) into a typewriter-like, distraction-free writing environment, including:

- Typewriter scrolling (current line stays at a fixed position on the screen)
- Highlighting the current line
- Keeping a set number of lines above and below the cursor
- Dimming unfocused paragraphs / sentences
- Fullscreen writing focus
- Limit line length to set number of characters
- Restore the cursor's position when opening files

## Compatibility

This plugin is compatible with Obsidian v0.15.0 and above. It does not support the legacy editor.

## Installation

To install community plugins, make sure _safe mode_ is turned off in Obsidian's settings.

### Obsidian

You can install this plugin within Obsidian by doing the following:

- Go to Settings > Community Plugins > Browse
- Search for “Typewriter Mode”
- Click Install
- Click Enable

### Manual

1. Download the latest release from GitHub: [https://github.com/davisriedel/obsidian-typewriter-mode/releases](https://github.com/davisriedel/obsidian-typewriter-mode/releases)
2. Extract the plugin folder from the zip to your vault's plugins folder: `<vault>/.obsidian/plugins/`. _Note: On some machines, the `.obsidian` folder may be hidden. On macOS, you should be able to press `Command+Shift+Dot` to show the folder in Finder._
3. Force reload Obsidian

### Beta Versions With BRAT

Follow the instructions in the repository of the [BRAT plugin](https://github.com/TfTHacker/obsidian42-brat#Quick-Guide-for-using-BRAT) and use this repository's URL: `https://github.com/davisriedel/obsidian-typewriter-mode` to install **beta versions** of the plugin.

## Acknowledgements

This plugin started as a fork of the incredible [Typewriter Scroll](https://github.com/deathau/cm-typewriter-scroll-obsidian) plugin by [deathau](https://github.com/deathau). It was turned into a separate plugin because many new features were added, breaking changes were introduced, and the code was completely restructured to make it more extensible.

The sentence highlighting was derived from [Focus Active Sentence](https://github.com/artisticat1/focus-active-sentence) by [artisticat1](https://github.com/artisticat1).

The writing focus was derived from [Obsidian Focus Mode](https://github.com/ryanpcmcquen/obsidian-focus-mode) by [ryanpcmcquen](https://github.com/ryanpcmcquen).

The restore cursor position feature was derived from [Remember Cursor Position](https://arc.net/l/quote/jmvjfrza) by [dy-sh](https://github.com/dy-sh).

Many thanks to the developers of these fantastic plugins. Please also consider supporting them.

## Support this project

I am studying Computer Science at Karlsruhe Institute of Technology (KIT) in Germany. I develop this plugin in my spare time. If you wish to support me and the continuous development of this plugin, you can donate via GitHub Sponsors or Buy Me a Coffee. I am truly thankful for your support.

<!-- markdownlint-disable-next-line -->
[![](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge\&logo=buy-me-a-coffee\&logoColor=black)](https://www.buymeacoffee.com/davis.riedel)
<!-- markdownlint-disable-next-line -->
[![](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge\&logo=GitHub-Sponsors\&logoColor=#EA4AAA)](https://github.com/sponsors/davisriedel)

## Changelog

See the [`CHANGELOG.md`](CHANGELOG.md) file.

## Contribute

**You are welcome to open issues and contribute to this project!**

See the [`DEVELOPMENT.md`](DEVELOPMENT.md) file for instructions.

## License

The plugin is licensed under the MIT license. See [`LICENSE`](LICENSE).


%% README_END %%