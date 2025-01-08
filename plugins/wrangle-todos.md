---
aliases:
- TODO Wrangler
author:
- '[[authors/jeel-shah|Jeel Shah]]'
categories: []
description: Wrangles your TODOs and puts them at the bottom of the file.
downloads: 3227
mobile: true
number: 1191
stars: 4
title: TODO Wrangler
type: plugin
updated: '2024-02-13T07:29:43'
url: https://github.com/jeel-shah/todo-wrangler
version: 1.0.4
---

%% README_START %%

# TODO Wrangler for Obsidian

An Obsidian plugin that wrangles all lines starting with "TODO" in your notes and consolidates them under a unified "TODOs" section.

## Features

- Scan the current note for any lines starting with "TODO" or "- [] TODO" or "- TODO"
- Automatically consolidate found "TODO" lines into a "TODOs" section at the end of the note.
- One-click operation using the ribbon icon.

## Installation

### From GitHub

1. Navigate to the releases section of the GitHub repository.
2. Download the latest released `main.js`, `manifest.json`, `styles.css` from Releases.
3. Create the `todo-wrangler` in your vault's plugins folder: `<vault>/.obsidian/plugins/`
   - Note: If you don't have a plugins folder, create one inside the `.obsidian` directory.
4. Reload Obsidian
5. If everything was successful, you should see 'TODO Wrangler' in the list of installed plugins.

### From Within Obsidian

The plugin is available in the Obsidian plugin library ([TODO Wrangler](https://obsidian.md/plugins?search=TODO%20Wrangler)). You can install
the plugin directly from within Obsidian by going to be Settings > Community plugins and searching for "TODO Wrangler".

## Usage

1. Open any note in Obsidian.
2. Open the command palette (`CMD + p` on Mac OS X)
3. Search and run "Wrangle Todos"
4. All lines in your note starting with "TODO" will be extracted and placed under a "TODOs" section at the end of the note.
   1. If you've changed the keyword in "Settings" then it will extract those.
   2. There are multiple variations of "TODO" (or keyword) it can handle; for instance, lists "- TODO".

## Contributing

If you have ideas or feedback for this plugin, please open an issue on GitHub. Pull requests are also welcome!

## Acknowledgements
Lots of gratitude to the Obsidian team for creating a phenomenal app and for making it easy for developers to build plugins. Thank you!!


## License

This project is licensed under the MIT License. Please see `LICENSE.md` for the complete license.


%% README_END %%