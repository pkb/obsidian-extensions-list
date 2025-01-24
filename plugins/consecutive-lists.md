---
aliases:
- Consecutive Lists
author:
- '[[authors/jtucker2|Josh Tucker]]'
categories: []
description: Create consecutive lists that are displayed separately in reading mode.
downloads: 1239
mobile: true
number: 1390
stars: 4
title: Consecutive Lists
type: plugin
updated: '2024-02-08T04:10:29'
url: https://github.com/jtucker2/obsidian-consecutive-lists
version: 1.0.1
---

%% README_START %%

# Obsidian Consecutive Lists
Create consecutive lists that are displayed separately in reading mode.

![](https://raw.githubusercontent.com/jtucker2/obsidian-consecutive-lists/HEAD/demo.gif)

This plugin changes nothing about the way markdown is interpreted in Obsidian. It creates markdown entirely compatible with other parsers, ensuring your notes are transferrable, and completely unreliant on this plugin.

It works simply by automatically inserting alternating list characters in consecutive lists, so they appear correctly separated in reading mode.

## Explanation
Say you wanted to create these two lists:
- item 1
- item 2
- item 3

+ item 4
+ item 5
+ item 6

This wouldn't work using this markdown:

```
- item 1
- item 2
- item 3

- item 4
- item 5
- item 6
```

Which would result in this:

- item 1
- item 2
- item 3

- item 4
- item 5
- item 6

So the plugin automatically changes the list character for the second list, resulting in this markdown:

```
- item 1
- item 2
- item 3

+ item 4
+ item 5
+ item 6
```

Resulting in what we wanted:

- item 1
- item 2
- item 3

+ item 4
+ item 5
+ item 6


%% README_END %%