---
aliases:
- Task list
author:
- '[[authors/ted-marozzi|Ted Marozzi]]'
categories:
- '[[categories/Task management|Task management]]'
description: Enable better task management via lists.
downloads: 1874
mobile: true
number: 1415
stars: 10
title: Task list
type: plugin
updated: '2024-04-05T15:40:17'
url: https://github.com/ted-marozzi/task-list
version: 1.0.1
---

%% README_START %%

# Task list

A simple obsidian plugin enabling better task management via lists.

# Features

## Create lists with task states

Simply start an ordered or unordered list and then add one of the following directives, :to-do, :doing, :paused or :done.

```md
- Supported task states
	- :to-do I need to be done
	- :doing I am being done
	- :paused I am paused
	- :done I am done
```

These will render the directives as interactive task state boxes like so:

<img src="https://raw.githubusercontent.com/ted-marozzi/task-list/HEAD/assets/supported-task-states.png" alt="Supported task states" width=200 />

## Sort lists according to its status

Sorts can be triggered via the "Sort lists" command, the context menu (<kbd>Option</kbd> + click or right click) on a task state box or the context menu on the editor.

Lists will be sorted according to this sort order:
- :doing First, as your attention is needed
- :paused Second, as you may need to review it
- :to-do Third, as you can pick this up when the above is done
- :done Last, as your attention isn't needed

## Change the states of a task list item

- Click a task state box to cycle to the next state

- Use the context menu on a task state box to mark a different state

## Project values

- Performance focused, a lot of care is taken to ensure task-list doesn't slow down obsidian

- Markdown compatability, task-list extends markdown but doesn't break it, your documents will still render outside of this plugin, with a readable task state and easy to remember directives

# Installation

## Install the lastest release

1. [Click this link and follow the prompts to install](https://obsidian.md/plugins?id=task-list)

## Build from source

1. Clone this repo to `./vault/.obsidian/plugins`
1. Run `npm run build`
1. Start obsidian
1. Navigate to Settings > Community plugins
1. Enable the "Task list" plugin

# Sponsor me
[If you like this software please consider sponsoring me here ❤️](https://github.com/sponsors/ted-marozzi
)


%% README_END %%