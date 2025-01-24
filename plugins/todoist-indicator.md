---
aliases:
- Todoist Indicator
author:
- '[[authors/kapej42|Kapej42]]'
categories: []
description: Adds a badge to "project" files when they miss a link to a Todoist project.
  (based on the GTD indicator from saibotsivad, thanks!)
downloads: 215
mobile: true
number: 1757
stars: 0
title: Todoist Indicator
type: plugin
updated: '2024-07-02T14:22:19'
url: https://github.com/kapej42/obsidian-todoist-indicator
version: 1.0.5
---

%% README_START %%

# Todoist Indicator plugin for Obsidian

This is a very simple Obsidian plugin that shows whether Todoist links are available on Project files by adding a badge to project files if the linkt to Todoist is missing. It is heavily inspired by obsidian-gtd-no-next-step from saibotsivad (thanks!).

## Features

- Automatically add badges to project files based on availability of Todoist property.
- Customize project folder prefix and Todoist property through settings.
- Optionally require a specific project tag for badge application.

# Usage Instructions

Follow these steps to install and set up the plugin for your project:

1. **Install the Plugin**: Ensure the plugin is properly installed.
2. **Project Files Location**: Make sure your project files are stored in a folder that matches the prefix specified in the settings.

### Minimum Project File Set-up
To set up a project file, include the following metadata at the beginning of your file:

```markdown
---
tags: project
todoist: https://app.todoist.com/app/project/[your project name]
---
```

### Customization
- **Property Name**: You can customize the property name in the settings. The default property name is "todoist".

### Badge Display
- If a file has the tag `project` but lacks a `todoist` value, a badge labeled "Missing todoist" will be displayed in the file tree.

%% README_END %%