---
aliases:
- Tiff Viewer
author:
- Jan Ullmann
author_page: https://github.com/ullmannJan
categories: []
description: View .tif(f) files by generating duplicates in form of .tif(f).png
downloads: 1204
mobile: true
number: 1465
title: Tiff Viewer
type: plugin
updated: '2024-04-15T22:15:27'
url: https://github.com/ullmannJan/obsidian-tiff-viewer
version: 1.2.6
---

%% README_START %%

# Obsidian Tiff Viewer

This plugin creates copies of all `.tif(f)` files in the currently opened file and converts them to `.tif(f).png` wherever they are saved. This allows for `tif(f)` images to be displayed in Obsidian.

## Use Case

In science, it is still common to use `.tif(f)` files. Today's browsers are not natively compatible with this picture format, and thus, Obsidian is not capable of displaying them. To address this issue, this plugin allows you to simplify the conversion process by running one command to convert the file links to `.tif(f).png` files. Furthermore, it creates a `.png` copy of this image in the same directory as the source file. This converted picture can now easily be displayed in an Obsidian note.

## Functionality

![obsidian-tiff-viewer-demo](https://github.com/ullmannJan/obsidian-tiff-viewer/assets/102742052/1a1491ba-2150-4b25-a449-cdef2768b0b3)

The plugin consists of 4 commands.

- `Tiff Viewer: Create .tif(f).png from .tif(f) in editor and rename links`
    - Creates a copy of all **.tif(f)** files that are linked in the current editor and converts them to **.tif(f).png** and renames the file links.
- `Tiff Viewer: Delete .tif(f).png files linked in editor and rename links`
    - Renames file links in the editor from **.tif(f).png** to **.tif(f)**. Then, it deletes the corresponding **.tif(f).png** files.
- `Tiff Viewer: Debug: Delete all .tif(f).png files in vault (dangerous)`
    - Deletes all files in the vault that end with **.tif(f).png**.
- `Tiff Viewer: Debug: Rename file links with .tif(f).png to .tif(f) in editor`
    - Renames all **.tif(f).png** file links in the current editor back to **.tif(f)**. However, it does not delete anything.

Furthermore, one can convert single tif(f)-files in the file-explorer by right-clicking on them and selecting `Create PNG Copy`.

## Settings

There is not a lot to configure at the moment.
One can choose to run the conversion process  automatically on each file one opens.

![image](https://github.com/ullmannJan/obsidian-tiff-viewer/assets/102742052/22a3af83-f967-497d-80bb-d97cef012717)

## Development

To compile the project, you can use the following steps:

1. Make sure you have Node.js and npm installed on your machine.
2. Clone the repository using `git clone https://github.com/ullmannJan/obsidian-tiff-viewer.git`.
3. Navigate to the project directory using `cd obsidian-tiff-viewer`.
4. Install the dependencies by running `npm install`.
5. Build the project using `npm run build`.
6. The compiled code will be available in the `dist` directory.




%% README_END %%