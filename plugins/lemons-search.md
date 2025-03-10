---
aliases:
- Lemons Search
author:
- '[[authors/mProjectsCode|Moritz Jung]]'
categories:
- '[[categories/Search and navigation|Search and navigation]]'
description: A blazingly fast fuzzy finder with file preview.
downloads: 749
mobile: false
number: 1944
stars: 16
title: Lemons Search
type: plugin
updated: '2025-01-14T01:55:17'
url: https://github.com/mProjectsCode/obsidian-lemons-search-plugin
version: 0.0.9
---

%% README_START %%

# Lemons Search

A fast fuzzy finder based quick switcher with preview.

The plugin adds a new command `Lemons Search: Open search` that opens the quick switcher.
The quick switcher lets you easily search all file paths in your vault and offers a quick preview of the selected search result.

![exampleImage](https://raw.githubusercontent.com/mProjectsCode/obsidian-lemons-search-plugin/master/exampleImage.png)

To ensure top performance and high-quality results, the plugin is written in Rust using the [nucleo-matcher](https://crates.io/crates/nucleo-matcher) create running in a web worker.
This ensures that the majority of the computational load is taken off the main thread for a smoother feel.

## Special Search Commands

Every query consists of search atoms separated by spaces. Spaces can be escaped using `\`.
In the following illustration, each underlined part is a separate search atom.

```
movie Star\ Wars
----- ----------
```

Search atoms can be modified using special characters to change their behavior.

- **Substring**: prefix with `'`
    - will require search results to contain the search atom as a continuous sequence
    - e.g. `'foo` will only match `yummy food` but not `funny doodle`
    - use `!` to negate, e.g. `!foo`
- **Prefix**: prefix with `^`
    - will require search results to have the search atom as a prefix
    - e.g. `^foo` will only match `food` but not `yummy food`
    - use `!^` to negate, e.g. `!^foo`
- **Postfix**: postfix with `$`
    - will require search results to have the search atom as a postfix
    - e.g. `.md$` will only match `foo.md` but not `foo.txt`
    - use `!<search atom>$` to negate, e.g. `!.md$`
- **Exact**: prefix with `^` and postfix with `$`
    - will require search results to equal the search atom
    - e.g. `^foo.md$` will **only** match `foo.md` and nothing else
    - use `!^<search atom>$` to negate, e.g. `!^foo.md$`

## Keyboard Navigation

While the input field is focused, you can use the following special actions.

- `uparrow` Move selection up by one
- `downarrow` Move selection down by one
- `enter` Open selection
- `tab` Copy the current selection into the search bar

## Mouse Navigation

- Clicking on a suggestion that is not selected will select the clicked suggestion
- Clicking on the selected suggestion will open the suggestion


%% README_END %%