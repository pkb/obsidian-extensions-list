---
aliases:
- Timetracker
author:
- '[[authors/hedgehog1833|Nils Dammenhayn]]'
categories:
- '[[categories/Time tracking|Time tracking]]'
description: Adds a stopwatch whose value can be inserted in the editor per hotkey.
downloads: 5051
mobile: true
number: 1174
stars: 8
title: Timetracker
type: plugin
updated: '2024-12-26T15:55:31'
url: https://github.com/hedgehog1833/obsidian-timetracker
version: 1.5.0
---

%% README_START %%

# Obsidian Timetracker plugin

This Obsidian plugin adds a stopwatch to track time of something. Per hotkey the stopwatch's current value can be inserted into the editor, to make notes to 
this precise moment in time. If you forgot to activate the stopwatch, you can set a custom start value.
The stopwatch functionality is a completely rewritten clone of https://github.com/tokuhirom/obsidian-stopwatch-plugin

## Configuration

### Time format: hours, minutes, seconds

The format for how to print the stopwatch's current value. Default is to display hours, minutes and seconds `00:00:00`. Each can be turned on and off separately. 

### Trimming

Allows cutting off leading zeros. With this setting activated, `01:10:01` will be displayed as `1:10:1`.

### Line break

Adds a line break after the inserted timestamp instead of the default whitespace.

### Text color

The inserted timestamp's text color can be chosen via color picker. The color is applied via an html span.

### Printed time format

The format for how to print the stopwatch's current value. If left blank the default is to display the value just as it
is shown in the sidebar. There are three placeholders available: `${hours}`, `${minutes}` and `${seconds}` that are
simply replaced with the respective value. The trimming parameter still applies to the printed time format. Maximum
length for the printed time format is 256 characters.
<br>
The print format `Time: ${hours}h ${minutes}m ${seconds}s` will result in `Time: 1h 10m 1s` being pasted for a stopwatch 
value of `01:10:01` with trimming parameter active.


%% README_END %%