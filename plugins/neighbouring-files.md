---
aliases:
- Neighbouring Files
author:
- '[[authors/FabianUntermoser|Fabian Untermoser]]'
categories: []
description: Navigate to the next and previous file in the current directory
downloads: 3282
mobile: true
number: 1337
stars: 15
title: Neighbouring Files
type: plugin
updated: '2025-01-03T17:50:41'
url: https://github.com/FabianUntermoser/obsidian-neighbouring-files-plugin
version: 1.0.7
---

%% README_START %%

# Navigate to Neighbouring Files

This [Obsidian](https://obsidian.md/) Plugin adds navigational commands that lets you quickly navigate to neighbouring files.

### Use Case

- Navigate to the next weekly from `2023-W17` to `2023-W18`
- Navigate to the next daily from `2023-04-31` to `2023-05-01`
- Navigate to the next file from `A4` to `A5`

[obsidian-neighbouring-files.webm](https://github.com/user-attachments/assets/cdc04e2b-e3d9-4d77-8b2c-cbfa4ef4436d)

### Features

The sort order for the default command is configurable in the plugin settings.

Default Commands:
- Navigate to next file
- Navigate to prev file

Specific Commands:
- Navigate to next file (alphabetical)
- Navigate to prev file (alphabetical)
- Navigate to next file (creation timestamp)
- Navigate to prev file (creation timestamp)
- Navigate to next file (modified timestamp)
- Navigate to prev file (modified timestamp)

Supported Sorting Modes:
- Alphabetical: Ordered by file names. (default)
- By Modification Timestamp: Based on the last modified date.
- By Creation Timestamp: Based on the file creation date.

## Configuration

Configure a hotkey to trigger the commands.

Or use the [obsidian-vimrc-support](https://github.com/esm7/obsidian-vimrc-support) Plugin to map more useful hotkeys such as `gn` or `gp`
(Caveat: This only works when the editor mode is on).

Example `.obsidian.vimrc`.

```vimrc
" navigation to neighbouring files
exmap next_file obcommand neighbouring-files:next
exmap prev_file obcommand neighbouring-files:prev
exmap next_file_alphabetical obcommand neighbouring-files:next-alphabetical
exmap prev_file_alphabetical obcommand neighbouring-files:prev-alphabetical
exmap next_file_created obcommand neighbouring-files:next-created
exmap prev_file_created obcommand neighbouring-files:prev-created
exmap next_file_modified obcommand neighbouring-files:next-modified
exmap prev_file_modified obcommand neighbouring-files:prev-modified
nmap gn :next_file<cr>
nmap gp :prev_file<cr>
```


%% README_END %%