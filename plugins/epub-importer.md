---
aliases:
- Epub Importer
author:
- '[[authors/aoout|aoout]]'
categories:
- '[[categories/Import|Import]]'
- '[[categories/Other formats|Other formats]]'
description: Import EPUB files as Markdown.
downloads: 16085
mobile: false
number: 1261
stars: 150
title: Epub Importer
type: plugin
updated: '2025-01-13T08:13:15'
url: https://github.com/aoout/obsidian-epub-importer
version: 0.6.6
---

%% README_START %%

# Epub Importer

[中文文档](README.zh-CN.md)

A plugin that converts EPUB files into markdown notes for your [Obsidian vault](https://obsidian.md/). This allows you to read, annotate and link your ebooks directly within Obsidian.

For detailed information, check out the [Wiki](https://github.com/aoout/obsidian-epub-importer/wiki) or explore our [Example Vault](https://github.com/aoout/mdReader).

## Getting Started

There are two ways to import EPUB files:

1. Run the command `Epub Importer: Import epub to your vault` and provide the absolute path to your EPUB file.

2. Configure `libraries` paths in settings - when you run the import command, all EPUB files from these paths will be available for selection.

Once imported, the EPUB will be converted into a folder containing markdown notes, allowing you to:
- Read the book directly in Obsidian
- Add annotations and highlights
- Create links between notes
- Organize your reading materials

![Plugin Demo](https://raw.githubusercontent.com/aoout/obsidian-epub-importer/HEAD/assets/demo.gif)

### Property Template

All available variables:

```
- {{bookName}}
- {{title}}
- {{author}}
- {{publisher}}
- {{language}}
```

Example:

```
title: {{bookName}}
author: {{author}}
publisher: {{publisher}}
status: false
```

### Assets Path Template

All available variables:

```
- {{savePath}}
- {{bookName}}
```

Example:

```
{{savePath}}/{{bookName}}/images
```
# Platform Support

- **Windows**: Fully tested and supported
- **Linux/Mac**: Limited testing - if you encounter issues, please use appropriate tags when creating issues
- **Mobile**: Not supported due to technical limitations with .epub file handling

# Recommended Companion Plugins

## File Organization
[obsidian-custom-sort](https://github.com/SebastianMC/obsidian-custom-sort)
- Powerful sorting capabilities for file explorer
- Helps maintain organized library structure
- See [wiki/How-to-sort-files](https://github.com/aoout/obsidian-epub-importer/wiki/How-to-sort-files%3F) and [Example Vault](https://github.com/aoout/mdReader) for setup guides

## Reading Experience
[obsidian-remember-cursor-position](https://github.com/dy-sh/obsidian-remember-cursor-position)
- Remembers and restores cursor position between sessions
- Note: Currently does not support remembering scroll position

# Community & Support

## Share Your Experience
We'd love to hear how you use this plugin! Share your stories and workflows in our [discussions](https://github.com/aoout/obsidian-epub-importer/discussions).

## Reporting Issues
When reporting bugs:
1. Always include the problematic .epub file
2. If file upload is difficult, email to: wuz66280@gmail.com
3. For Linux/Mac users, please use appropriate platform tags

## Feature Requests
Please note that feature requests are evaluated based on alignment with the plugin's core philosophy and may not all be implemented.


%% README_END %%