---
aliases:
- Prettier Format
author:
- '[[authors/hipstersmoothie|Andrew Lisowski]]'
categories: []
description: Opinionated formatting for your notes.
downloads: 15732
mobile: true
number: 110
stars: 90
title: Prettier Format
type: plugin
updated: '2023-05-11T07:56:44'
url: https://github.com/hipstersmoothie/obsidian-plugin-prettier
version: 0.1.1
---

%% README_START %%

# obsidian-plugin-prettier

Format notes using [prettier](https://prettier.io/).

This plugin exposes the following commands:

| Action                        | Hotkey           |
| ----------------------------- | ---------------- |
| Format the entire note        | Blank by default |
| Format the just the selection | Blank by default |

And the following settings:

| Setting           | Default |
| ----------------- | ------- |
| Format on Save    | false   |
| Format code block | false   |

Add the following to your note's front-matter to enable this plugin for a specific file.

```yaml
---
plugin-prettier: true
---

```

## Installing

Either install the latest release from Obsidian directly or unzip the [latest release](https://github.com/hipstersmoothie/obsidian-plugin-prettier/releases/latest) into your `<vault>/.obsidian/plugins/` folder.

Once the plugin is installed, you need to make sure that the switch for "Prettier Format" is turned on.
After you are all setup you would see this plugins commands in the command palette (`CMD + P`).
You can assign the commands to hotkeys for easy usage.


%% README_END %%