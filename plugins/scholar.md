---
aliases:
- Scholar
author:
- '[[lolipopshock|Shannon Shen]]'
categories: []
description: Streamline Research Workflow in Obsidian
downloads: 5070
mobile: true
number: 1239
title: Scholar
type: plugin
updated: '2024-04-21T01:18:57'
url: https://github.com/lolipopshock/obsidian-scholar
version: 1.3.3
---

%% README_START %%

# Obsidian Scholar

## Usage  

### Key Features

| Stage | Function | 
| --- | --- |
| | 📚 Streamline Library Management | 
| **Add Paper from External Link** | Upon seeing a paper on the web (Slack, Twitter, etc.), you can add the paper to your local library: running this tool can download the paper PDF, and create the corresponding paper note with paper metadata. <br/> ![01-add-paper.gif](https://raw.githubusercontent.com/lolipopshock/obsidian-scholar/HEAD/.github/demo/01-add-paper.gif) |
| **Search and Retrieval** | You can quickly search and retrieve the papers in your library, as well as optionally query and find papers from SemanticScholar directly if they are not in your library. <br/> ![02-search-paper.gif](https://raw.githubusercontent.com/lolipopshock/obsidian-scholar/HEAD/.github/demo/02-search-paper.gif) |
| | ✨ Enhance Paper Reading | 
| **Check Paper Reference** |  Obsidian Scholar allows you checking the details of the referred papers without leaving the tool. <br/> ![03-search-paper.gif](https://raw.githubusercontent.com/lolipopshock/obsidian-scholar/HEAD/.github/demo/03-check-paper-reference.gif) |
| **Copy Paper BibTex** | ![04-copy-bibtex.gif](https://raw.githubusercontent.com/lolipopshock/obsidian-scholar/HEAD/.github/demo/04-copy-bibtex.gif) |

## Installation 

### Install from Obsidian Plugin Library 

This plugin is released on the Obsidian Plugin Library. You can install it directly from the Obsidian app [by searching `Scholar` in the community plugins](https://obsidian.md/plugins?search=scholar). 

### Manual Installation 

1. Open the `.obsidian/plugins` folder in your vault
2. Create a folder called `scholar` 
3. Download the three files `manifest.json`, `styles.css`, and `main.js` from the [latest release](https://github.com/lolipopshock/obsidian-scholar/releases/latest), and put the files in the `.obsidian/plugins/scholar` folder you just created. 
4. Open Obsidian and in `settings > community plugins`, find `Scholar` and enable the plugin. Be sure to change the `Scholar` settings properly before use. 

## Documentation

### Settings 

![Settings](https://raw.githubusercontent.com/lolipopshock/obsidian-scholar/HEAD/.github/demo/settings.png)

- **Adding an SemanticScholar API Key**
  Sometimes you might experience rate limiting when querying papers from SemanticScholar. To avoid this, you can add your own SemanticScholar API key in the settings. You can obtain the API Key [here](https://www.semanticscholar.org/product/api#api-key).

## Motivation and Acknowledgement 

The goal of *Obsidian Scholar* is to create a smooth experience that spans from paper reading, note taking, and reflection and synthesis. 
The construction is based on two powerful ideas. 
- **[Annotated Bibliography](https://owl.purdue.edu/owl/general_writing/common_writing_assignments/annotated_bibliographies/annotated_bibliography_samples.html)** that takes short notes for papers and summarizes the key points in your personal bibliography.
- **[Zettlekasten](https://zettelkasten.de/)** note taking system that aims to take atomic and short notes and link them together. 

In *Obsidian Scholar*, we treat each paper as an individual note---we make it painless to ingest the paper PDF and create the note file---and the Obsidian app makes it easy to link paper notes and helps you to reflect and synthesize the knowledge. 

The development of the tools are inspired by many predecessors that are implemented in EMACS. 
- [citar](https://github.com/emacs-citar/citar): A reference manager work in EMACS. 
- [elfeed](https://github.com/skeeto/elfeed): A RSS reader in EMACS.
- [elfeed-score](https://github.com/sp1ff/elfeed-score): A RSS reader with scoring function in EMACS.

Also thanks the following people for their excellent blogposts and tutorials illustrating their paper reading workflow:
- [Managing a research workflow (bibliographies, note-taking, and arXiv)](https://emacsconf.org/2021/talks/research/) by [Ahmed Khaled](https://www.akhaled.org)
- [Managing ArXiv RSS Feeds in Emacs](https://cundy.me/post/elfeed/) by [Chris Cundy](https://cundy.me)

Some of the code is based on a previous project called [paper-note-filer](https://github.com/chauff/paper-note-filler) by [Claudia Hauff](https://chauff.github.io). 

%% README_END %%