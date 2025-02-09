---
aliases:
- Cardify
author:
- '[[authors/joshuakto|joshuakto]]'
categories: []
description: This is a plugin to cardify markdown contents into subsequent markdown
  files.
downloads: 4439
mobile: true
number: 1171
stars: 20
title: Cardify
type: plugin
updated: '2024-02-27T09:16:43'
url: https://github.com/joshuakto/obsidian-cardify
version: 1.0.4
---

%% README_START %%

# Obsidian Cardify Plugin ![copy-plus](https://github.com/joshuakto/obsidian-cardify/assets/34743132/4ecabc7b-2498-4128-94a3-a3e5b1ddd82d)
![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22cardify%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

Separates contents in a markdown, assign internal links to each separated content, and generate subsequent linked markdowns. Making it easy to drag and drop individual linked markdown files onto canvas.

## Demo
### Desktop (Mac)
https://github.com/joshuakto/obsidian-cardify/assets/34743132/d4291aab-56ed-4fcb-97d4-be7aa64f44da

### iPadOS
Adding cardify generate card command to toolbar and using added shortcut.


https://github.com/joshuakto/obsidian-cardify/assets/34743132/7a89dc28-dfe2-4ed3-a328-c2f91f6f1dd7


### Android
Using ribbon bar icon to trigger generation of cards on android app.

https://github.com/joshuakto/obsidian-cardify/assets/34743132/9fe9f0c8-64a8-4a7d-85de-3217b2c09d5c



Cardify has these basic functionalities
- Selection of separator (currently only supports two new lines or ---).
- Detect whether an internal link exists in the content, if not assign automatically.
- Create a markdown for each separated content (while preserving the frontmatter).
	- Give an index for the created page based on the position of the separated contents.
	- Extract comment from content to use as title for the created page	
- Create a folder to store the created markdown.
- Generate and insert an internal link to replace the current selection. 

Planned functionalities
- Switch for toggling function to automatically assign internal links.
- List of regex arranged in order of priority to use as title of the created markdown.
- Allow users to view instruction for using the plugin in a popup modal.
- Allow users to see the preview for the cards to be generated from the active file.

## How to use
1. Upon installation, ![an icon with overlapping squares(copy-plus)](https://github.com/joshuakto/obsidian-cardify/assets/34743132/a1c0a848-f8da-4f67-a7a7-8458f0f9320e) will be visible on the ribbon.
2. Navigate to the markdown file you want to Cardify.
3. Clicking ![the icon with overlapping squares(copy-plus)](https://github.com/joshuakto/obsidian-cardify/assets/34743132/a1c0a848-f8da-4f67-a7a7-8458f0f9320e) will generate a folder named the same as the active file and store created markdowns in it.
**Note:** Currently, the plugin will change the content of the markdown when inserting internal link. If the spacing of the document is important, do not use this plugin for now. In the future there will be an option to choose whether you want to modify content of existing files.

[!["Buy Me A Coffee"](https://cdn.buymeacoffee.com/buttons/v2/default-blue.png)](https://www.buymeacoffee.com/joshuakto)


## Acknowledgements
This plugin is built using [Obsidian Sample Plugin](https://github.com/obsidianmd/obsidian-sample-plugin) as a template.

<!--- 
Releasing new releases

- Update your `manifest.json` with your new version number, such as `1.0.1`, and the minimum Obsidian version required for your latest release.
- Update your `versions.json` file with `"new-plugin-version": "minimum-obsidian-version"` so older versions of Obsidian can download an older version of your plugin that's compatible.
- Create new GitHub release using your new version number as the "Tag version". Use the exact version number, don't include a prefix `v`. See here for an example: https://github.com/obsidianmd/obsidian-sample-plugin/releases
- Upload the files `manifest.json`, `main.js`, `styles.css` as binary attachments. Note: The manifest.json file must be in two places, first the root path of your repository and also in the release.
- Publish the release.

> You can simplify the version bump process by running `npm version patch`, `npm version minor` or `npm version major` after updating `minAppVersion` manually in `manifest.json`.
> The command will bump version in `manifest.json` and `package.json`, and add the entry for the new version to `versions.json`

## API Documentation

See https://github.com/obsidianmd/obsidian-api
--->


%% README_END %%