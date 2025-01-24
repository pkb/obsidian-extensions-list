---
aliases:
- Link Headers Directly
author:
- '[[authors/Signynt|Signynt]]'
categories: []
description: When a header is linked, preview mode will show only the header, and
  not the note name.
downloads: 7892
mobile: true
number: 324
stars: 21
title: Link Headers Directly
type: plugin
updated: '2021-10-19T03:29:09'
url: https://github.com/Signynt/link-headers-directly
version: 1.0.2
---

%% README_START %%

## Link Headers Directly

When a header is linked, preview mode will show only the header, and not the note name.

### Example:

You have a note named Trees.md:
```
## Birch

A thin-leaved deciduous hardwood tree of the genus Betula.

## Oak

A tree or shrub in the genus Quercus of the beech family, Fagaceae.
```

If you then link to the heading `## Birch` in another note, like this:  

```
One of my favorite trees is the [[Trees#Birch]], because it reminds me of spring.
```

It would be displayed like this in preview mode:

> One of my favorite trees is the **Trees > Birch**, because it reminds me of spring.

![without plugin](https://raw.githubusercontent.com/signynt/link-headers-directly/master/resources/gifs/without-plugin.gif)

This looks unnatural in most sentences, and makes it tedious to have to change the preview text on many links to headings. With this plugin enabled the text would instead be displayed like this in preview mode:

> One of my favorite trees is the **Birch**, because it reminds me of spring.

![with plugin](https://raw.githubusercontent.com/signynt/link-headers-directly/master/resources/gifs/with-plugin.gif)


%% README_END %%