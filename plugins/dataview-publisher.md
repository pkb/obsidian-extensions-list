---
aliases:
- Dataview Publisher
author:
- '[[authors/udus122|UD]]'
categories:
- '[[categories/Sharing and publishing|Sharing and publishing]]'
description: Output markdown from your Dataview queries and keep them up to date.
  You can also publish them.
downloads: 1302
mobile: true
number: 1754
stars: 41
title: Dataview Publisher
type: plugin
updated: '2024-11-16T15:02:32'
url: https://github.com/udus122/dataview-publisher
version: 0.3.10
---

%% README_START %%

# Dataview Publisher

## Overview

Output markdown from your [Dataview](https://blacksmithgu.github.io/obsidian-dataview) queries and keep them up to date.
You can also be able to [publish](https://obsidian.md/publish) them.

## Screenshots

![screenshot](https://raw.githubusercontent.com/udus122/dataview-publisher/HEAD/assets/demo.gif)

## Prerequisites

This plugin uses the following two plugins, so you must install them:

- [Dataview](https://blacksmithgu.github.io/obsidian-dataview)
- [Publish](https://obsidian.md/publish) (Core Plugin)

## Installation

### Installing the plugin using BRAT

1. Install the BRAT plugin
    1. Open `Settings` -> `Community Plugins`
    2. Disable safe mode, if enabled
    3. *Browse*, and search for "BRAT" 
    4. Install the latest version of **Obsidian 42 - BRAT**
2. Open BRAT settings (`Settings` -> `Obsidian 42 - BRAT`)
    1. Scroll to the `Beta Plugin List` section
    2. `Add Beta Plugin`
    3. Specify this repository: `udus122/dataview-publisher`
3. Enable the `Checkbox Time Tracker` plugin (`Settings` -> `Community Plugins`)

## Usage

````
%% DATAVIEW_PUBLISHER: start
```dataview
<Your favorite Dataview query>
```
%%
<Query results will be output as markdown here>
%% DATAVIEW_PUBLISHER: end %%
````

Tips: To suppress the original rendering, omit "dataview" of info string.

### Examples

#### Dataview Query Language (DQL) query

Display a list of files tagged with `#articles`
There are two notes tagged with `#articles` in the Vault (Article1.md, Article2.md).

````
%% DATAVIEW_PUBLISHER: start
```dataview
LIST FROM #articles SORT file.name
```
%%
- [[Article1.md|Article1]]
- [[Article2.md|Article2]]
%% DATAVIEW_PUBLISHER: end %%
````

For detailed instructions on how to write DQL, please refer to the [Dataview documentation](https://blacksmithgu.github.io/obsidian-dataview/queries/structure).

#### Dataview JS (Experimental)

Dataview can also output the results of executing arbitrary JavaScript code by setting the code block language (info string) to `javascript`, `js`, or `dataviewjs`.

This allows you to output Markdown strings in the desired format by using [Dataview's Markdown functions](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#markdown-dataviews).

- [dv.markdownTable(headers, values)](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvmarkdowntableheaders-values)
- [dv.markdownList(values)](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvmarkdownlistvalues)
- [dv.markdownTaskList(tasks)](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#dvmarkdowntasklisttasks)

````
%% DATAVIEW_PUBLISHER: start
```dataviewjs
const articles = dv.pages("#articles").map(article => `[[${article.file.name}]]`);
`
## Articles

${dv.markdownList(articles)}
`;
```
%%
## Articles

- [[Article1]]
- [[Article2]]

%% DATAVIEW_PUBLISHER: end %%
````

Dataview JS is executed using the [eval() function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval). the last expression or value evaluated is output (Leading and trailing whitespace and newlines will be trimmed).

It doesn't render HTML, so it won't be output even if you use the [Dataview's Render functions](https://blacksmithgu.github.io/obsidian-dataview/api/code-reference/#render).
Please output a Markdown string as the last expression or value.

You can use [`DataviewAPI`](https://github.com/blacksmithgu/obsidian-dataview/blob/6d9030ef1df9c3f310f42e3502149dc71792dc4d/src/api/plugin-api.ts#L77) object as `dv` and [`TFile`](https://docs.obsidian.md/Reference/TypeScript+API/TFile) object of current file as `file`.

**Warning: It can be dangerous to execute arbitrary codes from untrusted sources. Only run codes that you understand, from trusted sources.**

### Settings

![settings_screenshot](https://raw.githubusercontent.com/udus122/dataview-publisher/HEAD/assets/settings.jpg)

- Source: [Dataview source](https://blacksmithgu.github.io/obsidian-dataview/reference/sources) to search for the target file
  - This setting is used to narrow down the files to be updated, and is recommended for performance reasons
  - If left empty, this plugin will attempt to update all files in the Vault
- Update on save: Automatically update output when file is saved
  - Only the Saved file is updated.

### Commands

![commands_screenshot](https://raw.githubusercontent.com/udus122/dataview-publisher/HEAD/assets/commands.jpg)

- Insert dataview publish block
  - Insert Dataview Publisher Template at next line of cursor
- Update dataview publish blocks
  - Update all Dataview Publish blocks for the files that correspond to the specified Source in settings.
- Update dataview publish blocks and open publish panel
  - Same as "Update dataview publish blocks" and open publish panel.

## Inspirations

This plugin highly inspired by this article.

[Using Dataview on Obsidian Publish](https://joschua.io/posts/2023/09/01/obsidian-publish-dataview)



%% README_END %%