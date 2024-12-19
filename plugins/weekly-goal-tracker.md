---
aliases:
- Weekly Goal Tracker
author:
- '[[authors/GitGorman|George Gorman]]'
categories: []
description: Keep track of weekly goals in the status bar
downloads: 202
mobile: false
number: 2036
stars: 2
title: Weekly Goal Tracker
type: plugin
updated: '2024-12-10T16:13:11'
url: https://github.com/GitGorman/weekly-goal-tracker
version: 1.2.2
---

%% README_START %%

## Weekly Goal Tracker Plugin for Obsidian
This is a plugin for [Obsidian](https://obsidian.md) that allows you to add buttons to the status bar that allow you to track of different weekly goals and update them with ease. For example you could set a weekly exercise goal. The data is stored in the frontmatter of the Monday file of that week, or in the weekly file using the [Periodic Notes plugin](https://github.com/liamcain/obsidian-periodic-notes).
## Usage
### When the button is closed, it displays an icon, the current value and the goal value

![](https://raw.githubusercontent.com/GitGorman/weekly-goal-tracker/HEAD/Images/button_closed.png)

### When the goal has been reached, the button displays in color

![](https://raw.githubusercontent.com/GitGorman/weekly-goal-tracker/HEAD/Images/button_closed_color.png)

### Using left click, the button can opened to show a progress bar in color

![](https://raw.githubusercontent.com/GitGorman/weekly-goal-tracker/HEAD/Images/button_opened.png)

### **While the button is open, use right click to +1 to the goal. Hold shift and use right click to -1 from the goal**

## Settings
- Frontmatter value : the value in the frontmatter to read and write to
- Icon : the icon displayed in the status bar button. I recommend using [Emojipedia](https://emojipedia.org/) to find icons
- Goal : the weekly goal for activity
- Start color/end color : the gradient color for the status bar button, from left to right
- ʌ/v : change the order in which buttons appear in the status bar

## Bug Reports and Feature Requests
If you would like to report any bugs or request features, feal free to open an issue at https://github.com/GitGorman/weekly-goal-tracker/issues


%% README_END %%