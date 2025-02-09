---
aliases:
- Status Bar Pomodoro Timer
author:
- '[[authors/kzhovn|kzhovn]]'
categories:
- '[[categories/Time management|Time management]]'
description: Adds a pomodoro timer to your status bar.
downloads: 43447
mobile: false
number: 216
stars: 79
title: Status Bar Pomodoro Timer
type: plugin
updated: '2025-01-21T13:20:43'
url: https://github.com/kzhovn/statusbar-pomo-obsidian
version: 0.1.15
---

%% README_START %%

# Status Bar Pomo Timer for Obsidian

Plugin that displays a [pomodoro timer](https://en.wikipedia.org/wiki/Pomodoro_Technique) in the [Obsidian](https://obsidian.md/) status bar.

![timer screenshot](https://raw.githubusercontent.com/kzhovn/statusbar-pomo-obsidian/HEAD/timer_screenshot.png)

## Use
Click the clock icon in the left ribbon panel to start. Click again to toggle pause.

All of these actions are available from the command pallete. You can also set a hotkey to quit the timer.

## Settings

You can change the duration of the pomodoro timer, breaks, and interval between long breaks, and toggle the end of timer sound and white noise.

Autostart timer allows you to toggle whether the next break or pomodoro start automatically after the next, or waits for you to start it. If disabled, you can specify a number of pomodoro-and-break cycles that run automatically (for instance, if you want to run two pomodoros and their corresponding breaks without stopping and then pause, enter 2).

### Logging

If you enable logging, the plugin will write to the file you specify as your log file at the end of each pomodoro. If no such file exists, it will be created at the end of your first pomo. By default, the log message is "🍅 dddd, MMMM DD YYYY, h:mm A" (e.g. "🍅 Friday, July 16 2021, 6:18 PM"), but you can specify your own message using [moment display format](https://momentjs.com/docs/#/displaying/format/).

"Log to daily note" will append the log to the daily note. Please note that this currently *only* works by appending to the end of the file.

"Log active note" will include a link to the active note at the time the pomodoro timer started in the log message. Be default, the link to the note will appear after the timestamp, but you can customize the location using [{{logFile}}].

You can open the current log file by clicking the timer.

## Notifications
You can enable system notifications, which allow you to receive notifications outside of the Obsidian app. Note that if you installed Obsidian through Flatpak on Linux this may not work. As a workaround, you can install Obsidian via [one of the other supported methods](https://obsidian.md/download).

%% README_END %%