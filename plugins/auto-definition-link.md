---
aliases:
- Auto Definition Link
author:
- '[[authors/nmcarp99|Nolan Carpenter]]'
categories: []
description: Automatically converts text to definition links within the current folder
  when you type them.
downloads: 1464
mobile: true
number: 1446
stars: 6
title: Auto Definition Link
type: plugin
updated: '2024-08-12T03:48:12'
url: https://github.com/nmcarp99/obsidian-auto-definition-link
version: 8.3.0
---

%% README_START %%

# Auto Definition Link

This is a plugin for Obsidian to automatically create links to blocks in your vault

## Features

- **Suggestion Mode**: Optionally, this plugin will show suggestions for links to create. Press enter or click on a suggestion to use it. **(DISABLED BY DEFAULT)**
- **Auto Link Mode**: Optionally, this plugin will automatically convert a block id to a link after pressing space (or another valid interrupter)

## Usage

Once the plugin is installed and enabled, you can access its features by:

1. Creating a definition by writing a block of text, then adding a block id using `^[your id here]`. (This is native block functionality)

![Define a block with an id using the carrot symbol](https://raw.githubusercontent.com/nmcarp99/obsidian-auto-definition-link/HEAD/image.png)

3. For **Auto Link Mode**, write the block id, then press `SPACE` or add punctuation.

![Auto Link Mode before](https://raw.githubusercontent.com/nmcarp99/obsidian-auto-definition-link/HEAD/image-2.png)

![Alt text](https://raw.githubusercontent.com/nmcarp99/obsidian-auto-definition-link/HEAD/image-3.png)

*Note that you can ignore a suggestion in **Auto Link Mode** by pressing `SHIFT+SPACE` instead of just `SPACE`*

4. For **Suggestion Mode**, write the block id, then choose a suggestion or press `ENTER`.

![Choosing an option in suggestion mode](https://raw.githubusercontent.com/nmcarp99/obsidian-auto-definition-link/HEAD/image-1.png)

**Please note** that Capitalization, plurality, and dashes vs spaces **do not matter**. In these examples, the plurality of "id", the capitalization, and the dashes vs spaces are not uniform or matching in any way in relation to the block id. This plugin will take care of these differences.

In both modes, the text will be replaced with a link to the block **keeping your plurality, capitalization, and dashes vs spaces**.

The plugin only scans markdown files within the same folder as the current document, so you will not be able to access definitions outside the current folder.

Both modes can be enabled/disabled independently in the plugin settings.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the [GitHub repository](https://github.com/nmcarp99/Obsidian-Auto-Definition-Link).

## License

This project is licensed under the [MIT License](LICENSE).


%% README_END %%