---
aliases:
- Obsidian Stylist
author:
- '[[authors/ixth|Mikhail Menshikov <ainop@ya.ru>]]'
categories: []
description: Obsidian plugin that allows to add classes and styles on markdown blocks
downloads: 4891
mobile: true
number: 709
stars: 41
title: Obsidian Stylist
type: plugin
updated: '2022-12-29T18:10:59'
url: https://github.com/ixth/obsidian-stylist
version: 0.0.4
---

%% README_START %%

# Obsidian Stylist

*Stylist* is a plugin for Obsidian that allows to add classes and styles on markdown.


> **Note**
> This plugin doesn't work in Live Preview mode.


## Examples

For example, if you want to add underline for headings on one particular page, you can do it like this:

````markdown
```style
h2 {
    text-decoration: underline;
}
```

## Does wood sink in water?
````

Result:

![Style tag render](https://raw.githubusercontent.com/ixth/obsidian-stylist/HEAD/style-dark.png#gh-dark-mode-only)
![Style tag render](https://raw.githubusercontent.com/ixth/obsidian-stylist/HEAD/style-light.png#gh-light-mode-only)

> **Note**
> All styles are processed to prevent messing up the rest of the Obsidian app.

Or if you want certain blocks on your page to use multi-column layout, you can just add class on containing block:

````markdown
```style
.multicol-3 ul {
    columns: 3;
}
```

## What also floats in water?

%% Class will be added not to the list element itself,
    but to section container, so you should write styles respectively %%

`classname:multicol-3`

* Bread
* Apples
* Very small rocks
* Cider
* Grape gravy
* Cherries
* Mum
* Churches
* Lead
* A duck
````

Result:

![Class render](https://raw.githubusercontent.com/ixth/obsidian-stylist/HEAD/class-dark.png#gh-dark-mode-only)
![Class render](https://raw.githubusercontent.com/ixth/obsidian-stylist/HEAD/class-light.png#gh-light-mode-only)


%% README_END %%