---
aliases:
- Dirtreeist
author:
- '[[authors/k4a-l|kasahala]]'
categories: []
description: Render a directory Structure Diagram from a markdown lists in codeblock.
downloads: 5591
mobile: true
number: 671
stars: 30
title: Dirtreeist
type: plugin
updated: '2022-11-01T18:25:19'
url: https://github.com/k4a-l/obsidian-dirtreeist
version: 0.0.2
---

%% README_START %%

# Obsidian Dirtreeist

Render a directory Structure Diagram from a markdown lists in codeblock.


## Caution
This plugin relies on the functionality of the [dirtreeist](https://github.com/k4a-l/dirtreeist) library. Please send feature requests there.


## Features


### Basic

If you write a code block as follows,
````
```dirtree
- /components
	- App.tsx
	- App.css
- config.json
- /utils
	- converter.ts
	- parser.ts
```
````

It is rendered as follows,
```
├─ /components
│　├─ App.tsx
│　└─ App.css
├─ config.json
└─ /utils
　　├─ converter.ts
　　└─ parser.ts
```

### Other
#### Sequential listings

```
- a
  - b
  - c
- d

- 1
  - 2
    - 3
      - 4
```

```
├─ a
│　├─ b
│　└─ c
├─ d
└─ 1
　　└─ 2
　　　　└─ 3
　　　　　　└─ 4
```



#### Another element comes in between

```
- a
  - b
  - c
- d

sometext

- 1
  - 2
    - 3
      - 4
```

```
├─ a
│　├─ b
│　└─ c
└─ d

└─ 1
　　└─ 2
　　　　└─ 3
　　　　　　└─ 4
```


## Settings

See [Description of options](https://github.com/k4a-l/dirtreeist#description-of-options).

%% README_END %%