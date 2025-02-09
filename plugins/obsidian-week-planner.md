---
aliases:
- Week Planner
author:
- '[[authors/rwirdemann|Ralf Wirdemann]]'
categories:
- '[[categories/Planning|Planning]]'
description: Week Planner plugin for Obsidian. This plugin defines commands for creating
  planning documents and moving tasks between them.
downloads: 9003
mobile: true
number: 622
stars: 40
title: Week Planner
type: plugin
updated: '2023-01-24T21:48:38'
url: https://github.com/rwirdemann/obsidian-week-planner
version: 0.1.4
---

%% README_START %%

# Obsidian Week Planner Plugin

https://user-images.githubusercontent.com/28768/197604992-021aadc1-1bb0-4622-a4c8-dc424d05d9cb.mov

This plugin reflects my personal working process that is organized around three central ideas:

- Inbox: single, unordered lists of todos
- Week: goals for the current week
- Today: ordered lists of today's todos

Each if these three todo containers is represented by a single Obsidian document type organized
within the following folder structure:

```
Week Planner
  Days
    2022-09-05-Monday
    2022-09-06-Tuesday
    ...
  Weeks
    Calweek-2022-35
    Calweek-2022-36
  	...
  Inbox
```

Each file contains tasks according to the todo-specific markup rules:

```
## 2022-09-19-Monday
- [ ] Plan my day
- [ ] Do emails
- [ ] Create new Week Planner release
```

The basic idea of this plugin is to create and open these documents easily and to move tasks between
them as seamless as possible. These goals are achieved by providing a set of commands: 

- `Show Inbox` Creates and / or shows the *inbox* note
- `Show Week` Creates and / or shows the note of the current calendar *week*
- `Show Today` Creates and / or shows the todo list for *today*
- `Show Tomorrow` Creates and / or shows the todo list for *tomorrow*
- `Show Yesterday` Creates and / or shows the todo list of *yesterday*
- `Move Task` Moves task under cursor to the next working day
- `Move to Inbox` Moves task under cursor back to the inbox
- `Move Anywhere` Opens a modal to move task under cursor to the inbox or a specific date document
- `Add Todo` Opens a todo modal to create a new todo and insert it into the inbox or a specific date document

All `Show`-Tasks open the relevant document. The document and the underlying folder structure is
created automatically if it doesn't exist.

The `Show`-commands consider the actual date along with a set of working days. Thus, `Show Today`
always creates / opens a todo note for the actual date regardless if today is a working day or not.
But `Show Tomorrow` and `Show Yesterday` consider working days, thus if you trigger `Show Yesterday`
on a Sunday the todo note of last Friday is created / opened. 

## The Planning Process

The `Move Task`-command supports a fluent planning process by moving tasks of the currently open
document to the next working day. For instance, if your current document is *inbox* `Move Task` will
move the task to *today*, but only if today is a working day. If today is a Sunday `Move Task` will
move the task to the next Monday (according to your working day settings as described below).
Shifting tasks from *inbox* to *today* comes in handy for your morning planning routine: Open your
*inbox* and move all today's task to your todo note of today. Today's note will be created
automatically if it doesn't exist.

If your active document is *today* `Move Task` moves a task to the next working day. This becomes
useful when you finish your work day but have unfinished tasks left that you would like to work on
tomorrow. The *tomorrow* file will also be created automatically if it doesn't exist.

And finally, if your current document is *yesterday* `Move Task` moves the task to *today*. This
command is helpful when you didn't finish some of yesterday's tasks and forgot to move them to the
next day on the day before.

## Settings

The plugin allows you to define the set of your specific working days according to the following
format:

```
Mon,Tue,Wed,Thu,Fri
```

The order of the days is not relevant.

## License

* [Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)


%% README_END %%