---
aliases:
- Blur Mode
author:
- dangehub
author_page: https://github.com/dangehub
categories: []
description: Blur anything you want to keep your privacy.
downloads: 52
funding_page: ''
mobile: true
number: 2030
title: Blur Mode
type: plugin
updated: '2024-11-19T03:49:59'
url: https://github.com/dangehub/obsidian-blur-mode
version: 1.0.5
---

%% README_START %%

# Blur Mode Plugin for Obsidian 

![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/dangehub/obsidian-blur-mode/total)
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

A plugin for Obsidian that allows you to selectively blur elements in your notes for privacy or focus purposes.

## Features

- **Selective Blurring**: Choose specific elements to blur in your notes
- **Preset Management**: Create and manage blur presets
- **Easy Selection**: Visual interface for selecting elements with real-time preview
- **Draggable Panel**: Convenient preset management panel that can be moved around
- **Customizable Blur**: Adjust the blur amount to your preference
- **Keyword-based Blur**: Blur objects containing specified keywords

## How to Use

![gif demo](https://github.com/dangehub/obsidian-blur-mode/blob/master/docs/how-to-use-blur-mode.gif)

### Managing Presets

1. Open the command palette (Cmd/Ctrl + P)
2. Run the "Blur Mode:Manage Blur Presets" command
3. A draggable panel will appear showing your current presets
4. Click elements to add them to your preset (yellow highlight)
5. Click again to remove them from the preset (red highlight)
6. Use the × button in the preset panel to remove specific elements

### Toggling Blur Effect

- Click the blur icon in the ribbon to toggle the blur effect on/off
- When enabled, all elements in your presets will be blurred
- When disabled, all elements return to normal visibility

### Customizing Blur Amount

1. Go to Settings > Blur Mode
2. Adjust the "Blur Amount" value (e.g., "0.5em")
3. Changes will apply immediately if blur is enabled

## Installation

### From Obsidian Community Plugins


### Manual Installation

1. Download the latest release
2. Extract the files to your vault's `.obsidian/plugins/obsidian-blur` folder
3. Reload Obsidian
4. Enable the plugin in Community Plugins settings

## Development

This plugin is built using TypeScript and the Obsidian API.

### Prerequisites

- Node.js
- npm or yarn
- Basic knowledge of TypeScript and Obsidian API

### Building

1. Clone this repository
2. Install dependencies
   ```bash
   npm install
   ```
3. Build the plugin
   ```bash
   npm run build
   ```

### Development Commands

- `npm run dev` - Start development build with hot reload
- `npm run build` - Create production build

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/yourusername/obsidian-blur/issues) on GitHub.

## Acknowledgments

- Thanks to the Obsidian team for their excellent API
- Inspired by [LiteLoaderQQNT-Plugin-Demo-Mode](https://github.com/qianxuu/LiteLoaderQQNT-Plugin-Demo-Mode/tree/main)

## Changelog

### 1.0.5
- Adjust code to comply with official requirements
- Add Debug-mode

### 1.0.4

- Use CSS for styling instead of JS/HTML per Obsidian guidelines
- Add three-color highlight system (red/yellow/green) for element 
states

### 1.0.3
- Refactor code

### 1.0.2
- Use the floating panel to select css and add keywords
- When the blur effect is turned on and off, the ribbon icon will change
  
### 1.0.1
- Add keywords blur
- Merges css selectors and keywords
- Use github action to release

### 1.0.0
- Initial release
- Basic blur functionality
- Preset management
- Customizable blur amount

## Future Plans

- [ ] Multiple preset support
- [ ] Keyboard shortcuts
- [ ] Export/Import presets
- [x] Keyword-based blur function to break through the limitations of css selection (such as only blurring specific notes)

<!-- links -->
[your-project-path]:dangehub/obsidian-blur-mode
[contributors-shield]: https://img.shields.io/github/contributors/dangehub/obsidian-blur-mode.svg?style=flat-square
[contributors-url]: https://github.com/dangehub/obsidian-blur-mode/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dangehub/obsidian-blur-mode.svg?style=flat-square
[forks-url]: https://github.com/dangehub/obsidian-blur-mode/network/members
[stars-shield]: https://img.shields.io/github/stars/dangehub/obsidian-blur-mode.svg?style=flat-square
[stars-url]: https://github.com/dangehub/obsidian-blur-mode/stargazers
[issues-shield]: https://img.shields.io/github/issues/dangehub/obsidian-blur-mode.svg?style=flat-square
[issues-url]: https://img.shields.io/github/issues/dangehub/obsidian-blur-mode.svg
[license-shield]: https://img.shields.io/github/license/dangehub/obsidian-blur-mode.svg?style=flat-square
[license-url]: https://github.com/dangehub/obsidian-blur-mode/blob/master/LICENSE.txt


%% README_END %%