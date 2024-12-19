---
aliases:
- Auto Strikethrough Tasks
author:
- '[[authors/Nomekuma|Nomekuma]]'
categories: []
description: Automatically adds strikethrough to completed tasks.
downloads: 184
mobile: true
number: 1916
stars: 1
title: Auto Strikethrough Tasks
type: plugin
updated: '2024-10-08T21:20:45'
url: https://github.com/Nomekuma/auto-strikethrough-task-obsidian-pluggin
version: 0.0.3
---

%% README_START %%

# AutoStrikethroughTasksPlugin

`AutoStrikethroughTasksPlugin` is a plugin for [Obsidian](https://obsidian.md/) that automatically applies or removes strikethrough formatting to completed or incomplete tasks in your notes.

## Features

- **Automatic Strikethrough on Completed Tasks**: When you mark a task as complete (`- [x]`), the plugin automatically applies strikethrough (`~~`) to the task text.
- **Automatic Removal of Strikethrough on Incomplete Tasks**: If you uncheck a task (`- [ ]`) that has strikethrough, the plugin will automatically remove the strikethrough.

## Installation

1. Download the plugin files or clone this repository into your Obsidian plugins folder.
2. Open Obsidian and navigate to `Settings` > `Community Plugins` > `Installed Plugins`.
3. Find the `AutoStrikethroughTasksPlugin` in the list and toggle it on.

## Usage

Once the plugin is enabled:

1. Write tasks using standard Markdown task list syntax.
   - Example:
     ```markdown
     - [ ] Task to do
     - [x] Task completed
     ```
   
2. The plugin will automatically:
   - Add strikethrough to completed tasks:
     ```markdown
     - [x] ~~Task completed~~
     ```
   - Remove strikethrough from unchecked tasks:
     ```markdown
     - [ ] Task to do
     ```

## Development

### Building the Plugin

To build this plugin, ensure you have [Node.js](https://nodejs.org/en/) installed, then:

1. Run `npm install` to install dependencies.
2. Run `npm run build` to compile the plugin.

### Development Notes

- The plugin listens for changes in the editor and updates task formatting in real-time.
- The `onload()` method registers the event listener, and the `onunload()` method cleans up when the plugin is disabled.

## Contributing

Feel free to contribute by submitting issues or pull requests. For significant changes, please open an issue first to discuss the changes you intend to make.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.



%% README_END %%