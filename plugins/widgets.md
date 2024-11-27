---
aliases:
- Widgets
author:
- '[[rafaelveiga|Rafael Veiga]]'
categories: []
description: Adds widgets to your notes like clock, countdown and quotes.
downloads: 9176
mobile: true
number: 1354
title: Widgets
type: plugin
updated: '2024-05-18T22:40:53'
url: https://github.com/rafaelveiga/obsidian-widgets
version: 0.0.9
---

%% README_START %%

# Obsidian Widgets

Adds cool widgets within Obsidian notes

## Usage

To insert a widget, simply add a code block with the language `widgets` and add your options to the body

````
```widgets
<OPTIONS>
```
````

Currently, the available widgets are:

## Clock

![Clock](https://raw.githubusercontent.com/rafaelveiga/obsidian-widgets/HEAD/public/clock.png)

#### Configuration Body

`type`: clock

`format`: the time format you want to display on the clock. Supports "12hr", "24hr"

#### Example

````
```widgets
type: clock
format: "12hr" | "24hr"
```
````

## Quote

![Quote](https://raw.githubusercontent.com/rafaelveiga/obsidian-widgets/HEAD/public/quote.png)

#### Configuration Body:

`type`: quote

`quote`: the quote you want to display

`author`: the author of the quote (optional)

#### Example

````
```widgets
type: quote
quote: Lorem ipsum dolor sit amet
author: Lorem Ipsum
```
````

## Countdown

![Countdown](https://raw.githubusercontent.com/rafaelveiga/obsidian-widgets/HEAD/public/countdown.png)

#### Configuration Body:

`type`: countdown

`date`: Accepts either the standard format `YYYY-MM-DD HH:MM:SS` or relative time expressions such as `+Ns` (seconds), `+Nm` (minutes), `+Nh` (hours), and `+Nd` (days), where `N` is a numerical value.

`to`: Description of the countdown (optional)

#### Example

````
```widgets
type: countdown
date: 2024-01-01 00:00:00
to: New Year! 🎉
```
````

## Counter

![Counter](https://raw.githubusercontent.com/rafaelveiga/obsidian-widgets/HEAD/public/counter.png)

#### Configuration Body:

`type`: counter

`text`: the text label below the counter

#### Notice

The counter widget is supported only once by note. If you add more than one counter widget to a note, they will share the same count. To sync the count between devices, make sure your `.obsidian/plugins` folder is synced between devices. This is where Obsidian stores the data for this plugin

#### Example

````
```widgets
type: counter
text: Push-ups
```
````

## Customizing your widgets

We currently do not support and don't plan to support customizing styles and colors of each widget via options in the widgets code block. Each widget is set to respect your theme's colors. That does not mean you can further customize the look of your widgets to your liking via CSS Snippets.

If you want to customize your widgets, please follow the [guide](STYLING.md)

## Widget View

Obsidian Widgets comes with a command to add a Widget as a view to your workspace. This is useful if you want to have a widget always visible on your workspace. To use the command, open the Command Pallete (Ctrl + P) and select "Open widget view"

![Widget View](https://raw.githubusercontent.com/rafaelveiga/obsidian-widgets/HEAD/public/widget-view.png)

## Command Pallete

Obsidian Widgets also comes with a handy command on the command pallete (Ctrl+P) to add widgets on the fly

![Command Pallete](https://raw.githubusercontent.com/rafaelveiga/obsidian-widgets/HEAD/public/command-pallete.png)

## Suggestions

-   [Widget requests, bugs, new feature requests](https://github.com/rafaelveiga/obsidian-widgets/issues)

## Support

If you find this plugin useful and would like to support its development, you can sponsor me on Ko-Fi

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Z8Z0SNIS3)


%% README_END %%