---
aliases:
- Sync to Hugo
author:
- '[[authors/crayhuang|Cray Huang]]'
categories: []
description: Sync the selected notes to Hugo blog
downloads: 59
mobile: false
number: 2054
stars: 4
title: Sync to Hugo
type: plugin
updated: '2024-09-14T15:57:36'
url: https://github.com/crayhuang/Obsidian-Hugo-Sync
version: 0.0.3
---

%% README_START %%

# Obsidian Hugo Sync Plugin

This plugin allows you to sync your Obsidian notes with Hugo, a popular static site generator. It converts Obsidian-style markdown and frontmatter to Hugo-compatible format.

## Features

- Sync selected files from Obsidian to Hugo
- Convert Obsidian tags to Hugo tags
- Filter out specified headers and their content
- Customizable Hugo content path

## Installation

1. Open Obsidian Settings
2. Navigate to Community Plugins and disable Safe Mode
3. Click on Browse and search for "Hugo Sync"
4. Install the plugin and enable it

## Usage

### Setting Up

1. Open the plugin settings
2. Set the Hugo Path: This is the root directory of your Hugo project
3. Set the Content Path: This is the subdirectory where your Hugo content is stored (default is 'content/posts')
4. Set Filtered Headers: Enter any headers you want to exclude from the Hugo output, one per line

### Syncing Files

1. Select one or more files in the Obsidian file explorer
2. Click the "Sync to Hugo" icon in the left ribbon, or use the command "Sync selected file(s) to Hugo"
3. The selected files will be converted and copied to your Hugo content directory

### Tag Conversion

- Obsidian tags are automatically converted to Hugo tags
- Tags can be in various formats:
  - YAML frontmatter: `tags: [tag1, tag2]`
  - List format:
    ```
    tags:
      - tag1
      - tag2
    ```
- Pure symbol tags are ignored

### Header Filtering

- Headers specified in the "Filtered Headers" setting will be excluded from the Hugo output
- All content under a filtered header, up to the next header of the same or higher level, will also be excluded

## Troubleshooting

If you encounter any issues:

1. Check the console log for error messages
2. Ensure your Hugo path and content path are set correctly
3. Verify that your Obsidian tags are in a supported format
4. Make sure filtered headers are entered correctly in the settings

## Support

If you need help or want to report a bug, please open an issue on the GitHub repository.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)


%% README_END %%