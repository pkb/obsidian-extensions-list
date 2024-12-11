---
aliases:
- Markdown Tree
author:
- '[[carvah|carvah]]'
categories: []
description: Create a beautiful and intuitive directory tree using Markdown-oriented
  code style using tabs, spaces and enters.
downloads: 5312
mobile: true
number: 992
stars: 7
title: Markdown Tree
type: plugin
updated: '2023-07-17T21:50:37'
url: https://github.com/carvah/markdown-tree-plugin
version: 0.1.0
---

%% README_START %%

# Markdown Tree plugin

To create directory trees with a more visually appealing format using the Markdown Tree plugin, follow these steps:

1. Start with the root directory.
2. Use indentation with spaces or tabs to represent nested directories.
3. Place files directly under their respective directories.

## Example

Consider the following directory structure:

```
root
    second
        third
            fourth
                file1.jpg
                file2.txt
                file3.pdf
```

To transform this structure into a prettier directory tree using the **Markdown Tree** plugin, use the following input:

``` 
```markdown-tree
root
    second
        third
            fourth
                file1.jpg
                file2.txt
                file3.pdf
```

When rendered the output will be:

```plaintext
.
└── root
    └── second
        └── third
            └── fourth
                ├── file1.jpg
                ├── file2.txt
                └── file3.pdf
```

Credits to https://gitlab.com/nfriend for making the most used directory plugin online in https://tree.nathanfriend.io/



%% README_END %%