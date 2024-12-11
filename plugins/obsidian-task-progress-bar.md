---
aliases:
- Task Progress Bar
author:
- '[[Quorafind|Boninall]]'
categories:
- '[[categories/Task management|Task management]]'
description: A task progress bar plugin for tasks in Obsidian.
downloads: 26698
mobile: true
number: 552
stars: 110
title: Task Progress Bar
type: plugin
updated: '2024-01-17T21:09:55'
url: https://github.com/Quorafind/Obsidian-Task-Progress-Bar
version: 2.0.0
---

%% README_START %%

# Obsidian Task Progress Bar

A plugin for showing task progress bar near the tasks bullet or headings. Only works in Live Preview mode in Obsidian.

![example](https://raw.githubusercontent.com/Quorafind/Obsidian-Task-Progress-Bar/HEAD/media/example.gif)

# Usage

For example, when you create a task list like this:

```markdown
- [ ] task1 [ ] [0/1] // Here is the progress bar
	- [ ] task2 // Indent by press tab
```

When you finished the task2,

```markdown
- [ ] task1 [|] [1/1] // The progress bar will be updated
	- [x] task2 // Indent by press tab
```

## Settings

1. Add progress bar to Heading: Make the Heading showing the task progress bars.
2. Add number to progress bar: You can see the total/completed number of tasks.
3. Set alternative marks: You can set which marks means the completed tasks.

## How to Install

### From Plugin Market in Obsidian

💜: Directly install from Obsidian Market.

### From BRAT

🚗: Add `Quorafind/Obsidian-Task-Progress-Bar` to BRAT.

### Download Manually

🚚: Download the latest release. Extract and put the three files (main.js, manifest.json, styles.css) to
folder `{{obsidian_vault}}/.obsidian/plugins/Obsidian-Task-Progress-Bar`.

## Say Thank You

If you are enjoy using Obsidian-Task-Progress-Bar then please support my work and enthusiasm by buying me a coffee
on [https://www.buymeacoffee.com/boninall](https://www.buymeacoffee.com/boninall).

<a href="https://www.buymeacoffee.com/boninall"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=boninall&button_colour=6495ED&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"></a>


%% README_END %%