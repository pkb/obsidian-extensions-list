---
aliases:
- File Include
author:
- '[[tillahoffmann|Till Hoffmann]]'
categories:
- '[[categories/Code and development|Code and development]]'
- '[[categories/Custom code blocks|Custom code blocks]]'
description: Include or embed files in Obsidian markdown.
downloads: 3988
mobile: true
number: 969
stars: 28
title: File Include
type: plugin
updated: '2023-06-29T01:04:39'
url: https://github.com/tillahoffmann/obsidian-file-include
version: 1.1.1
---

%% README_START %%

![](https://raw.githubusercontent.com/tillahoffmann/obsidian-file-include/HEAD/demo.png)

Include files in Obsidian using `include` code blocks.

~~~
```include
hello.py
```
~~~

```include
hello.py
```

Add syntax highlighting by adding the language separated by a space.

~~~
```include python
hello.py
```
~~~

```include python
hello.py
```

Paths are resolved relative to the markdown file. Prefix the path with `@/` to resolve relative to the vault root.


%% README_END %%