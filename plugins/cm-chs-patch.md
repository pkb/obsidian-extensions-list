---
aliases:
- Word Splitting for Simplified Chinese in Edit Mode and Vim Mode
author:
- '[[authors/aidenlx|AidenLx]]'
categories: []
description: A patch for Obsidian's built-in CodeMirror Editor to support Simplified
  Chinese word splitting
downloads: 46615
mobile: true
number: 145
stars: 205
title: Word Splitting for Simplified Chinese in Edit Mode and Vim Mode
type: plugin
updated: '2024-05-06T21:37:33'
url: https://github.com/aidenlx/cm-chs-patch
version: 1.12.0
---

%% README_START %%

# Word Splitting for Simplified Chinese in Edit Mode and Vim Mode

A patch for Obsidian's built-in CodeMirror Editor to support Simplified Chinese word splitting in Edit Mode and Vim Mode

增加 Obsidian 内置编辑器的(简体)中文分词支持，使得编辑模式的双击可以选中中文，以及在 Vim 模式下可以按中文分词移动光标

Special Thanks to [@fengkx](https://github.com/fengkx) for [jieba-wasm module](https://github.com/fengkx/jieba-wasm)
感谢 [@jiyee](https://github.com/jiyee) 实现的Vim分词支持！

注意：从 v1.8.0 开始，默认分词引擎由结巴分词更换为系统自带分词引擎，结巴分词不再是必备组件，若你需要结合 [omnisearch](https://github.com/scambier/obsidian-omnisearch) 插件使用，或仍需要使用结巴分词提供的更精确的分词结果，以及新词发现、自定义词库功能，请在设置打开选项后，按照弹窗提示进行安装（若系统不提供分词引擎，无论选项是否打开，本插件仍会提示安装结巴分词）

手动安装结巴分词组件：在设置中启用结巴分词后，从[CDN](https://unpkg.com/jieba-wasm@0.0.2/pkg/web/jieba_rs_wasm_bg.wasm)下载得到 `jieba_rs_wasm_bg.wasm` 文件，将 wasm 文件放在 Obsidian 库的 `.obsidian` 或者其它指定的配置文件夹下后重启 Obsidian

## Demo

| Obsidian's Default Word Splitting<br>默认分词 | Patched<br>安装插件后 |
| ------------------ | ----------- |
| ![ob-default-splitting](https://img.aidenlx.top/img/ob-default-splitting.gif)                   | ![ob-patched-splitting](https://img.aidenlx.top/img/ob-patched-splitting.gif)            |

## Compatibility 兼容性

The required API feature is only available for Obsidian v0.15.0+

本插件仅支持 v0.15.0 以上的版本

## Installation 安装

### From Obsidian

1. Open `Settings` > `Third-party plugin`
2. Make sure Safe mode is **off**
3. Click `Browse community plugins`
4. Search for this plugin `Word Splitting for Simplified Chinese in Edit Mode and Vim Mode`
5. Click `Install`
6. Once installed, close the community plugins window and the patch is ready to use.

***

1. 打开`设置`>`第三方插件`
2. 确保安全模式为`关闭`
3. 点击`浏览社区插件`
4. 搜索此插件 `Word Splitting for Simplified Chinese in Edit Mode and Vim Mode`
5. 点击`安装`
6. 安装完成后，关闭安装窗口，插件即可使用

### From GitHub

1. Download the Latest Release from the Releases section of the GitHub Repository
2. Put files to your vault's plugins folder: `<vault>/.obsidian/plugins/cm-chs-patch`
3. Reload Obsidian
4. If prompted about Safe Mode, you can disable safe mode and enable the plugin.
Otherwise head to Settings, third-party plugins, make sure safe mode is off and
enable the plugin from there.

> Note: The `.obsidian` folder may be hidden. On macOS you should be able to press `Command+Shift+Dot` to show the folder in Finder.

***

1. 从 GitHub 仓库的 Releases 下载最新版本
2. 把文件放在对应 Vault 的插件文件夹下：`<vault>/.obsidian/plugins/cm-chs-patch`
3. 重新加载 Obsidian
4. 如果出现有关安全模式的提示，则可以禁用安全模式并启用插件。否则，请转到`设置`→`第三方插件`，确保关闭安全模式，然后从`第三方插件`启用插件

> 注意，`.obsidian` 文件夹为隐藏文件夹，在 macOS 的 Finder 下可以按 `Command+Shift+.` 以显示隐藏文件夹


%% README_END %%