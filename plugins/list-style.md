---
aliases:
- Ordered List Style
author:
- '[[authors/erykwalder|Eric Rykwalder]]'
categories: []
description: Set ordered list style inline in Obsidian.md. Alphabetic lists, roman
  numeral lists, etc.
downloads: 7299
mobile: true
number: 654
stars: 21
title: Ordered List Style
type: plugin
updated: '2022-10-22T02:31:08'
url: https://github.com/erykwalder/obsidian-list-style
version: 0.1.0
---

%% README_START %%

# Ordered List Style

This is a plugin for [Obsidian](https://obsidian.md).

Set the style of ordered lists inline by adding details in the first list item.

```markdown
1. {A} a list with an upper-roman list ordering
2. This item will show as "B"
3. and this one as "C"
```

To set the style, the style name needs to be put in brackets before any other text.

Any of the [list style types](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) can be used with their full name, like `upper-alpha`. Additionally there is shorthand available for some of the common types:

-   `{A}`: Upper alpha
-   `{a}`: Lower alpha
-   `{I}`: Upper roman
-   `{i}`: lower roman
-   `{01}`: decimal with leading zero
-   `{1}`: decimal (default, though this may not be the case in your theme)

The list style cannot be changed mid-list, or by setting it in any element but the first.

## Gotchas

On mobile, sub lists may take on their parent type by default. This can be corrected by manually setting it back to the default, or whichever style type you prefer.


%% README_END %%