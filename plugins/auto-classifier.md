---
aliases:
- Auto Classifier
author:
- '[[HyeonseoNam|Hyeonseo Nam]]'
categories:
- '[[categories/AI assistance|AI assistance]]'
- '[[categories/Tag Management|Tag Management]]'
description: This plugin automatically classify tag from your notes using ChatGPT
  API. It analyze your note (It can be title, frontmatter, content or selected area)
  and automatically insert tag where you set.
downloads: 10057
mobile: true
number: 883
title: Auto Classifier
type: plugin
updated: '2024-03-05T19:33:01'
url: https://github.com/HyeonseoNam/auto-classifier
version: 1.1.2
---

%% README_START %%

# Auto Classifier
![GitHub release (latest by date)](https://img.shields.io/github/v/release/HyeonseoNam/auto-classifier?style=for-the-badge) ![GitHub all releases](https://img.shields.io/github/downloads/HyeonseoNam/auto-classifier/total?style=for-the-badge)

`Auto Classifier` is an [Obsidian](https://obsidian.md/) plugin that helps you automatically classify tag from your notes using the ChatGPT API. The plugin can analyze your note (It can be title, frontmatter, content or selected area) and suggest relevant tag based on the input with tags in your valut. This can be used for various and specific purposes, for example, DDC classification for books, keyword recommendation, research paper categorization and so on. Save you time and improving your note organization.


## How to use

- Enter your ChatGPT API key in setting tab. You can create it at [OpenAI](https://platform.openai.com/account/api-keys). Check api setting by the `Test API call` button.

- This plugin consists of **4 Input Commands** that you can run. By simply running these commands, it will automatically classify your note.
  - `Classify tag from Note title`
  - `Classify tag from Note FrontMatter`
  - `Classify tag from Note Content` 
  - `Classify tag from Selected Area`

- Toggle and Choose from different **Tag Reference** types. ChatGPT will select the appropriate tag from these references.
  - `All tags` (default)
  - `Filtered Tags` with regular expression
  - `Manual Tags` that defined manually

- Specify the **Output Type** from the response of ChatGPT.
  - `#Tag`: at your `Current Cursor` or `Top of Content`.
  - `[[WikiLink]]`: at your `Current Cursor` or `Top of Content`.
  - `FrontMatter`: with `key`
  - `Title Alternative`: at the end of note's title

- (Optional) Add `Prefix` or `Suffix` for the output format.

- (Optional) Your can use your custom request for the ChatGPT API.
  - `Custom Prompt Template`
    - ChatGPT will respond based on this prompt. The input coming from your Command will be replaced by `{{input}}`, and the reference tags you set will be placed in `{{reference}}`.
  - `Custom Chat Role`
    - You can guide ChatGPT's behabior by setting this system role


## Example
### Use Case #1: **Selected area** &rightarrow; **Current cursor**
![](https://raw.githubusercontent.com/HyeonseoNam/auto-classifier/HEAD/img/selected_to_cursor.gif)

### Use Case #2: **Content** &rightarrow; **FrontMatter**
![](https://raw.githubusercontent.com/HyeonseoNam/auto-classifier/HEAD/img/content_to_frontmatter.gif)

### Use Case #3: **FrontMatter** &rightarrow; **Title**
![](https://raw.githubusercontent.com/HyeonseoNam/auto-classifier/HEAD/img/frontmatter_to_totle.gif)

### Use Case #4: **Title** &rightarrow; **FrontMatter**
![](https://raw.githubusercontent.com/HyeonseoNam/auto-classifier/HEAD/img/title_to_frontmatter.gif)


### DDC number classification
If you want use this plugin as DDC number classification, edit `Custom Prompt Template` like this:
```
Please use Dewey Decimal Classification (DDC) to classify this content:
"""
{{input}}
"""
Answer format is JSON {reliability:0~1, output:"[ddc_number]:category"}. 
Even if you are not sure, qualify the reliability and select one. 
Convert the blank spaces to "_" in the output.
```

### LCSH classification
LCSH classification can be similar: 
```
Please use Library of Congress Subject Headings (LCSH) to classify this content:
"""
{{input}}
"""
Answer format is JSON {reliability:0~1, output:"[First LCSH term]--[Second LCSH term]--[Third LCSH term]"}. 
Even if you are not sure, qualify the reliability and select one. 
Convert the blank spaces to "_" in the output.
```

## Installation

- Search `Auto Classifier` in the Community plugin tab of the Obsidian settings.
- Also, you can manually download the latest release from this repository [GitHub releases](https://github.com/hyeonseonam/auto-tagger/releases) and extrat the ZIP file to your Obsidian plugins folder.


## Support

If you encounter any issues while using this plugin or have any suggestions for improvement, please feel free to submit an issue on the GitHub repository. Pull requests are also welcome.

## Author

Hyeonseo Nam
## License

MIT License

%% README_END %%