---
aliases:
- Progress Clocks
author:
- '[[tokenshift|Nathan Clark]]'
categories: []
description: Progress clocks and other useful widgets for real-time status tracking.
downloads: 2045
mobile: true
number: 1520
stars: 2
title: Progress Clocks
type: plugin
updated: '2024-07-29T22:01:44'
url: https://github.com/tokenshift/obsidian-progress-clocks
version: 0.3.1
---

%% README_START %%

# Obsidian Progress Clocks

Progress clocks, counters, and stopwatches for [Obsidian.md](https://obsidian.md/).

## Usage

Use the `Progress Clocks: Open Sidebar View` to open the progress clocks panel.

By default, the panel is empty; use the "Add Section" button to create a new
grouping of progress clocks (and other trackers), then use the buttons at the
bottom of the panel to add clocks, counters, and stopwatches to the section (see
below for explanations of each kind of tracker).

![Example of the Progress Clocks sidebar view](https://raw.githubusercontent.com/tokenshift/obsidian-progress-clocks/HEAD/static/sidebar.png)

## Types of Trackers

### Progress Clock

Progress clocks are pie-chart-style counters with a configurable number of
segments, useful for tracking progress/steps. They were introduced in the
[Blades in the Dark](https://bladesinthedark.com/progress-clocks) RPG by
[John Harper](https://twitter.com/john_harper).

![Example of progress clocks with 4, 6, and 8 segments](https://raw.githubusercontent.com/tokenshift/obsidian-progress-clocks/HEAD/static/clocks.png)

When you add a new clock, enter how many segments you want it to have. You can
add & remove segments later on the fly, as well as incrementing the current count
(i.e. how many segments are filled), using the buttons below each clock (or by
ctrl/cmd-clicking on the clock itself).


### Counter

![Example of a counter](https://raw.githubusercontent.com/tokenshift/obsidian-progress-clocks/HEAD/static/counter.png)

A number (defaulting to zero) with increment/decrement buttons next to it. You
can also click on the current value to enter an exact number, or enter `+/-` in
order to add/subtract from the current value.

### Stopwatch

![Example of a stopwatch](https://raw.githubusercontent.com/tokenshift/obsidian-progress-clocks/HEAD/static/stopwatch.png)

Keeps track of time (in seconds by default; click the `/1000` button to toggle
between seconds and milliseconds). The other buttons under the stopwatch can be
used to pause/resume the stopwatch, reset it (to 0:00), or record a lap time
(which will show up in a list under the stopwatch).

## Inline Usage

You can also use inline clocks and counters; use `` `clock 2 / 4` `` to get a
4-segment clock with 2 segments filled in, or `` `counter 42` `` to get a
counter initially set to 42.

While inline clocks and counters will render in "view" mode, interacting with
them *won't* alter the markdown source. In edit mode with live preview enabled,
the clocks and counters will render, and interacting with them will update the
underlying markdown.


%% README_END %%