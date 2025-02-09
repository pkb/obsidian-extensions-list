---
aliases:
- Edit History
author:
- '[[authors/antoniotejada|Antonio Tejada]]'
categories: []
description: Automatically saves the history of edits of a file when Obsidian saves
  the file, and allows viewing the differences between edits, copying text from a
  previous edit, or fully rolling back to a previous edit.
downloads: 7827
mobile: true
number: 1015
stars: 62
title: Edit History
type: plugin
updated: '2023-08-12T02:34:25'
url: https://github.com/antoniotejada/obsidian-edit-history
version: 0.1.3
---

%% README_START %%

# Obsidian Edit History Plugin

This plugin saves each edit done to a note into a edit history file, the edits can later be diffed or copied.

![image](https://github.com/antoniotejada/obsidian-edit-history/assets/6446344/fa9456d5-0de0-4160-bd06-6a38494f7c57)

This is similar to the [File Recovery](https://help.obsidian.md/Plugins/File+recovery) core plugin with the following advantages:
- Can keep edit history of any type of file, selectable via settings
- Opensource edit history file format
- History files are kept independently per vault and file
- History files can be externally accessed, examined, copied around, or deleted
- History files can be backed up by external means
- Efficient compressed diff storage so it can be enabled without limits (number of edits, interval between edits max edit age...)
- Transparent storage size, easy to see how much the edit history for a given vault or note is taking

## Features

- Browse previous edits
- Diff one edit against a previous one
- Manually copy and paste a previous edit or parts of a previous edit
- Limit edit history frequency (set maximum interval of seconds between edits to save to the history file)
- Limit edit history file size by number of edits (keep less than a number of edits in the file, removing older ones)
- Limit edit history file size by age of edits (remove edits older than a given time from the history file)
- The edit history file is automatically managed when modifications are done to the note under Obsidian
  - renamed when the note is renamed (including folder changes).
  - deleted when the note is deleted
- Edit history files can be safely deleted outside of Obsidian in order to free storage.
- Keep edit history files for all files or just for the extensions specified in the settings

## Usage

- Modify the plugin settings as desired
- Edit notes as usual, edits will be saved in the Edit History File for that note, as specified in the settings
- An edit can be manually saved by invoking the command *Edit History: Save current edit in the Edit History*
- Click on the clock ribbon icon or invoke the command *Edit History: Open Edit History For This File*
  - A dialog box with a drop down of the stored edits will pop up
  - Navigate through the different edits by picking from the drop down
  - Insertions are shown as green, deletions as red
  - Copy the current edit with the Copy button

## The edit history file

The plugin creates one edit history (.edtz) file per note, in the same folder as the note. 

### Format

The edit history file is a zip file with diffs using [diff-match-patch](https://github.com/google/diff-match-patch).

The most recent version of the note is always stored in full in the zip file, so the edit history file does not depend on the note.

This most recent version may not be the latest version of the note if a non-zero time between edits was set.

Each entry in the file is named after the UTC epoch in seconds at which time the edit was made, encoded as chars, and ending in "$" if the entry is stored in full, otherwise stored as a diff.

## Versions

[Github releases](https://github.com/antoniotejada/obsidian-edit-history/releases)

### [0.1.3](https://github.com/antoniotejada/obsidian-edit-history/releases/tag/0.1.3) (2023-08-11)
- Added versions section to README.md

### [0.1.2](https://github.com/antoniotejada/obsidian-edit-history/releases/tag/0.1.2) (2023-08-11)
- Fix for #4 https://github.com/antoniotejada/obsidian-edit-history/issues/4

### [0.1.1](https://github.com/antoniotejada/obsidian-edit-history/releases/tag/0.1.1) (2023-06-23)
- Changes to comply with plugin submission guidelines

### [0.1.0](https://github.com/antoniotejada/obsidian-edit-history/releases/tag/0.1.2) (2023-06-17)
- First fully functional version

## TODO
- Allow specifying the edit history root folder?
- Edit diff prev/next navigation
- Restore a given edit
- Diff one edit against another arbitrary edit
- Choose edit date by timeline/slider/calendar view
- Abstract out/refactor access to the edit history file
- Edit History File management:
  - find orphaned files
  - per file/vault statistics
  - merge/remove edits
  - ...

%% README_END %%