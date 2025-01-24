---
aliases:
- Hidden Folder
author:
- '[[authors/ptrsvltns|ptrsvltns]]'
categories: []
description: Hidden Folder
downloads: 6491
mobile: false
number: 697
stars: 17
title: Hidden Folder
type: plugin
updated: '2022-12-14T21:06:37'
url: https://github.com/ptrsvltns/hidden-folder-obsidian
version: 1.0.7
---

%% README_START %%

# Hidden Folder for Obsidian  

Hidden Folder in Obsidian:  

- Regular expression  
- Ribbon icon for enable or disable  
- Translation  

## Demo

![DEMO](https://raw.githubusercontent.com/ptrsvltns/hidden-folder-obsidian/HEAD/doc/demo.gif)  

# Example  

> `^folder1`

```txt
- folder1 <- match
  - folder1
  - folder2
- folder2
  - folder1
  - folder2
```

> `abc`

```txt
- folder1
  - folder1
    - subabcfolder1 <- match
  - folderabc2 <- match
- folder2
  - foldabcer1 <- match
  - folder2abc <- match
```

> `\/folder$`

```txt
- folder1
  - folder1
  - folder2
- folder2
  - folder1 <- match
  - folder2
```

> `\/?folder$`

```txt
- folder1 <- match
  - folder1
  - folder2
- folder2
  - folder1 <- match
  - folder2
```

> `folder1\/folder`

```txt
- folder1
  - folder1 <- match
  - folder2
- folder2
  - folder1
  - folder2
```


%% README_END %%