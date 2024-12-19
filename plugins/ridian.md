---
aliases:
- Ridian
author:
- '[[authors/MichelNivard|Michel Nivard]]'
categories: []
description: Execute R code blocks and display outputs and plots & render documents
  with Quarto within Obsidian.
downloads: 227
mobile: false
number: 2029
stars: 71
title: Ridian
type: plugin
updated: '2024-12-04T14:27:52'
url: https://github.com/MichelNivard/Ridian
version: 0.1.2
---

%% README_START %%





## This is Ridian, _**R**_ in Obs _**idian**_

literal programming with R notebooks, and Quarto rendering from within Obsidian:

![image](https://github.com/user-attachments/assets/bf0c2809-e231-40d9-a047-e28c9d7a12c2)

**Check out he website:**


[Up to date info and install guide on the Ridian website](https://michelnivard.github.io/Ridian/)

**What this is:**

- A way to run R code in Obsidian
- Full Quarto compliant code chunk processing (allows for seamless transition to other editors)
- Parse a note and make it Quarto compliant, then render with Quarto
  
- A way to keep notes on Coding/Statistics with enbedded working example
- A way to use Obsidians amazingsearch and links to link code snippets
- A way to use R code snippets to add plots/widgets to your notes

**What this won't be:**

- An Rstudio replacement
- an positro replacement

- It wont cover other programming languages (5% chance of python), here is an excelent option for that: [execute code plugin](https://github.com/twibiral/obsidian-execute-code)

> [!IMPORTANT]
> In the Ridian settings provide the path to your R/pandoc/quarto executables, The R executable can for example be at Mac: /usr/local/bin/R Windows: C:\Program Files (x86)\R\R-4.4.1\bin\R.exe
> 
> The plugin will try to guess the R install (and probably fail)


## Demo video:


https://github.com/user-attachments/assets/07f4a935-b53a-429a-96e4-d6f21f3a483a


## Demo render with Quarto



https://github.com/user-attachments/assets/334f7af5-0e71-4b9f-9ac8-672a734c91d8


## Disclosures and Issues:



> [!NOTE]
>
> Seculity Disclosures:
> 
> **Calls on External Executables:** This plugin Executes code in R, an external intepreter, code execution comes with risk, you should at altimes know whether the code is save, don't execute untrusted code. 
> **File Access:** The plugin accesses temporary directories to store plots and widgets, which are then copied the Obsidian vault under the plots/ and widgets/ folders.


> [!NOTE]
> Known Issues/To-Do:
> 1. uses absolute paths for htmlwidgets
> 2. Every note spins up an R process, if you do this for many notes you'll overwhlm memory
> 3. Only confirmed to work on MacOS on my mackbook & on Win 11's (on my macbook)
> 4. No tests and other development necessities implemented
> 5. No Contribution guilines (but help wanted!)



## **📥 Ridian: Manual Installation Guide for Obsidian**

Here's a step-by-step guide to installing your Obsidian plugin, **Ridian**, using the BRAT (Beta Reviewers Auto-update Tool) plugin. This guide assumes you have Obsidian and BRAT already installed.


R package Dependecies: In R/Rstudio Install: `languageserver`, `evaluate`, `jsonlite` & `htmlwidgets` packages.


In R/Rstudio Install:

```r
install.packages(evaluate)
install.packages(jsonlite)
install.packages(htmlwidgets)
install.packages(languageserver)
```

In the **Ridian** settings provide the path to your R installation, which can for example be:
   Mac: /usr/local/bin/R
   Windows: C:\Program Files (x86)\R\R-4.4.1\bin\R.exe

After you set the path Ridian will adjust it for internal use (it might look different if you revisit the plugin.

Install pandoc (https://pandoc.org) and point **Ridian** to your pandoc install if you want to use **htmlwidgets** in R.

---

And that’s it! You now have **Ridian** installed and ready to use in Obsidian via BRAT.


%% README_END %%