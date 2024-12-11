---
aliases:
- Advanced Copy
author:
- '[[leschuster|leschuster]]'
categories:
- '[[categories/Export|Export]]'
description: Copy Markdown and transform it according to your needs.
downloads: 277
mobile: true
number: 1952
stars: 1
title: Advanced Copy
type: plugin
updated: '2024-11-11T01:26:21'
url: https://github.com/leschuster/obsidian-advanced-copy
version: 0.5.0
---

%% README_START %%

# Obsidian Advanced Copy

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/leschuster/obsidian-advanced-copy/main.yml)
![GitHub Release](https://img.shields.io/github/v/release/leschuster/obsidian-advanced-copy)

A plugin for Obsidian (https://obsidian.md) that lets you copy text and transform it according to your needs.

You can create templates for almost all Markdown elements supported by Obsidian, organized under a "Profile". Templates can include variables such as a headings level, an elements content, the current file name, or date.

When executing the plugin's commands, you need to select a profile. Default profiles are available and can be customized to your preferences.

**Note:** This plugin is currently in an unstable release. Please report any bugs or suggestions for improvements.

## 💡 Example Use Cases

-   Copy page as HTML with working links
-   Copy selection as Anki HTML
-   Copy selection with a reference to the source file

https://github.com/user-attachments/assets/af4e9f83-d324-42f4-95fc-bda558bcee2c

## 🚀 Quickstart

You can download this plugin in the **Obsidian Community plugins tab**.

Here is how to do it manually:

1. From the latest release, download `main.js`, `manifest.json` and `styles.css`.
2. Open your vaults plugin directory: `<vault>/.obsidian/plugins/`
3. Create a new directory called `advanced-copy` and place the downloaded files there.
4. Restart Obsidian or reload the community plugins list.
5. Enable `Advanced Copy` in the community plugins list.

## ▶️ Usage

This plugin adds the commands `Advanced Copy: Copy Page` and `Advanced Copy: Copy Selection`. You need to choose which profile to use. After that, the plugin will copy the Markdown text, perform transformations according to the profile and place the result in the clipboard.

To speed things up, you can add separate commands for each profile. You may also add hotkeys for these commands in Obsidians `Hotkeys`-Tab. Beware that you might need to restart Obsidian for the changes to take effect.

## ⚙️ Configuration

In the plugins setting tab, you can configure pre-existing profiles, delete or duplicate them. You can also enable/disable commands for specifc profiles (you need to restart Obsidian after that).

Global variables are listed at the beginning of the `Templates` section in the `Edit` dialog. Local variables are listed in the description of the template.

## 🤝 Contributing

Please create a dedicated Dev vault in Obsidian. Do not use your main vault!

1. Go to your vaults plugin folder: `<vault>/.obsidian/plugins/`
2. Clone this repository: `git clone https://github.com/leschuster/obsidian-advanced-copy.git`
3. Rename the downloaded directory to `advanced-copy` and open it in your editor.
4. Install dependencies: `npm i`
5. Run the project: `npm run dev`
6. Make your changes
7. Run tests: `npm run test` or `npm run test:watch`

If you'd like to contribute, please fork the repository and open a pull request to the `main` branch.

**Note:** After you've made code changes, you need to either restart Obsidian or disable & enable the plugin. Alternatively, you can use the [Obsidian Hot-Reload Plugin](https://github.com/pjeby/hot-reload).

## 🙏 Acknowledgements

The core functionality of this project, converting Markdown to a custom format, relies heavily on the incredible work done by the [unified](https://github.com/unifiedjs) and [remark](https://github.com/remarkjs) projects. I am deeply grateful for their contributions.


%% README_END %%