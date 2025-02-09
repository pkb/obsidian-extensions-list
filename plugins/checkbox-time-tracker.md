---
aliases:
- Checkbox Time Tracker
author:
- '[[authors/udus122|UD]]'
categories:
- '[[categories/Time tracking|Time tracking]]'
description: Insert timestamp when you check off the checkbox
downloads: 991
mobile: true
number: 1682
stars: 5
title: Checkbox Time Tracker
type: plugin
updated: '2024-09-08T06:34:26'
url: https://github.com/udus122/checkbox-time-tracker
version: 0.9.0
---

%% README_START %%

# Checkbox Time Tracker

## Overview

Insert timestamp when you check off the checkbox.
Examples are below.

The default timestamp format is `HH:mm` and if you want to include the end time, use `HH:mm-HH:mm`
You can also insert date, like: `YYYY-MM-DD HH:mm`

For more information, see [Settings](#settings).

## Screenshots

Click the checkbox to insert the current time.

![demo_todo_done](https://raw.githubusercontent.com/udus122/checkbox-time-tracker/HEAD/docs/images/demo_todo_done.gif)

By enabling Doing Status, you can also insert start and end times.

![demo_todo_doing_done](https://raw.githubusercontent.com/udus122/checkbox-time-tracker/HEAD/docs/images/demo_todo_doing_done.gif)

## Installation

Installation from Obsidian's community plugins:

- Open Settings > community plugins
- Turn off 'Safe mode'
- Click 'Browse' button to browse plugins
- Search for 'Checkbot Time Tracker'
- Click 'Install' button

or via [this url](obsidian://show-plugin?id=checkbox-time-tracker)

### Install the plugin using BRAT

1. Install the BRAT plugin
    1. Open `Settings` -> `Community Plugins`
    2. Disable safe mode, if enabled
    3. *Browse*, and search for "BRAT" 
    4. Install the latest version of **Obsidian 42 - BRAT**
2. Open BRAT settings (`Settings` -> `Obsidian 42 - BRAT`)
    1. Scroll to the `Beta Plugin List` section
    2. `Add Beta Plugin`
    3. Specify this repository: `udus122/checkbox-time-tracker`
3. Enable the `Checkbox Time Tracker` plugin (`Settings` -> `Community Plugins`)

## Usage

1. Add the `checkbox-time-tracker`(default, can be changed by setting) class to the [`cssclasses` property](https://help.obsidian.md/Editing+and+formatting/Properties#Default+properties) of the page on which you want to enable time tracking
2. Then, when you check the checkbox on that page, the timestamp will be inserted.

## Settings

You can insert the date in addition to the time, and enable the doing status to record the start and end time.

Here are some examples:

### Default

This setting inserts the date as follows: `- [x] 12:00 ...`

![setting_default](https://raw.githubusercontent.com/udus122/checkbox-time-tracker/HEAD/docs/images/setting_default.jpg)

### Display start and end dates including the day of the week

This setting inserts the date as follows: `- [x] 2024/01/01(Mon) 12:00 - 2024/01/01 13:00 ...`

![setting_start_end_weekend](https://raw.githubusercontent.com/udus122/checkbox-time-tracker/HEAD/docs/images/setting_start_end_weekend.jpg)

### Display the start and end dates with links to daily notes

This setting inserts the date as follows: `- [x] [[2024-01-01]] 12:00 ...`

![setting_daily_note](https://raw.githubusercontent.com/udus122/checkbox-time-tracker/HEAD/docs/images/setting_daily_note.jpg)

### Omit end date if the start and end date are the same to avoid duplication

This setting inserts the date as follows: `- [x] 2024-01-01 12:00 - 13:00 ...`

![setting_omit_end_date](https://raw.githubusercontent.com/udus122/checkbox-time-tracker/HEAD/docs/images/setting_omit_end_date.jpg)


## Doing status style

This plugin does not include styling for the Doing status (`- [/]`).
Please refer to the following CSS snippet to install it.

- https://publish.obsidian.md/tasks/Reference/Status+Collections/SlRvb's+Alternate+Checkboxes
- https://github.com/netgamesekai/obsidian-checkbox-css
- Or whatever you like


%% README_END %%