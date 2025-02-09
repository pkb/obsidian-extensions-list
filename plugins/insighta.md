---
aliases:
- InsightA
author:
- '[[authors/HongjianTang|Hongjian Tang]]'
categories: []
description: "InsightA can transform extensive articles into concise, atomic notes
  and generate MOC based on note title using LLM. \U0001F680\U0001F4DD"
downloads: 1776
mobile: false
number: 1375
stars: 15
title: InsightA
type: plugin
updated: '2024-11-06T09:47:51'
url: https://github.com/HongjianTang/obsidian-insighta
version: 1.0.14
---

%% README_START %%

# InsightA Obsidian Plugin :bulb: :books:

![GitHub release (latest by date)](https://img.shields.io/github/v/release/HongjianTang/obsidian-insighta?style=for-the-badge)
![GitHub all releases](https://img.shields.io/github/downloads/HongjianTang/obsidian-insighta/total?style=for-the-badge)

## Overview 🔍

InsightA uses AI to transform long articles into concise, atomic notes and generates organized Maps of Content (MOC). Ideal for structuring complex information inspired by the Zettelkasten method. 🚀📝

![napkin-selection (1)](https://github.com/user-attachments/assets/7f4100ed-4db9-4221-8a6b-e6114455461c)

## Features ✨

- **AI-Powered Notes**: Breaks down articles into linked, atomic notes.
- **Automatic MOC**: Creates well-organized Maps of Content for easy navigation.

## Installation ⚙️

1. Open Obsidian and go to `Settings`.
2. Navigate to `Community Plugins` and disable `Safe Mode`.
3. Click `Browse` and search for `InsightA`.
4. Install and enable the plugin.

## Usage 💡

Before using, open setting, select a LLM and setup an API key.

![image](https://github.com/user-attachments/assets/0c44befb-9c8c-410a-b1de-02650d85585e)

### Extract Notes

Open an article for processing. Click the `InsightA` icon in the toolbar or use the command (ctrl+P). The plugin will process the article, creating atomic notes that include links back to the source note and a set of relevant tags for easy organization and reference.

[![Extract Notes](https://raw.githubusercontent.com/HongjianTang/obsidian-insighta/HEAD/assets/use_case_extract_notes.gif)](https://github.com/user-attachments/assets/02c728fd-41c1-4de4-ba97-28ece76442bb)

Customize options such as the number of notes, tags, language, and additional properties (e.g., year, location).

![image](https://github.com/user-attachments/assets/bcf6c08b-3805-43be-8d9f-7537c2845cbc)

### Create MOC

Open a new note file, use Create MOC command. The plugin will embed all notes in specific folder and note title, then find all related notes to the note title, group found notes using LLM and show them.
You can modify similar threshold in setting.

https://github.com/user-attachments/assets/c6480f4c-29a1-4d47-b3d5-ef2dbaad72f1

PS: Please note that processing times can vary depending on the length of the article. Typically, it takes about 30 seconds or longer for extensive articles.

## Rodamap :hammer_and_wrench:

- [x] Model: Select different LLM model
- [ ] Model: add support to local LLM
- [x] Note Extraction: set number of generated notes
- [x] Note Extraction: set number of tags
- [x] Note Extraction: control the language of generated notes, with options for source or specific language input.
- [x] Note Extraction: user can ask for additional properties like year, location, author
- [ ] Note Extraction: let LLM decide how many notes should craete
- [x] MOC: Modify similar threshold
- [ ] New feature: extract journals into well-organized tables

## Contributing :raised_hands:

Your contributions are what make the community amazing! If you have ideas, issues, or want to contribute, feel free to check the [issues page](https://github.com/HongjianTang/obsidian-insighta/issues) or submit a pull request.

## License :page_facing_up:

This project is under the [MIT License](LICENSE).

## Acknowledgements :tada:

- A huge thank you to the Obsidian community for their continuous support and insightful feedback.
- This tool is inspired by the Zettelkasten method, renowned for its efficient approach to knowledge management and organization.
- Special credits to [Liam's Periodic Notes Plugin](https://github.com/liamcain/obsidian-periodic-notes) and [HyeonseoNam's Auto Classifier](https://github.com/HyeonseoNam/auto-classifier/). Portions of their code were instrumental in the development of InsightA.

---

Crafted with :heart: by Hongjian Tang for the Obsidian community.


%% README_END %%