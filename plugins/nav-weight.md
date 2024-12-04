---
aliases:
- Nav Weight
author:
- '[[shu307|shu307]]'
categories: []
description: Sort your navigation items by Markdown frontmatter.
downloads: 92
mobile: false
number: 1981
stars: 2
title: Nav Weight
type: plugin
updated: '2024-11-19T11:53:36'
url: https://github.com/shu307/obsidian-nav-weight
version: 1.1.3
---

%% README_START %%

# Nav Weight

[[中文](./README_CN.md)]

> A sample plugin designed to sort files in navigation based on markdown frontmatter (also known as metadata) for Obsidian.

This plugin sorts files by recognizing the `weight` key defined in the markdown frontmatter, using its value as a criterion for ordering.

While several plugins are available for customizing navigation, I created this particular plugin because the others tend to be overly complex for someone as lazy as me.

## Usage

Make sure the following icon in the left ribbon is activated (lit up). You can enable/disable the plugin temporary as you wish by clicking it, but not now.

![arrow-down-0-1.svg](./assets/arrow-down-0-1.svg)

### Data Preparing

Define some `weight` in your markdown files, like:

```markdown
---
weight: 1
---
```

> [!NOTE]
> To sort a `folder`, you need an `index` file within it. The file name of the `index` can be configured in Settings. The `weight` of the `index` will be used as the `weight` of the `folder`.
>
> Additionally, the `index` itself has a **fixed** `weight` that can also be configured in Settings.

### Sorting

When the left ribbon icon is activated, sorting is automatic if you have defined some `weight`.

### Result checking

You can find one of the following icons in the bottom status bar. Move your mouse over the icon to see the tooltip.

![file-check.svg](./assets/file-check.svg)
![file-x.svg](./assets/file-x.svg)
![file-warning.svg](./assets/file-warning.svg)

## Additional

> [!TIP]
> If you are using [MkDocs](https://www.mkdocs.org/) as your documentation publisher, you can find a similar plugin for MkDocs at [this link](https://github.com/shu307/mkdocs-nav-weight).

All features of mkdocs-nav-weight have been implemented in this plugin, but you need to **manually enable** this feature in the Settings.

After sorting, you may encounter the following icons, which respectively represent `headless: true` or `empty: true`, and `retitled: true`, displayed alongside the names of files or folders.

![leaf.svg](./assets/leaf.svg) ![text-cursor-input.svg](./assets/text-cursor-input.svg)


%% README_END %%