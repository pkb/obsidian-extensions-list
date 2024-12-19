---
aliases:
- kkh
author:
- '[[authors/okikae|奈幾乃(uakms)]]'
categories: []
description: Replace words in a string using kkh dictionary.
downloads: 4
mobile: true
number: 2089
stars: 0
title: kkh
type: plugin
updated: '2024-12-12T17:32:07'
url: https://github.com/okikae/obsid-kkh
version: 0.0.4
---

%% README_START %%

# kkh plugin for Obsidian

旧字旧仮名と新字新仮名とを相互に変換するツール kkh を Obsidian に移植したプラグインです。

## 機能

エディタ上で選択された文字列に対して任意の変換を行います。変換の種類は次の 6 種類です。

- 新仮名遣いから旧仮名遣いへ
- 旧仮名遣いから新仮名遣いへ
- 新漢字から旧漢字へ
- 旧漢字から新漢字へ
- 新字新仮名遣いから旧字旧仮名遣いへ
- 旧字旧仮名遣いから新字新仮遣いへ

## 使い方

Obsidian はマルチプラットフォーム・マルチデバイスで利用することができますが、デバイスの種類によって操作方法が若干異なります。

このため、ここでは各デバイスに分けて説明します。なお、動作確認は macOS, iPadOS, iOS でしていますが、Linux, Windows, Android 等も同様な操作になります[^1]。

[^1]: なると思います。Chrome ベースなのでショートカットキーの差異程度ではないかと。

### macOS (Linux, Windows?)

変換方法は 3 つあります。変換対象の文字列を選択してから

1. 左側のリボンに足跡アイコンがありますので、そこから望む変換を選択します。

2. 左側のリボンからコマンドパレットを呼び出し、"kkh" と入力するとコマンド候補が絞られますので、そこから望む変換を選択します。

3. 右上にあるテキストメニュー(…)から望む変換を選択します。

デスクトップ版では 1. の方法が使いやすいと思います。

### iPadOS (Android?)

変換方法は 4 つあります。変換対象の文字列を選択してから

1. 左側のリボンに足跡アイコンがありますので、そこから望む変換を選択します。

2. 左側のリボンからコマンドパレットを呼び出し、"kkh" と入力するとコマンド候補が絞られますので、そこから望む変換を選択します。

3. 右上にあるテキストメニュー(…)から望む変換を選択します。

4. 下側に表示されるツールバーから望む変換を選択します。ただしこれは、ツールバーの設定で kkh の機能を追加した場合です。ツールバーがごちゃごちゃしてしまうので推奨できません。

タブレット版では 3. の方法が使いやすいと思います。

### iOS (Android?)

変換方法は 3 つあります。変換対象の文字列を選択してから

1. 下側のハンバーガーメニュー(三)から kkh メニューを選択し、そこから望む変換を選択します。
キーボードを隠さないとハンバーガーメニューが見えないのでひと手間かかります。

2. 下側のハンバーガーメニュー(三)からコマンドパレットを呼び出し、"kkh" と入力するとコマンド候補が絞られますので、そこから望む変換を選択します。これもひと手間かかります。

3. 右上にあるテキストメニュー(…)から望む変換を選択します。メニューの下部にあるため、スワイプする手間がかかります。

スマートフォン版では 3. の方法が若干使いやすいと思います。しかし、画面が小さく、また画面の切替はストレスに感じるので、スマートフォンでの利用は推奨できません。

## インストール方法

### 手動にて

ページ右側の Releases から Assets 内の "main.js" と "manifest.json" をダウンロードします。

Vault フォルダ以下に ".obsidian/plugins/obsid-kkh" フォルダを作成し、そこに "main.js", "manifest.json" を移動します。

わたしは macOS, iPadOS, iOS で共有するために iCloud を利用しています。このため、Vault フォルダを "$HOME/Library/Mobile Documents/iCloud\~md\~obsidian/Documents
" 以下に置いています。

例えば Vault フォルダを「雑記」とします。このときプラグインは下記のように配置して Obsidian で設定すると利用可能になります。

```
$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/雑記/.obsidian/plugins/obsid-kkh/main.js
$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/雑記/.obsidian/plugins/obsid-kkh/manifest.js
```

Windows では Vault フォルダを "C:\Users\ユーザー名\ドキュメント" 以下に作成することが多い(のかな？)と思いますので、そこにある Vault フォルダ以下にエクスプローラーで ".obsidian/plugins/obsid-kkh" フォルダを作成していって、上記の 2 ファイルをコピーすれば良いと思います(ドットフォルダが不可視になるのかわかりませんけど)。

Obsidian での設定は、"Preference..." -> "Community Plugins" -> "Installed plugins" で有効にすれば完了です。

### 公式サイトのコミュニティープラグインから

「Preferences...」->「Community Plugins」で Browse ボタンを押すとプラグイン一覧が表示されるので、"kkh" を検索します。ただいま申請中ですが、承認されるまで先は長そうです。現時点ではこの方法ではインストールすることはできません。お待ちください。

(コード中に "Obsidian" や "plugin" の文字列が入っているとダメとのことでした。公式？と紛らわしくならないよう、プロジェクト名も "Obsidian-kkh" -> "Obsid-kkh" に変更しました。)

## その他

内包している辞書データは、[kkh](https://github.com/okikae/kkh) による活動の成果を利用しています。辞書が「キモ」なのです。


%% README_END %%