---
aliases:
- Nested Daily Todos
author:
- '[[thomasbrezinski|Thomas Brezinski]]'
categories: []
description: Carry over incomplete todos from Daily Notes grouped by headers, with
  support for nesting and flexible todo states.
downloads: 2690
mobile: true
number: 1385
stars: 5
title: Nested Daily Todos
type: plugin
updated: '2024-07-30T21:37:08'
url: https://github.com/thomasbrezinski/obsidian-nested-daily-todos
version: 1.2.2
---

%% README_START %%

# obsidian-nested-daily-todos

This plugin for [Obsidian](https://obsidian.md/) will parse previous Daily Notes for incomplete todos and add them to
today's Daily Note. It supports grouping the todos by section and supports alternative checkbox states and nested todos.

![Example Gif](https://raw.githubusercontent.com/thomasbrezinski/obsidian-nested-daily-todos/HEAD/assets/NestedTodosDemo.gif)

## Features

- Specify how many days of previous notes to check for incomplete todos
- Support for Todos optionally grouped by headers
- Support for nested Todos
- When Todos with children are carried forward, the entirety of the todo is kept
- Support for alternative [checkbox styles](https://github.com/colineckert/obsidian-things#checkbox-styling) for users using themes like [Things](https://github.com/colineckert/obsidian-things)
- Support for defining which states should be considered complete
- Todos with updated children in more recent notes take precedence over older versions of the same top level item

## How to use
The plugin includes a ribbon icon `Nested Daily Todos` that will add relevant incomplete todos to today's Daily Note.

There is also a command `Add prevoius incomplete todos` that can be run from the Obsidian command palette.

## How to install
You can install the plugin from the Community Plugins tab within Obsidian. Just search for "Nested Daily Todos".


%% README_END %%