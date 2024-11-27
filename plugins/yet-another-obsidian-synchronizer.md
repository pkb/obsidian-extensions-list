---
aliases:
- Yet Another Obsidian Synchronizer
author:
- Mahyar Mirrashed
author_page: https://github.com/mahyarmirrashed
categories:
- '[[categories/Syncing and collaboration|Syncing and collaboration]]'
description: This is yet another obsidian synchronizer that uses Git to synchronize
  your vault contents across devices.
downloads: 8394
mobile: false
number: 1061
title: Yet Another Obsidian Synchronizer
type: plugin
updated: '2023-11-02T23:54:55'
url: https://github.com/mahyarmirrashed/yaos
version: 0.7.0
---

%% README_START %%

# YAOS (Yet Another Obsidian Synchronizer) :arrows_clockwise:

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22yet-another-obsidian-synchronizer%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

YAOS is a minimalist Obsidian plugin designed to provide a simple and intuitive Git synchronization experience for your Obsidian vault. It's inspired by the simplicity of Obsidian's paid sync functionality and aims to bring that same ease of use to users who prefer to privately manage their vault with Git.

## Features

- **Single Sync Button**: YAOS provides a single sync button that handles all your Git operations. No need to worry about multiple commands or complex workflows.
- **Conflict Resolution**: If YAOS detects conflicts between your local vault and the remote repository, it will prompt you to resolve these conflicts before proceeding with the sync.
- **Minimalist Design**: YAOS is designed with minimalism in mind. It provides just the features that you need to manage your vault with Git, without any added unnecessary complexity.

## Prerequisites

YAOS assumes that you have a basic understanding of Git and that you have initialized and cloned a Git repository for your Obsidian vault on your local machine.

## Usage

After installing the plugin, you'll find a new "Sync" button in Obsidian. Simply press this button to sync your vault with your remote Git repository.

If there are conflicts between your local vault and the remote repository that cannot be resolved automagically with Git, YAOS will prompt you to resolve these conflicts manually. Once you're resolved the conflicts, press the "Sync" button again to complete the sync process.

## Installation

To install YAOS, follow these steps:

1. In Obsidian, open "Settings" &rarr; "Community plugins".
2. Click "Browse" and search for "Yet Another Obsidian Synchronizer".
3. Click "Install".
4. In the "Installed plugins" section, enable "Yet Another Obsidian Synchronizer".

## Contributing

Contributions to YAOS are welcome! Please see the [CONTRIBUTING.md](./CONTRIBUTING.md) file for more information.

## License

YAOS is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Support

If you encounter any issues or have any questions about YAOS, please open an issue on the GitHub repository.

---

I hope you find YAOS useful in your Obsidian workflow. Happy writing!


%% README_END %%