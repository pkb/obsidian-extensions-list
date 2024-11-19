---
aliases:
- Notification Controller
author:
- Juan Miguel
author_page: https://github.com/juan-miii
categories: []
description: Manages notifications at startup.
downloads: 1215
mobile: true
number: 1499
title: Notification Controller
type: plugin
updated: '2024-03-20T17:17:03'
url: https://github.com/juan-miii/obsidian-notice-plugin
version: 1.0.2
---

%% README_START %%

# Obsidian Notice Plugin

---

## 🌐 Overview

The Notice Plugin is a powerful tool for controlling notices within the Obsidian application. It is primarily used to automatically remove **Debug startup time** notices for community plugins.

## 🚀 Features

- **Remove Startup Notices**: The plugin removes notices on the DOM load after a specified delay.
- **Settings Tab**: The plugin adds a settings tab in the Obsidian settings view. More details can be found in the [Settings](README.md#⚙️-settings) section.

## 🎯 Usage

After installing and enabling the plugin via the configuration on the Obsidian app, the plugin can be configured through the settings tab. When the Obsidian workspace is ready, it will remove all notices after the delay specified.

## ⚙️ Settings

The settings for the `NoticePlugin` can be accessed and modified via the settings tab added by the plugin. The default settings can be found in `src/settings/settings`.

- `delayInSeconds`: Accepts values between **0** and **60** (*seconds*). **0** is reserved to keep the notice persistent.

## 📜 Changelog

For a detailed list of changes, check out the [CHANGELOG](https://github.com/juan-miii/obsidian-notice-plugin/blob/master/.github/CHANGELOG.md).

## 🛠️ Technologies Used

This project uses Typescript to provide type checking and documentation. The repo depends on the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.

## 🎓 First Time Developing Plugins?

See the official sample repository on https://github.com/obsidianmd/obsidian-sample-plugin for more information.

## 📚 API Documentation

**Note:** The Obsidian API is still in early alpha and is subject to change at any time!

See https://github.com/obsidianmd/obsidian-api

## 📄 License

This project is licensed under the terms of the MIT [license](https://github.com/juan-miii/obsidian-notice-plugin/blob/master/LICENSE).


%% README_END %%