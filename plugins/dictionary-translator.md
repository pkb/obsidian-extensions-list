---
aliases:
- Dictionary translator
author:
- '[[grover572|Grover]]'
categories: []
description: 它可以帮助你翻译单词或句子，听新单词或句子的录音，甚至录下自己的发音，以内部链接的形式保存到你的笔记中。
downloads: 1363
mobile: false
number: 1575
title: Dictionary translator
type: plugin
updated: '2024-10-01T15:28:46'
url: https://github.com/grover572/obsidian-Dictionary-translator
version: 1.0.4
---

%% README_START %%

# Obsidian-Dictionary-translator

[English Doc](doc/README(EN).md)

## 我能帮你做什么？

这是一个简单的插件，帮助你在完成你的知识库的同时可以快速的翻译陌生的单词或句子，并将其生成单词卡插入笔记本中。 此外，你还可以将翻译引擎的发音文件保存到你的vault，如果你想，你也可以录制自己的发音。

## 如何使用

1. 配置翻译引擎
  ![setting.png](https://raw.githubusercontent.com/grover572/obsidian-Dictionary-translator/HEAD/doc/setting.png)
2. 右键划词翻译 (你可以录制自己的发音)
  ![translator.gif](https://raw.githubusercontent.com/grover572/obsidian-Dictionary-translator/HEAD/doc/translator.gif)


## 翻译引擎支持

- [x] 有道翻译
  > **2024-04-23** <br/>
  > 由于[有道文本翻译接口返回内容更新](https://ai.youdao.com/gw-notice.s?page=1n0),依赖的`词典`相关数据缺失,导致插件体验不完整,只能展示基础的`释义`、`链接`、`基础发音`等。
- [x] 百度智能云翻译
- [ ] 谷歌翻译
- [ ] 微软翻译

#### 自定义翻译引擎

1. 自定义策略类: 实现`TranslationStrategy`抽象类
2. 在`TranslateEngines`中添加自定义的策略类
	1. 请求自定义的翻译引擎
	2. 解析响应结果，封装为`TranslateResponse`类型的响应
3. 为你的翻译引擎在`setting.ts`中添加独特的配置项




%% README_END %%