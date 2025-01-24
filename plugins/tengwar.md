---
aliases:
- Tengwar
author:
- '[[authors/mikevetkin|Michael Vetkin]]'
categories: []
description: Support Tengwar (The Elvish Letters)
downloads: 65
mobile: true
number: 2125
stars: 3
title: Tengwar
type: plugin
updated: '2025-01-20T04:43:29'
url: https://github.com/mikevetkin/obsidian-tengwar
version: 1.0.12
---

%% README_START %%

# Tengwar for Obsidian

> An [Obsidian](https://obsidian.md/) plugin that allows you to add [tengwar](https://en.wikipedia.org/wiki/Tengwar) to your notes

![Tengwar Text Examples](https://raw.githubusercontent.com/mikevetkin/obsidian-tengwar/HEAD/assets/main-screen.png)

## How to use

![Tengwar Text Examples](https://raw.githubusercontent.com/mikevetkin/obsidian-tengwar/HEAD/assets/doc-30fps-720px.gif)

To add text in Tengwar to the document:

- create a [block of code](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code+blocks);
- specify the extension `teng`;
- paste tengwar text.

For example:

````markdown
```teng
        
```
````

## Apply a specific font on a page

![Tengwar Text Examples](https://raw.githubusercontent.com/mikevetkin/obsidian-tengwar/HEAD/assets/teng-artano-30fps-1080px.gif)

You may need to set different fonts for different notes, other than the main font selected in the settings.

To do this, in the code block, add the font name separated by a `-` to the keyword `teng`. For example:

````markdown
```teng-artano
.
.
```
````

Other keywords: `teng`, `teng-annatar`, `teng-eldamar`, `teng-primate`, `teng-alcarin`, `teng-artano`, `teng-telcontar`, `teng-freemono`.

> [!IMPORTANT]
> If you changed the keyword from `tang` to `elfish` in the settings, you need use font name with this keyword.
> For example: `elfish-telcontar` or `elfish-eldamar`.

## Supported encodings

At [the moment](https://en.wikipedia.org/wiki/Tengwar) there are two ways to work with Tengvar on a computer in the community:

- [ISO 8859-1](https://en.wikipedia.org/wiki/ISO_8859-1);
- [ConScript Unicode Registry](https://en.wikipedia.org/wiki/ConScript_Unicode_Registry);

Both ways is supported.

## Supported devices

The plugin supports all devices. But at the moment, on Apple devices, there are problems with rendering some CSUR fonts.

## Using with other plugins

By installing Tengwar and [Spaced Repetition](obsidian://show-plugin?id=obsidian-spaced-repetition), you can learn Elvish through flash cards:

![Tengwar Text Examples](https://raw.githubusercontent.com/mikevetkin/obsidian-tengwar/HEAD/assets/spaced-30fps-1080px.gif)

## Editing mode (WIP)

> [!IMPORTANT]
> In the editing mode, the Elvish letters turn into nonsense. Support for Tengwar in edit mode is currently in development.

## Contacts

If you have questions or suggestions, text me in Telegram [mikevetkin](https://mikevetkin.t.me) or create issue on [Github](https://github.com/mikevetkin/obsidian-tengwar).


%% README_END %%