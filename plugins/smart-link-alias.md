---
aliases:
- Smart Link Alias
author:
- '[[authors/vpcano|Victor Perez-Cano]]'
categories: []
description: Enhance your internal links management with dynamic alias customization.
  Display short, full, or combined titles for your notes effortlessly.
downloads: 99
mobile: true
number: 2099
stars: 0
title: Smart Link Alias
type: plugin
updated: '2024-12-26T19:09:10'
url: https://github.com/vpcano/obsidian-smart-link-alias
version: 1.0.0
---

%% README_START %%

# SmartLinkAlias

**SmartLinkAlias** is an Obsidian plugin that enhances your internal link management by allowing you to dynamically control how note titles appear in links. Whether you're working with acronyms, abbreviations, or custom aliases, this plugin provides you with powerful options to display your links exactly how you want.

![SmartLinkAlias in action](https://raw.githubusercontent.com/vpcano/obsidian-smart-link-alias/HEAD/img/demo.gif)

## Usage

1. Open a note where you'd like to define custom titles.
2. Add the following YAML properties at the top of your note:

   ```yaml
   ---
   full-title: Sample Note
   short-title: SN
   ---
   ```

3. When creating a link to this note from another note, use the alias section to specify the display mode:

   - `[[Sample Note|short]]` → Displays: `SN`
   - `[[Sample Note|full]]` → Displays: `Sample Note`
   - `[[Sample Note|long]]` → Displays: `SN (Sample Note)`

## Roadmap

- [x] Base functionality in read mode
- [x] Base functionality in edit mode
- [ ] Customize display format via plugin settings
- [ ] Add a tooltip when hovering a shortened link
- [ ] Other ways to select the display mode ??

## Contributing

If you encounter any issues or have feature requests, please visit the [GitHub Repository](https://github.com/vpcano/obsidian-smart-link-alias) and feel free to open an issue or submit a pull request.

## License

This plugin is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Thank you for using **SmartLinkAlias**! If you find it helpful, don't forget to leave a review in the Obsidian Community Plugins list!



%% README_END %%