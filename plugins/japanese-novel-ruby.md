---
aliases:
- Japanese Novel Ruby
author:
- '[[authors/k-quels|quels <@k-quels>]]'
categories: []
description: Treat ruby(Furigana) ​​marks commonly used in Japanese novels.
downloads: 275
mobile: true
number: 1954
stars: 2
title: Japanese Novel Ruby
type: plugin
updated: '2024-12-29T06:31:43'
url: https://github.com/k-quels/japanese-novel-ruby
version: 1.1.1
---

%% README_START %%

# Japanese Novel Ruby Plugin for Obsidian

English | [日本語](README_ja.md)

Obsidian plugin for display & insert ruby(Furigana) ​​marks commonly used in Japanese novels.

The ruby syntax of this plugin is a format widely used by Japanese novel web sites, such as 「青空文庫」「小説家になろう」 and others.

Format example:

| Input Text   | Rendered Ruby                   |
| ------------ | ------------------------------- |
| 長い｜文章《ぶんしょう》 | 長い<ruby>文章<rt>ぶんしょう</rt></ruby> |
| 長い文章《ぶんしょう》  | 長い<ruby>文章<rt>ぶんしょう</rt></ruby> |
| ｜傍《・》｜点《・》  | <ruby>傍<rt>・</rt></ruby><ruby>点<rt>・</rt></ruby> |


## What you can do with this plugin


<img width="500" alt="JapaneseNovelRuby_sample" src="https://github.com/user-attachments/assets/8e93c4e2-fef5-489e-84a8-e523f7e8f25d">



- Edit documents while previewing ruby
  - Enable / disable ruby preview in source mode via plugin settings.
- The user interface is available in English and Japanese.


  
* Commands:
    * **novel-ruby-insert** : Show a dialog to insert ruby. Set selected text as body.
    * **novel-ruby-insert-dot** : Insert emphasis dots in selected text.
    * **novel-ruby-remove** : Remove all ruby marks from selected text.


## See Also

This plugin doesn't support markdown ruby format.

If you want to use it, consider to use [obsidian-markdown-furigana](https://github.com/steven-kraft/obsidian-markdown-furigana) plugin.

## Acknowledgments

Thanks to @steven-kraft. Part of the Ruby parsing code was inspired by [obsidian-markdown-furigana](https://github.com/steven-kraft/obsidian-markdown-furigana) plugin.

Thanks to @phibr0. The localization code is based on the [obsidian-commander](https://github.com/phibr0/obsidian-commander) plugin.

## Support

If you like this plugin, please consider supporting my work. Thank you!

<!-- Buy Me a Coffee embedded button -->
<a href="https://www.buymeacoffee.com/quels"><img src="https://cdn.buymeacoffee.com/buttons/v2/arial-orange.png" height="50px"></a>


%% README_END %%