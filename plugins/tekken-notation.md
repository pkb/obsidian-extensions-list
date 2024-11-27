---
aliases:
- Tekken Notation
author:
- OpTi9
author_page: https://github.com/OpTi9
categories: []
description: Renders Tekken Notation.
downloads: 1129
funding_page: https://www.buymeacoffee.com/opti9
mobile: true
number: 1486
title: Tekken Notation
type: plugin
updated: '2024-02-29T17:22:43'
url: https://github.com/OpTi9/obsidian-tekken-notation
version: 1.0.1
---

%% README_START %%

# Obsidian Tekken Notation

Render [Tekken Notation](https://tekken.fandom.com/wiki/Move_Terminology) Diagrams in [Obsidian](https://obsidian.md)

![Demonstration](https://i.imgur.com/hCePE7w.gif)

## Usage
Create a fenced codeblock using `tekken` as the language.
Specify your notations inside.

List of inputs is in the [Wiki](https://github.com/OpTi9/obsidian-tekken-notation/wiki)

### Examples

- default inputs:
~~~markdown
```tekken
f,n,d,df,2
```
~~~

<img src="https://i.imgur.com/OKTceN5.png" width="400">

- adding name:
to add a name you need to start your notation with "name":
~~~markdown
```tekken
"EWGF",f,n,d,df,2
```
~~~

<img src="https://i.imgur.com/gD8dCph.png" width="400">

- adding info at the end:
to add info at the end (ex: damage etc) you need to end your notation with "text":
~~~markdown
```tekken
"EWGF",f,n,d,df,2,"50 damage"
```
~~~

<img src="https://i.imgur.com/eA2l7dh.png" width="400">

- adding custom text as input:
to add custom text as part of the input you need to just write it as text WITHOUT quotes:
~~~markdown
```tekken
"EWGF",f,n,d,df,2,same frame input,"50 damage"
```
~~~

<img src="https://i.imgur.com/mgxpkY3.png" width="500">

- adding combo arrows / brackets:
to add combo arrows or brackets:
~~~markdown
```tekken
1,-,1+2,-,[,3,4,]
```
~~~

<img src="https://i.imgur.com/wfdub4P.png" width="400">

## Installation
`Settings > Community plugins > Community Plugins > Browse` and search for `Tekken Notation`.

## Supporting creator
[Buy Me a Coffee](https://www.buymeacoffee.com/opti9)


%% README_END %%