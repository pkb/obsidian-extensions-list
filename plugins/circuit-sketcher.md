---
aliases:
- Circuit Sketcher
author:
- '[[authors/code-forge-temple|Code Forge Temple]]'
categories: []
description: Draw circuits on a canvas using circuit-sketcher-core.
downloads: 58
mobile: false
number: 2126
stars: 5
title: Circuit Sketcher
type: plugin
updated: '2025-01-10T23:45:02'
url: https://github.com/code-forge-temple/circuit-sketcher-obsidian-plugin
version: 1.1.1
---

%% README_START %%

# circuit-sketcher-obsidian-plugin
A plugin for Obsidian to draw circuits on a canvas. It is based on the [code-forge-temple/circuit-sketcher-core](https://github.com/code-forge-temple/circuit-sketcher-core).

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- Draw and edit circuit diagrams directly within Obsidian.
- Save and load circuit designs.
- Customizable library for circuit elements.
- Responsive design with automatic resizing.

## Installation

1. Open [Obsidian](https://obsidian.md) and go to `Settings` ⇒ `Community Plugins` ⇒ `Browse`.
2. Search for `Circuit Sketcher`.
3. Select the `Circuit Sketcher` plugin and press `Install`.

or

1. Open [Community Plugins Page](https://obsidian.md/plugins?id=circuit-sketcher) in browser.
2. Select `Install`.

## Usage

1. Use the ribbon icon or command palette to create a new circuit sketcher file.
2. Start drawing your circuit on the canvas:
    - On the canvas, right-click to show the canvas menu, and select `Create Node`.
    - Right-click on the node to show the node menu, select `Change Image`, and choose an image relevant to your circuit node.
    - Right-click on the node to show the node menu, select `Add Port`, and choose the port location and type.
    - You can rename the circuit node label or port label by double-clicking on the label. The port or port label can also be deleted (right-click on the port to show the port menu and proceed from there).
    - You can relocate ports, either to a different node side or rearrange the ports on the same side, by dragging and dropping the port to the desired location within the dotted blue area.
    - After you are satisfied with your changes to the circuit node, and if you wish to save the circuit node to reuse it in the current or a different `.circuit-sketcher` file, you can right-click on the circuit node and press `Save Node to Library` (this will update the root Obsidian vault `circuit-sketcher.lib` file).
    - You can reuse the node by right-clicking on the canvas and selecting `Add Node from Library`.
    - Connections between circuit nodes can be made by dragging and dropping one port to the destination port (if it is a compatible port). You can delete a connection by selecting it and then pressing the Delete key.
    - You can drag the entire circuit by holding the mouse scroll button and moving the mouse.

A short video tutorial on how to use the plugin:

[![S6ifgDb83Pg](https://img.youtube.com/vi/S6ifgDb83Pg/0.jpg)](https://www.youtube.com/watch?v=S6ifgDb83Pg)

## License
This project is licensed under the GNU General Public License v3.0. See the [LICENSE](LICENSE) file for more details.


%% README_END %%