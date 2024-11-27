---
aliases:
- Set View Mode per Note
author:
- Alex Davies
author_page: https://github.com/AlexDavies8
categories: []
description: Use YAML frontmatter to specify a view mode per note.
downloads: 1469
funding_page: https://ko-fi.com/alexdavies
mobile: true
number: 1428
title: Set View Mode per Note
type: plugin
updated: '2024-02-13T11:09:38'
url: https://github.com/AlexDavies8/obsidian-frontmatter-viewmode
version: 1.0.3
---

%% README_START %%

# Obsidian Set View Mode per Note

This plugin allows you to set a view mode when opening specific notes. No configuration needed, just a single property at the top of any note.

This can be done via the `prefer-view` property, which can have the values `read`, `edit`, `edit-source`, or `edit-preview`.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/A0A8U5GAJ)

## Examples

```yaml
---
prefer-view: read
---
This note will open in reading mode.
```

```yaml
---
prefer-view: edit
---
This note will open in the preferred editing mode specified in 'Settings > Editor > Default editing mode'.
```

```yaml
---
prefer-view: edit-source
---
This note will open in Source mode for editing.
```

```yaml
---
prefer-view: edit-preview
---
This note will open in Live Preview mode for editing.
```

%% README_END %%