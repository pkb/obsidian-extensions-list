---
aliases:
- Canvas LMS Task Importer
author:
- '[[jordaeday|Jordan Day]]'
categories: []
description: Import tasks from Canvas LMS into vault.
downloads: 45
mobile: false
number: 1883
title: Canvas LMS Task Importer
type: plugin
updated: '2024-09-06T08:02:13'
url: https://github.com/jordaeday/canvas-task-importer
version: 1.0.1
---

%% README_START %%

# Canvas Tasks Importer for Obsidian

This is a plugin designed to integrate tasks and assignments from Canvas LMS to Obsidian, helping you manage your academic workload more efficiently.

## Installation and Setup

1. **Install the plugin:**
  - Download the `.zip` file, unzip it, and place the extracted folder into your vault's `.obsidian/plugins` directory.
2. **Configure the plugin:**
  - Go to the plugin's settings within Obsidian.
  - Enter your school's Canvas link (it should look like this: https://YOURSCHOOL.instructure.com).
  - Enter your personal access token (instructions on how to do so can be found [HERE](https://community.canvaslms.com/t5/Student-Guide/How-do-I-manage-API-access-tokens-as-a-student/ta-p/273)). You should leave the expiration date on the access token blank.


## Usage

1. **Import tasks:**
  - Open the document where you would like to place your tasks.
  - Open the command palette (`Ctrl + P` or `Cmd + P`) and select either "Add Canvas Tasks at Cursor" or "Replace Selection with Canvas Tasks."

### Integration with Obsidian Tasks Plugin

 This plugin is designed to work seamlessly with the Tasks plugin. To enable this integration, ensure the document with your tasks is titled "Tasks", and the Tasks plugin should automatically detect these as tasks.

## License

This project is licensed under the MIT License.

%% README_END %%