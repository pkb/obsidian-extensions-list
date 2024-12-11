---
aliases:
- Minitabs
author:
- '[[ssjy1919|ssjy1919]]'
categories: []
description: Customize a set of nested tabs through code blocks.
downloads: 2515
mobile: true
number: 1308
stars: 20
title: Minitabs
type: plugin
updated: '2023-12-06T18:23:33'
url: https://github.com/ssjy1919/Obsidian-minitabs
version: 0.0.9
---

%% README_START %%

## 这是一个Obsidian笔记软件的插件
可以通过代码块嵌入多个标签页

## 例1，tab按钮在上

效果: 

 ![Image 例一](https://raw.githubusercontent.com/ssjy1919/Obsidian-minitabs/HEAD/Screenshots/例一.png)
 代码块语法：
````md
```minitabs
tabs
`按钮1` `按钮2` `可以一直写下去……` 
===
第一个按钮对应的页面
===
按钮二对应的页面
===
按钮三对应的页面
```
````

## 例2，tab按钮在下

效果: 

 ![Image 例二](https://raw.githubusercontent.com/ssjy1919/Obsidian-minitabs/HEAD/Screenshots/例二.png)
 代码块语法：
````md
```minitabs
tabsBottom
`按钮1` `按钮2` `可以一直写下去……` 
===
第一个按钮对应的页面
===
按钮二对应的页面
===
按钮三对应的页面
```
````


## 上下tab按钮相互套娃


效果: 

 ![Image 例三](https://raw.githubusercontent.com/ssjy1919/Obsidian-minitabs/HEAD/Screenshots/例三.png)

 代码块语法：

``````md
`````minitabs
tabs
`按钮1` `按钮2` `按钮3` 
---
>[!Note]+ 1
># 1
````minitabs
tabsBottom
`按钮1` `按钮2` `按钮3` 
===
>[!Note]+ 1
># 1.1
===
>[!Note]+ 1
># 1.2
===
>[!Note]+ 1
># 1.3
````
---
>[!Note]+ 1
># 2
````minitabs
tabsBottom
`按钮1` `按钮2` `按钮3` 
===
>[!Note]+ 1
># 2.1
===
>[!Note]+ 1
># 2.2
===
>[!Note]+ 1
># 2.3
````
---
>[!Note]+ 1
># 3
````minitabs
tabsBottom
`按钮3.1` `按钮3.2` `按钮3.3` 
===
>[!Note]+ 1
># 3.1
===
>[!Note]+ 1
># 3.2
===
>[!Note]+ 1
># 3.3
````
`````
``````


## 四象限视图

效果: 

![四象限视图](https://raw.githubusercontent.com/ssjy1919/Obsidian-minitabs/HEAD/Screenshots/四象限视图.png)

 代码块语法：

 `````md
````minitabs
fourQuadrant
---
### 不紧急但重要⭐⭐⭐
- [ ] 呆呆
---
### 紧急且重要⭐⭐⭐⭐
- [ ] 呆呆
---
### 不紧急不重要⭐
- [ ] 呆呆
---
### 紧急不重要⭐⭐
- [ ] 呆呆
````
 `````

%% README_END %%