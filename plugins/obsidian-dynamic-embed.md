---
aliases:
- Dynamic Embed
author:
- Ivaylo Dabravin <ivaylo.dabravin@gmail.com>
author_page: https://github.com/dybrawin/obsidian-dynamic-embed
categories: []
description: Dynamicly interpreted inline embeds.
downloads: 6209
mobile: true
number: 448
title: Dynamic Embed
type: plugin
updated: '2022-03-09T15:18:37'
url: https://github.com/dabravin/obsidian-dynamic-embed
version: 1.1.0
---

%% README_START %%

# Obsidian Dynamic Embed

Embed snippets, templates and any linkables by delegating the current scope to the embedded file, treating them as content instead of references, contrary to the integrated tag `![[]]`.

## Example
Import the contents of file ***`Script-note-template file name link.md`***, existing in the active vault.
Note that the link syntax does **not** support heading/block links (e.g. `[[file#heading1]]`)
~~~
```dynamic-embed
[[Script-note-template file name link]]
```
~~~

%% README_END %%