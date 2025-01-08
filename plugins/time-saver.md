---
aliases:
- TimeSaver
author:
- '[[authors/odayou|tommy.li]]'
categories:
- '[[categories/Time tracking|Time tracking]]'
description: Save your time. 1. Quickly insert todo directive. 2. Quickly count the
  time spent on tasks in the current note and the total time spent.
downloads: 605
mobile: true
number: 1609
stars: 5
title: TimeSaver
type: plugin
updated: '2024-04-18T09:55:56'
url: https://github.com/odayou/obsidian-task-processing-extension
version: 0.0.2
---

%% README_START %%

# Obsidian 任务处理扩展插件

[English README](https://github.com/odayou/task-processing-extension/blob/master/README_en.md)

> 一个 [Obsidian](https://obsidian.md/) 插件，用于处理任务的统计、插入任务、插入时刻等功能
>
> 基于自己的工作流和[一个网友的诉求](https://forum-zh.obsidian.md/t/topic/30252/4)开发的一个Obsidian插件，欢迎大家提出宝贵意见。

## 仓库地址

[odayou/obsidian-task-processing-extension](https://github.com/odayou/task-processing-extension)

## 功能

1. 通过命令插入计算事项花费时间的块（会查找当前文档的待办进行计算）在光标处
2. 通过命令插入待办/已办事项在光标处
3. 通过命令插入当前的时刻在光标处

## 使用方式

在编辑视图下，在具有任务（标准task格式）、花费时刻的文档中，调用命令`time total`, 即可在光标出插入任务的计算结果，分别列出每个任务的花费及总花费

## 演示
- 综合演示
- ![综合演示](https://raw.githubusercontent.com/odayou/obsidian-task-processing-extension/HEAD/screen/综合演示.gif)
- 计算既有任务的时间
![任务耗时统计演示](https://raw.githubusercontent.com/odayou/obsidian-task-processing-extension/HEAD/screen/任务耗时统计演示.gif)
- 几个快捷命令演示
![任务快捷编辑演示](https://raw.githubusercontent.com/odayou/obsidian-task-processing-extension/HEAD/screen/任务快捷编辑演示.gif)
- 当然所有功能都集成进了右键菜单
![右键菜单演示](https://raw.githubusercontent.com/odayou/obsidian-task-processing-extension/HEAD/screen/快捷菜单示例.png)

## 局限及注意

- 无法自动实时计算，一方面我没研究出来怎么做，另一方面我觉得时间统计无非就是在想知道的时候触发一下统计，自动计算这些可能属于过渡设计，或者性价比不高的特性
- 第一次开发插件，我目前知道命令只能在编辑视图下插文档内容，预览模式下我还没研究过
- 我设计的功能是：从文档中匹配出待办并计算汇总时间，也就是只能匹配 "- [ ] " 、"- [X] " 、" - [x] "这种开头的任务，计算指定格式的时刻，包括任务的格式/位置，时间的格式/位置请按照我演示图或示例数据中进行，你也可以按照自己的诉求自己改代码定义匹配格式, 改下匹配部分的代码，不难
- 如果未来有业余时间改造方向如下：1. 目前功能1多次触发会重复插入统计块，将来做成可自动替换的 2. 可能交互形式重新设计，比如做成菜单或者自动实时计算的功能(更新：目前最新版已经默认加入编辑器右键) 3.可以计算开始、结束时间跨日期的时间差，目前默认都是同一天
- 注意：如果不改动代码一定要按照我预设的格式记录时间否则会出现计算错误的情况，如 任务名中间**不要**有空格、任务名和时间中间**要有**空格、时间格式必须是**时刻:分钟**等，我在下面贴出我的待办数据，自己细品下格式
  
## 示例数据

```markdown
- [ ] task1 10:21-10:30
    - [ ] task1-1 09:00-10:00  13:00-14:00
    - [ ] task1-2  15:00-16:10  17:00-18:20
- [x] task2 16:10-17:00
    - [ ] tast2-2 10:00-13:00 19:00-20:20
```


%% README_END %%