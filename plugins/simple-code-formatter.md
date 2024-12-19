---
aliases:
- Simple Code Formatter
author:
- '[[authors/wiop93256|SY]]'
categories:
- '[[categories/Note editing and formatting|Note editing and formatting]]'
description: Format the code block where the cursor is.
downloads: 383
mobile: true
number: 1974
stars: 9
title: Simple Code Formatter
type: plugin
updated: '2024-12-13T12:07:37'
url: https://github.com/wiop93256/Simple-Code-Formmater
version: 1.2.2
---

%% README_START %%

# Simple Code Formatter

Format the block of code where the cursor is located

# Direction for use

- Place the cursor in the block of code you want to format.
- Search "Simple Code Formatter" in `Command Palette`.
  ![alt text](https://raw.githubusercontent.com/wiop93256/Simple-Code-Formmater/HEAD/README_Attachments/image.png)
- Execute it.

# Example

![alt text](https://raw.githubusercontent.com/wiop93256/Simple-Code-Formmater/HEAD/README_Attachments/recording.gif)

# Supported Languges

| Language   | Formatter(JS Module) |
| ---------- | -------------------- |
| C(C++)     | js-beautify          |
| csharp     | js-beautify          |
| java       | prettier             |
| xml        | xml-formatter        |
| sql        | sqlformatter         |
| html       | prettier             |
| vue        | prettier             |
| css        | prettier             |
| javascript | prettier             |
| typescript | prettier             |
| json5      | prettier             |
| scss       | prettier             |
| less       | prettier             |
| graphql    | prettier             |
| markdown   | prettier             |
| yaml       | prettier             |

# Questions

## 1. Markdown syntax of the code block

Make sure the Markdown syntax of the code block you want to format is correct.

## 2. Code syntax in a code block

The plugin will check your code syntax which use `prettier` of `Formatter(JS Module)`.

### Example of Code syntax

![alt text](https://raw.githubusercontent.com/wiop93256/Simple-Code-Formmater/HEAD/README_Attachments/image-1.png)

## 3. If your code doesn't conform to syntax, but you still want to beautify it?

You should bypass the syntax check. You can use a language powered by `js-beautiby` instead of the current language.

After formatting, change it back.


%% README_END %%