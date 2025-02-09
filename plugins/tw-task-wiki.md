---
aliases:
- TaskWarrior Task Wiki
author:
- '[[authors/SntTGR|SntTGR]]'
categories:
- '[[categories/Integration|Integration]]'
description: Wrapper and integration around TaskWarrior. Allows you to view and edit
  tasks in your TaskWarrior database as tables.
downloads: 609
mobile: false
number: 1667
stars: 11
title: TaskWarrior Task Wiki
type: plugin
updated: '2024-12-02T02:29:02'
url: https://github.com/SntTGR/obsidian-tw-task-wiki
version: 1.2.0
---

%% README_START %%

# Taskwarrior obsidian task wiki

Small and simple markdown syntax for querying taskwarrior reports

![2024-05-07_12-01-03](https://github.com/SntTGR/obsidian-taskwarrior/assets/30510907/2c436c80-c39b-4546-acd1-ceb96ddc4d51)

Inspired by [taskwiki](https://github.com/tools-life/taskwiki) and [tq-obsidian](https://github.com/tgrosinger/tq-obsidian)

> [!Caution]
> This pluging runs the configured taskwarrior binary with arbitrary arguments. Make sure you trust your vault notes.

## Usage

Use the `tw` codeblock language

````markdown
```tw
<report>
[<filters>]
[<template>]
```
````

`template` and `filters` parameters are optional

The `template` parameter gives new tasks created with this report specified default values

Hold `Alt` to delete tasks

Click on a task row to modify it

### Example

```tw
list
project:taskwarrior +work scheduled.after:socw-1hour
```
equivalent to `task list project:taskwarrior +work scheduled.after:socw-1hour`

![2024-05-07_12-11-51](https://github.com/SntTGR/obsidian-taskwarrior/assets/30510907/a4786407-ed92-4acd-9847-8af00c97bca1)


%% README_END %%