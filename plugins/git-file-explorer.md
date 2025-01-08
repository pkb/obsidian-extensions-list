---
aliases:
- Git File Explorer
author:
- '[[authors/MateusMolina|Mateus Molina]]'
categories: []
description: Add relevant git information to detected git repostitories in the file
  explorer.
downloads: 2093
mobile: false
number: 1351
stars: 22
title: Git File Explorer
type: plugin
updated: '2024-05-19T19:57:35'
url: https://github.com/MateusMolina/obsidian-git-file-explorer
version: 0.5.2
---

%% README_START %%

# Obsidian Git File Explorer

This plugin integrates Obsidian's file explorer with Git. Once the plugin is enabled, you will see relevant git information next to git repositories found in your vault in the file explorer.

![Plugin Screencast](https://raw.githubusercontent.com/MateusMolina/obsidian-git-file-explorer/HEAD/assets/obsidian-git-fe-screencast.gif)

## Features

### Git Changes Widget

- Number of changed files displayed next to each detected repository in the file explorer
- Clicking on the component prompts the user for a commit message (adjustable in the configurations). After submitting, the component automatically stages and commits all changes in a single commit.

### Git Sync Widget

- Shows the number of commits to be pulled and pushed from the remote.
- Upon clicking, a sync process is started: pull (--no-rebase) followed by push to remote.


%% README_END %%