---
aliases:
- Day One Importer
author:
- '[[authors/marcdonald|Marc Donald]]'
categories:
- '[[categories/Journalling|Journalling]]'
- '[[categories/Import|Import]]'
description: Import Day One journals
downloads: 922
mobile: false
number: 1627
stars: 6
title: Day One Importer
type: plugin
updated: '2024-09-27T06:05:46'
url: https://github.com/marcdonald/obsidian-day-one-importer
version: 1.1.2
---

%% README_START %%

# Obsidian Day One Importer

![GitHub Release](https://img.shields.io/github/v/release/marcdonald/obsidian-day-one-importer)

Easily convert your Day One journals into Obsidian markdown.

## How to import

1. Export your Day One journal as JSON

   ![day-one-export.png](https://raw.githubusercontent.com/marcdonald/obsidian-day-one-importer/HEAD/.github/assets/day-one-export.png)

2. Extract the `.zip` file you are given into a folder in your Obsidian vault. The default folder is a top level
   folder called `day-one-in`, but this is customizable in the settings

   ![unzipped-in-obsidian.png](https://raw.githubusercontent.com/marcdonald/obsidian-day-one-importer/HEAD/.github/assets/unzipped-in-obsidian.png)

   > [!NOTE]
   > You may not see the `.json` file in Obsidian, this is fine as long as it is there in your system file explorer

3. Adjust the settings to match what your setup

   ![example-settings.png](https://raw.githubusercontent.com/marcdonald/obsidian-day-one-importer/HEAD/.github/assets/example-settings.png)

4. Click import and verify all your entries have been created in the folder you designated

   ![img.png](https://raw.githubusercontent.com/marcdonald/obsidian-day-one-importer/HEAD/.github/assets/successful-import.png)

5. If there were any errors when importing, a file called `Failed Imports.md` will be created in that directory with the
   reason that the import failed. This may be caused by a conflicting file name (e.g. if you used date-based file
   names with the format YYYY-MM-DD and had two files on the same date).

6. Once you are happy with your import, you can delete the journal JSON file and move the photos/videos to wherever
   you prefer

**If something doesn't seem right please file an issue on this repository.**

## Features

### Supported

- Text entries
- Rich text
- Date-based file names or UUID file names
- Inline images and videos

#### Added to frontmatter

- Tags
- If entry is starred
- If entry is pinned
- If entry is "all day"
- Location (name & coordinates)
- Activity (e.g. walking, cycling, train, flying, etc)

### Not Currently Planned

- Customizable metadata formats (i.e not in frontmatter)
- Weather

## OSS

- [Zod](https://zod.dev/): MIT License


%% README_END %%