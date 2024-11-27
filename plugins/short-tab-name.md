---
aliases:
- short tab name
author:
- Shumpei-Tanaka
author_page: https://github.com/Shumpei-Tanaka/
categories: []
description: set tab name to short for uid user
downloads: 2073
funding_page:
  Buy Me a Coffee: https://www.buymeacoffee.com/s6tanaka/
  Paypal.me: https://www.paypal.me/s6tanaka/
mobile: true
number: 1269
title: short tab name
type: plugin
updated: '2023-11-23T19:36:18'
url: https://github.com/shumpei-tanaka/obsidian-short-tab-name
version: 1.0.0
---

%% README_START %%

# Short Tab Name

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/Shumpei-Tanaka/obsidian-short-tab-name?style=flat-squere&sort=semver)![GitHub License](https://img.shields.io/github/license/Shumpei-Tanaka/obsidian-short-tab-name?flat-squere)

[![Paypal](https://img.shields.io/badge/paypal.me-s6tanaka-white?style=flat-squere&logo=paypal)](https://paypal.me/s6tanaka)[![Buy me a coffee](https://img.shields.io/badge/buy_me_a_coffee-s6tanaka-white?style=flat-squere&logo=buymeacoffee&logocolor=#FFDD00)](https://www.buymeacoffee.com/s6tanaka)

This plugin hides filename header such as zettel uid from tab name.

You can setting hide range with regexp.


## Demo

### Images
![before-image](https://raw.githubusercontent.com/shumpei-tanaka/obsidian-short-tab-name/HEAD/docs/assets/20231121133154-obsidianのタブの表示を短くする--1.png)

![after-image](https://raw.githubusercontent.com/shumpei-tanaka/obsidian-short-tab-name/HEAD/docs/assets/20231121133154-obsidianのタブの表示を短くする--2.png)

### As character

|before|after|
|-|-|
|202311232124-a | a |
|202311232125-b | b |
|202311232126-c | c |

## Installation

### With Obsidian
- Open "Setting"
- Open "Community Plugins"
- Open "Browse"
- Search "short tab name"
- Push "Install"
- Push "Enable"
- Done :D

### Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/short-tab-name/`.


## How to use
just install this.

If your file-header is made from not only digits, 
you can try to make regexp pattern in setting.

### Examle

|ignore header regexp|sample file name| result tab name|
|-|-|-|
|(default)`[0-9]+-`|2222-aaaa|aaaa|
|`[0-9]+_`|2222_aabb|aabb|
|`.+-`|5a5a-name|name|

## License
The source code is licensed MIT.
See LICENSE.

## Say Thank you

If Short-Tab-Name makes your work more convinience ,
then please give me a coffee :D

links are below.

[https://www.buymeacoffee.com/s6tanaka](https://www.buymeacoffee.com/s6tanaka)

[https://www.paypal.me/s6tanaka/](https://www.paypal.me/s6tanaka/)



<a href="https://www.buymeacoffee.com/s6tanaka" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/lato-red.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a><a href="https://www.paypal.me/s6tanaka/">
  <img alt="Support via PayPal" src="https://cdn.rawgit.com/twolfson/paypal-github-button/1.0.0/dist/button.svg" style="height: 60px  !important;object-fit: cover;border-radius:10px;"/>
</a>





%% README_END %%