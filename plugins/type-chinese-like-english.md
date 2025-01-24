---
aliases:
- Type Chinese Like English
author:
- '[[authors/Hwenyi|Hwenyi]]'
categories: []
description: Convert pinyin to Chinese characters and LaTeX
downloads: 18
mobile: false
number: 2128
stars: 0
title: Type Chinese Like English
type: plugin
updated: '2025-01-13T13:54:24'
url: https://github.com/Hwenyi/obsidian-type-chinese-like-english
version: 1.0.3
---

%% README_START %%

# Type Chinese Like English

当要同时输入中文和 Mathjax/LaTeX 数学公式时，有两个烦人的问题

1. 输入法频繁在中英文中进行切换，如果你习惯于使用vim模式 ，这一问题将更加的烦恼
2. 如果你像我一样是使用全拼的中文输入法，频繁的进入 IME 选词将会干扰流畅的写作思路

Type Chinese Like English 允许您无需切换输入法，在英文模式下，直接输入拼音，将拼音输入转换为汉字和数学公式。

该插件利用了 AI 大语言模型，提供准确且快速的转换，直接在您的 Obsidian 编辑器中完成，方便于不想掌握繁琐 LaTeX 语法的用户、被输入法切换困扰的用户，快速无干扰地输入数学公式

# 功能

- 使用单个命令将当前行选定文本转换为对应的文字语句
- 将拼音形式下，用自然语言描述的数学公式直接转换为mathjax
- 英语和拼音混合可以混合输入，英语单词、英语语法加拼音同样有良好的转换效果
- 可自定义的 API 和 模型选择

# 要求

有效的 AI API 密钥，推荐使用硅基流动平台的免费国产模型，或者 Groq 平台的免费开源 llama，后续将会添加对于 Google Gemini 模型的支持

打开 Obsidian 并进入设置

导航到社区插件并禁用安全模式

点击浏览并搜索 "Type Chinese Like English"

安装插件并启用它

或者，您可以手动安装插件：

从 GitHub 仓库下载最新版本

将压缩文件解压到您的 Obsidian 笔记库的 .obsidian/plugins/ 目录中

重新加载 Obsidian

进入设置 > 社区插件并启用 "Type Chinese Like English"

# 使用方法

光标停留在当前用拼音输入的行中，即您要转换为汉字和数学公式的文本

命令面板（Ctrl/Cmd + P）并搜索 "转换为汉字和mathjax" 设置快捷键后，使用快捷键实现调用

插件将把您当前行的拼音转换为汉字和数学公式，并用生成的新内容完成替换

# 配置

要配置 Type Chinese Like English 插件：

进入设置 > 社区插件

在列表中找到 "Type Chinese Like English" 并点击齿轮图标

在设置选项卡中，您可以：

设置用于转换的 API 模型（默认是 "Qwen/Qwen2.5-7B-Instruct"）

设置您的 BaseURL 源头

选择转换是否携带笔记的上下文以换取可能更好的转换效果

# 故障排除

如果您遇到任何问题：

确保您有有效的 API 密钥

检查插件设置中指定的 API 地址是否正确

验证插件设置中指定的模型是否可用

如果看到错误信息，它们将提供有关问题的详细信息。常见问题包括：

与 API 的连接问题

模型返回的无效响应

解析错误

# 贡献

欢迎贡献！请随时提交拉取请求。

# 许可证

此插件根据 MIT 许可证授权。有关详细信息，请参阅 LICENSE 文件。

# 支持

如果您在使用插件时遇到问题，请在 GitHub 仓库中打开一个 issue。

希望您在 Obsidian 中使用 Type Chinese Like English 插件时能有愉快的体验。祝您笔记愉快！


%% README_END %%