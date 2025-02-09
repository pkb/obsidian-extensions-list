---
aliases:
- Cooklang
author:
- '[[authors/rveciana|Roger Veciana i Rovira]]'
categories: []
description: Display and edit recipes written in the Cooklang format.
downloads: 1861
mobile: true
number: 1494
stars: 8
title: Cooklang
type: plugin
updated: '2024-09-28T14:40:41'
url: https://github.com/rveciana/obsidian-cooklang
version: 0.0.12
---

%% README_START %%

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


# Cooklang

This plugin allows you to edit and view recipes written in the Cooklang format.

![Screenshot](https://raw.githubusercontent.com/rveciana/obsidian-cooklang/main/header.png)

## Installation

- You can find this plugin in the *Community Plugins* section inside the Settings.
- To develop, you can download the code into the *.obsidian/plugins* folder in a vault and run `npm install` and `npm run dev` to see the changes.

## Features

- Multi language: The titles for the sections (i.e. *ingredients*, *cookware* and so on) will be translated into the recipe language or the one configured in the Obsidian settings


## Changelog

- 0.0.10: Choose quantities as fractions or decimals
- 0.0.9: Support webp images, add languages
- 0.0.8: Initial version. Can edit, view, and select the language

## Acknowledgments

- This plugin is obviously inspired by [cooklang-obsidian](https://github.com/cooklang/cooklang-obsidian) by [deathau](https://github.com/deathau). I wanted to learn how to code for Obsidian and add multi-language capabilities to the Cooklang plugin.

- The plugin is using cooklang-ts, which passes all the tests and seems better than the other JavaScript alternatives.


%% README_END %%