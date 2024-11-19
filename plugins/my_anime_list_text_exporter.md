---
aliases:
- my anime list text exporter
author:
- XmoncocoX
author_page: https://www.github.com/Xmoncoco
categories: []
description: add anime data for your notes
downloads: 1031
funding_page: https://ko-fi.com/xmoncocox
mobile: true
number: 1605
title: my anime list text exporter
type: plugin
updated: '2024-07-31T03:59:44'
url: https://github.com/Xmoncoco/my_anime_list_text_exporter
version: 1.2.0
---

%% README_START %%

# My Anime List to Obsidian
This plugin creates a page in Obsidian from your anime list.

## road map

- [x] have a link to jikan
- [x] create a page for each anime
- [ ] add settings to the plugin
    - [x] add a path to the anime list
    - [ ] chose tags to add
    - [ ] create a custom template
    - [ ] check list setting 
- [x] add tags to each page with the data
- [x] add a synosis to each page
- [ ] add a link to the anime page
- [ ] ~~add character to the page~~ (change because of another idéa)
- [ ] add an character folder
	- [ ] create a folder with the name of the anime
 	- [ ] create a page for the character
  	- [ ] add link to the page
  	- [ ] add a modal to select the character that will be added 
- [ ] add a way to put animes in a check list 

## build

```bash
git clone https://github.com/Xmoncoco/my_anime_list_to_obsidian.git
cd my_anime_list_to_obsidian
npm install
npm run dev
```
## Installation
### From Obsidian community plugin page (Recommended)
1. Open Obsidian
2. try to copy and paste on your internet browser this [link](obsidian://show-plugin?id=my_anime_list_text_exporter)
3. Go to Settings > Third-party plugin
4. Click Browse community plugins
5. Search for "My Anime List text exporter"

### From GitHub code.
1. Download the latest release from the [GitHub releases page]
2. Extract the zip archive in `<vault>/.obsidian/plugins/` so that the `main.js` file is located in `<vault>/.obsidian/plugins/my_anime_list_to_obsidian/`
3. remove all the files exept the 'main.js' and the 'manifest.json' files
4. go to obsidian
5. go to settings > plugins
6. activate the plugin

## Usage

1. open the commad palette (ctrl + p or cmd + p)
2. search for Create note for anime
3. enter the name of the anime
4. click sumbit.
and that's it.

## Contributing

Contributions are welcome! If you have a feature request, bug report, or want to improve the plugin, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.


%% README_END %%