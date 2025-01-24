---
aliases:
- MBlog Publish
author:
- '[[authors/kingwrcy|Jerry]]'
categories:
- '[[categories/Sharing and publishing|Sharing and publishing]]'
description: 发布文章到MBlog平台,目前支持单篇文章发布
downloads: 882
mobile: true
number: 1480
stars: 4
title: MBlog Publish
type: plugin
updated: '2024-02-29T13:48:05'
url: https://github.com/kingwrcy/obsidian-mblog
version: 1.0.0
---

%% README_START %%

# Obsidian MBlog Plugin

Obsidian的MBlog平台插件,目前支持发布单篇文章到[MBlog](https://dev.mblog.club).

1. 先去[MBlog](https://dev.mblog.club)后台开启API接口,这个是付费功能,免费用户不支持.
2. 打开你的Obsidian安装本插件.
3. 在插件设置里填入第一步开启的`api token`.
4. 任选一篇文章右键点击`发布到MBlog平台`选项.

对文章有以下要求:

必须要有[Front Matter](https://v1.vuepress.vuejs.org/zh/guide/frontmatter.html),它定义了一篇文章的一些基本信息,Obsidian本身也是支持的,在正文部分输入`---`就会弹出相关提示.

支持以下字段,除了title字段外,其它字段都是选填.

| 字段|含义| 类型|说明 |
| --- | --- | --- | --- |
|title  |文章标题  |字符串  |必填,不填无法发布|
|link|文章链接|字符串|不必填,不填默认取title字段,不能包含`/`,`#`等特殊符号|
|pubDate|文章发布日期|日期,YYYY-MM-DD|不必填,默认取当前时间|
|tags|文章标签|标签|不必填,默认为空|
|draft|是否是草稿|复选框|不必填,默认不是草稿|

显示在obsidian里如下:

![1708249894503.png](https://cdn.mblog.club/2024/02/18/65d1d32903395.png).

完成上述设置后,右键点击obsidian左侧的你需要发布的文章,选中`发布到MBlog平台`,成功或失败右上角会有提示.

![1708250145167.png](https://cdn.mblog.club/2024/02/18/65d1d422eface.png)


%% README_END %%