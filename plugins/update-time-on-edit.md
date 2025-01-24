---
aliases:
- Update time on edit
author:
- '[[authors/beaussan|@beaussan]]'
categories: []
description: Keep front matter in sync with the last edit time
downloads: 46850
mobile: true
number: 307
stars: 174
title: Update time on edit
type: plugin
updated: '2024-01-11T18:35:10'
url: https://github.com/beaussan/update-time-on-edit-obsidian
version: 2.4.0
---

%% README_START %%

# Update time on edit plugin

This plugin update on save the metadata of the file with the time it was updated, and the time of creation if there is none (useful for new files).

Here is a list of feature this plugin provides :
- Keep in sync the `mtime` (last modified time) in a property key (default to `updated`)
- Keep in sync the `ctime` (file creation time) in a property key (default to `created`)
- Customize the date format, default to obsidian date format for property display
- Supports string and number property data types, the later being useful for Unix timestamps
- Ignore folder for all update, useful for template files
- Ignore folder for the creation property
- Works on mobile & desktop

This plugin will read the `ctime` and `mtime` from obsidian, and thus, the file system. **If file change from an external source, the header keys will be updated**.

Remember to backup your vault since this plugin will modify files.

%% README_END %%