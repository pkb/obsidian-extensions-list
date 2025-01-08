---
aliases:
- Photopea Editor
author:
- '[[authors/KarmaToast40340|Karmatoast40340]]'
categories: []
description: Automatically opens images in Photopea when clicked in your vault.
downloads: 12
mobile: true
number: 2108
stars: 0
title: Photopea Editor
type: plugin
updated: '2024-12-10T20:20:53'
url: https://github.com/KarmaToast40340/photopea-editor
version: 1.0.0
---

%% README_START %%

# Photopea Editor

**Photopea Plugin** integrates the powerful online image editor [Photopea](https://www.photopea.com) directly into Obsidian, allowing users to edit PNG and JPG images seamlessly within the app.

---

## Features

- Automatically opens images in **Photopea** when clicked in your Obsidian vault.
- Replaces the default image viewer with the Photopea editor directly within the same panel.
- Supports **PNG**, **JPG**, and **JPEG** image formats.
- Retains your workflow by embedding the editor into your Obsidian workspace.

---

## Installation

1. Download or clone this repository into your Obsidian `plugins` directory:
   ```
   .obsidian/plugins/photopea-plugin
   ```

2. Navigate to Obsidian settings:
   - Go to **Settings → Community Plugins**.
   - Enable **Community Plugins** (if not already enabled).
   - Click on **"Browse"**, search for this plugin, and install it.

3. Enable the Photopea Plugin in your **Installed Plugins** list.

---

## Usage

1. Open any **PNG**, **JPG**, or **JPEG** image in your Obsidian vault.
2. The default image viewer will be replaced with the Photopea editor.
3. Edit the image directly in Photopea.
4. Save and export your changes from Photopea when editing is complete.

---

## Technical Details

- The plugin generates a **Data URI** of the selected image to load it into Photopea.
- The **Photopea editor** is embedded using an iframe that dynamically adjusts to the dimensions of your Obsidian panel.
- Once you save the image in Photopea, you can re-import it back into your Obsidian vault manually.

---

## Known Issues

- **Saving Changes**: Currently, you must manually save the edited image from Photopea and replace it in your Obsidian vault. Automated saving is not yet supported.
- **Large Images**: Performance may vary with large image files due to the browser-based nature of Photopea.

---

## Future Features

- **Automatic Saving**: Implement seamless saving of edited images directly back into the Obsidian vault.
- **Additional Formats**: Add support for more image formats (e.g., GIF, SVG).
- **Custom Scripts**: Allow users to define custom scripts for automating tasks in Photopea.

---

## Contributing

We welcome contributions to improve this plugin! Feel free to fork the repository, submit issues, or open pull requests.

---

## License

This plugin is licensed under the [MIT License](LICENSE).

---

**Enjoy seamless image editing directly within Obsidian with the Photopea Plugin!**


%% README_END %%