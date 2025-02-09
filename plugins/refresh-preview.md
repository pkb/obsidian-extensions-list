---
aliases:
- Refresh Preview
author:
- '[[authors/mnaoumov|mnaoumov]]'
categories: []
description: Allows to refresh preview mode without reopening the note
downloads: 1368
mobile: true
number: 1769
stars: 6
title: Refresh Preview
type: plugin
updated: '2025-01-21T23:39:25'
url: https://github.com/mnaoumov/obsidian-refresh-preview
version: 2.0.6
---

%% README_START %%

# Refresh Preview

This is a plugin for [Obsidian](https://obsidian.md/) that allows to refresh preview mode without reopening the note.

It is usually useful if you have some dynamic content:

````markdown
```dataviewjs
dv.span(new Date().toString());
```
````

When you switch to the preview mode, the content is rendered once and will rerender only if you change the content of the code block or reopen the note.

The plugin adds a `Refresh Preview` button:

![Demo](https://raw.githubusercontent.com/mnaoumov/obsidian-refresh-preview/HEAD/images/demo.gif)

Also the plugin adds the `Refresh Preview: Refresh` command to the command palette.

The plugin allows to configure auto refresh on file change.

The plugin allows to configure auto refresh within a given time interval.

## Installation

- `Refresh Preview` is available on [the official Community Plugins repository](https://obsidian.md/plugins?id=refresh-preview).
- Beta releases can be installed through [BRAT](https://obsidian.md/plugins?id=obsidian42-brat).

## Debugging

By default, debug messages for this plugin are hidden.

To show them, run the following command:

```js
window.DEBUG.enable('refresh-preview');
```

For more details, refer to the [documentation](https://github.com/mnaoumov/obsidian-dev-utils?tab=readme-ov-file#debugging).

## Support

<a href="https://www.buymeacoffee.com/mnaoumov" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;"></a>

## License

© [Michael Naumov](https://github.com/mnaoumov/)


%% README_END %%