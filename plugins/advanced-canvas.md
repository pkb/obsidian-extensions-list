---
aliases:
- Advanced Canvas
author:
- '[[authors/Developer-Mike|Developer-Mike]]'
categories:
- '[[categories/Canvas|Canvas]]'
description: Supercharge your canvas experience! Create presentations, flowcharts
  and more!
downloads: 103112
mobile: true
number: 1474
stars: 509
title: Advanced Canvas
type: plugin
updated: '2025-01-16T00:44:29'
url: https://github.com/Developer-Mike/obsidian-advanced-canvas
version: 3.4.0
---

%% README_START %%

<h3 align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./assets/logo-dark.png">
        <img alt="Logo" src="./assets/logo-light.png" width="100">
    </picture><br/><br/>
	Advanced Canvas for <a href="https://obsidian.md">Obsidian.md</a>
</h3>

<p align="center">
    <a href="https://github.com/Developer-Mike/obsidian-advanced-canvas/stargazers"><img src="https://img.shields.io/github/stars/Developer-Mike/obsidian-advanced-canvas?colorA=363a4f&colorB=e0ac00&style=for-the-badge" alt="GitHub star count"></a>
    <a href="https://github.com/Developer-Mike/obsidian-advanced-canvas/issues"><img src="https://img.shields.io/github/issues/Developer-Mike/obsidian-advanced-canvas?colorA=363a4f&colorB=e93147&style=for-the-badge" alt="Open issues on GitHub"></a>
    <br/>
	<a href="https://obsidian.md/plugins?id=advanced-canvas"><img src="https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/obsidianmd/obsidian-releases/master/community-plugin-stats.json&query=$.advanced-canvas.downloads&label=Downloads&style=for-the-badge&colorA=363a4f&colorB=d53984"/></a>
    <a href="./LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=GPL-3.0&colorA=363a4f&colorB=b7bdf8" alt="GPL-3.0 license"/></a>
    <br/><br/>
    <b>⚡ Supercharge</b> your canvas experience! Create presentations, flowcharts and more!
</p>

## Installation
Open the Community Plugins tab in the settings and search for "Advanced Canvas" (or click [here](https://obsidian.md/plugins?id=advanced-canvas)).

<details>
    <summary>Other installation methods</summary>
    <br/>
    <ul>
        <li>Install it using <a href="https://github.com/TfTHacker/obsidian42-brat">BRAT</a></li>
        <li>Manual folder creation
            <ol>
                <li>Create a folder named <code>advanced-canvas</code> in your vault's plugins folder (<code>&lt;vault&gt;/.obsidian/plugins/</code>).</li>
                <li>Download <code>main.js</code>, <code>styles.css</code> and <code>manifest.json</code> from the latest release and put them in the <code>advanced-canvas</code> folder.</li>
                <li>Enable the plugin in Settings -> Community plugins -> Installed plugins</li>
            </ol>
        </li>
    </ul>
</details>

## Features
All features can be enabled/disabled in the settings.

- Create groups independently of the nodes
- [Better default settings](#better-default-settings)
- More [canvas commands](#canvas-commands)
- [Node Styles](#node-styles)
  - (Flowchart) [Node Shapes](#node-shapes)
    - Terminal shape
    - Process shape
    - Decision shape
    - Input/Output shape
    - On-page Reference shape
    - Predefined Process shape
    - Document shape
    - Database shape
  - [Border Styles](#border-styles)
    - Dotted
    - Dashed
    - Invisible
  - Text Alignment
    - Left
    - Center
    - Right
- [Edge Styles](#edge-styles)
  - [Path Styles](#path-styles)
    - Dotted
    - Short-dashed
    - Long-dashed
  - [Arrow Styles](#arrow-styles)
    - Triangle Outline
    - Halved Triangle
    - Thin Triangle
    - Diamond
    - Diamond Outline
    - Circle
    - Circle Outline
  - [Pathfinding Methods](#pathfinding-methods)
    - Default
    - Straight
    - Square
    - A*
- Add [custom styles](#custom-styles) to nodes and edges for unlimited possibilities
- Add [per-node breakpoints](#variable-breakpoints) to change at which zoom factor the node's content gets unrendered
- [Custom colors](#custom-colors) in the color picker
- [Presentation mode](#presentation-mode)
  - Create presentations by connecting nodes with arrows
- [Portals](#portals)
  - Embed other canvases inside your canvas
  - Create edges (arrows) to the embedded canvas
- [Collapsible groups](#collapsible-groups)
  - Collapse and expand groups to organize your canvas
- [Auto node resizing](#auto-node-resizing)
  - Resize nodes automatically when the text content changes
- [Focus mode](#focus-mode)
  - Focus on a single node and blur all other nodes
- [Better readonly](#better-readonly)
  - Disable node popup menus
  - Lock the canvas' position
  - Lock the canvas' zoom
- [Encapsulate selection](#encapsulate-selection)
  - Create a new canvas from the selected nodes
  - Create a link to the new canvas in the current canvas
- Expose [canvas events](#canvas-events) to use them in other plugins
- Expose node data to style them using CSS

## Support
Please consider supporting the plugin. There are many hours of work and effort behind it. The two easiest ways to support the plugin are either by starring ⭐ the repository or by donating any amount on [Ko-fi](https://ko-fi.com/X8X27IA08) ❤️. Thank you!

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X27IA08)
<img src="https://img.shields.io/endpoint?url=https://wakapi.dev/api/compat/shields/v1/Developer-Mike/interval:all_time/project:obsidian-advanced-canvas&label=Time%20Spent&style=for-the-badge&colorA=ffffff&colorB=ff5e5b" alt="Time Spent">

## Better Default Settings
- Enforce all new nodes to be aligned to the grid
- Customize default text node size
- Customize default file node size
- Modify the minimum node size
- Disable the font scaling relative to the zoom level

## Canvas Commands
- `Advanced Canvas: Open Quicksettings`
  - Open the quicksettings menu
- `Advanced Canvas: Create text node`
  - Create a new text node
- `Advanced Canvas: Create file node`
  - Create a new file node
- `Advanced Canvas: Select all edges`
  - Select all edges
- `Advanced Canvas: Zoom to selection`
  - Zoom to the bounding box of the selected nodes
- `Advanced Canvas: Clone node up/down/left/right`
  - Clone the selected node in the direction of the arrow keys
  - The cloned node will have the same dimensions and color as the original node
- `Advanced Canvas: Expand node up/down/left/right`
  - Expand the selected node in the direction of the arrow keys

## Node Styles
You can customize the default node styles using the settings.

### Node Shapes
<details>
    <summary>Flowchart Example</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/sample-flowchart.png" alt="Flowchart Example"/>
</details>

#### Usage
- Use the updated popup menu set a node's shape

#### Shapes
<details>
    <summary>Terminal Shape</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/flowchart-nodes/terminal.png" alt="Terminal Shape"/>
</details>

<details>
    <summary>Process/Center Shape</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/flowchart-nodes/process.png" alt="Process/Center Shape"/>
</details>

<details>
    <summary>Decision Shape</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/flowchart-nodes/decision.png" alt="Decision Shape"/>
</details>

<details>
    <summary>Input/Output Shape</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/flowchart-nodes/input-output.png" alt="Input/Output Shape"/>
</details>

<details>
    <summary>On-page Reference Shape</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/flowchart-nodes/reference.png" alt="On-page Reference Shape"/>
</details>

<details>
    <summary>Predefined Process Shape</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/flowchart-nodes/predefined-process.png" alt="Predefined Process Shape"/>
</details>

<details>
    <summary>Document Shape</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/flowchart-nodes/document.png" alt="Document Shape"/>
</details>

<details>
    <summary>Database Shape</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/flowchart-nodes/database.png" alt="Database Shape"/>
</details>

### Border Styles
Set the style of the border to dotted, dashed or invisible.

<details>
    <summary>Border Styles Example</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/border-styles.png" alt="Border Styles Example"/>
</details>

## Edge Styles
You can customize the default edge styles using the settings.

### Path Styles
Set the style of the edge paths to dotted, short-dashed or long-dashed.

<details>
    <summary>Edge Styles Example</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/edge-path-styles.png" alt="Edge Path Styles Example"/>
</details>

### Arrow Styles
Set the style of the arrows to triangle outline, halved triangle, thin triangle, diamond, diamond outline, circle or circle outline.

<details>
    <summary>Arrow Styles Example</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/edge-arrow-styles.png" alt="Edge Arrow Styles Example"/>
</details>

### Pathfinding Methods
Set the pathfinding method of the edges (arrows) to default, straight, squared or A*.

<details>
    <summary>Path Styles Example</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/edge-pathfinding-methods.png" alt="Edge Pathfinding Methods Example"/>
</details>

## Custom Styles
Custom style attributes for nodes and edges can easily be added.

1. Add a popup menu option
   - Open the `<VAULT-PATH>/.obsidian/plugins/advanced-canvas/data.json` file
   - If you want to add an option to node popup menu, search for `customNodeStyleAttributes` property, otherwise search for `customEdgeStyleAttributes` property. (Create it if it doesn't exist yet)
   - Add the custom popup menu option (Remove the comments!)
   ```json
    "customNodeStyleAttributes": [
        {
            "datasetKey": "exampleStyleAttribute", // Must be unique and written in camelCase
            "label": "Example Style Attribute",
            "options": [
                {
                    "icon": "cloud-sun", // Choose an icon from lucide.dev
                    "label": "Sunny Appearance",
                    "value": null // Null means default
                },
                {
                    "icon": "cloud-rain-wind", // Choose an icon from lucide.dev
                    "label": "Rainy Appearance",
                    "value": "rainy" // The value that gets set
                }
            ]   
        }
        // You can add more categories here
    ]
   ```

> [!IMPORTANT]
> There needs to be **one** option with the value null

2. Create a new CSS snippet in your vault (And enable it in the settings)
    ```css	
    .canvas-node[data-<DATASET-KEY>="rainy"] { /* The dataset key is now written in kebab-case */
        background-color: #7f7f7f;
    }
    ```
3. Reload Obsidian and enjoy your new custom style!
    <br><img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/custom-style-attribute-example.png" alt="Custom Style Attribute Example"/>

## Variable Breakpoints
Add breakpoints to nodes to change at which zoom factor the node's content gets unrendered.

Create a new CSS snippet in your vault (And enable it in the settings)
```css	
/* Any CSS selector can be used (As long as the .canvas-node element has the CSS variable defined) */
.canvas-node[data-shape="pill"] {
    /* The zoom factor at which the node's content gets unrendered (Zoom level can reach from 1 to -4) */
    --variable-breakpoint: 0.5;
}
```

## Custom Colors
Add custom colors to the color picker. You can add them using the following css snippet:
```css
:root {
    /* Where X is the index of the color in the palette */
    /* The colors 1-6 are already used by Obsidian */
    --canvas-color-X: 0, 255, 0; /* RGB */
}
```

<details>
    <summary>Custom Colors In Palette</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/custom-colors.png" alt="Custom Colors In Palette"/>
</details>

## Presentation Mode
In presentation mode, you can navigate through the nodes using the arrow keys or the PageUp/PageDown keys (Compatible with most presentation remotes). The different slides/nodes are connected using arrows. If you want to have multiple arrows pointing from the same node, you can number them in the order you want to navigate through them. While in presentation mode, the canvas is in readonly mode (So [better readonly](#better-readonly) effects the presentation mode as well!). You can exit the presentation mode using the `ESC` key or the corresponding command. If you want to continue the presentation from the last slide you were on, you can use the `Advanced Canvas: Continue presentation` command.

<img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/sample-presentation-simple.gif" alt="Presentation mode example"/>

<details>
    <summary>Canvas File</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/sample-presentation-simple.png" alt="Presentation canvas file"/>
</details>

### More Complex Example
<img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/sample-presentation-complex.gif" alt="Complex presentation mode example"/>

<details>
    <summary>Canvas File</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/sample-presentation-complex.png" alt="Complex presentation canvas file"/>
</details>

### Usage
- Create the first slide
  - Create the first slide of the presentation using the updated popup menu
  - OR create a node and mark it as the first slide using the updated card menu
- Add more slides
  - Link the slides using arrows
    - If you want to loop back to a previous slide, you can number the arrows in the order you want to navigate through them
  - <b>TIP:</b> Create slides with consistent dimensions by using the updated card menu
- Control the presentation
  - Start the presentation using the command palette (`Advanced Canvas: Start presentation`)
  - Change slides using the arrow keys
  - Exit the presentation using the `ESC` key

## Portals
Embed other canvases inside your canvas and create edges (arrows) to the embedded canvas.

<img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/sample-portal-usage.png" alt="Portal example"/>

### Usage
- Embed a canvas file and click on the door icon of the popup menu to open a portal

## Collapsible Groups
Collapse and expand groups to organize your canvas.

<details>
    <summary>Collapsible Groups Example</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/collapsible-groups.png" alt="Collapsible Groups Example"/>
</details>

## Auto Node Resizing
Resize nodes automatically when the text content changes.

<details>
    <summary>Auto Node Resizing Example</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/auto-node-resizing.gif" alt="Auto Node Resizing Example"/>
</details>

## Focus Mode
Focus on a single node and blur all other nodes.

<details>
    <summary>Focus Mode Example</summary>
    <img src="https://raw.githubusercontent.com/Developer-Mike/obsidian-advanced-canvas/HEAD/assets/focus-mode.png" alt="Focus Mode"/>
</details>

## Better Readonly
- Disable node popup menus
- Lock the canvas' position
- Lock the canvas' zoom
- BUT to retain some interactivity, it allows zooming to a bounding box (e.g. zoom to selection, zoom to fit all)

### Usage
- Use the updated control menu to toggle the new features (Only shown if the canvas is in readonly mode)

## Encapsulate Selection
Move the current selection to a new canvas and create a link in the current canvas.

### Usage
- Select the nodes you want to encapsulate
- Use the context menu (right click) to encapsulate the selection
- OR use the command palette (`Advanced Canvas: Encapsulate selection`)

## Canvas Events
All custom events are prefixed with `advanced-canvas:` and can be listened to using `app.workspace.on` (Just like the default events).

<details>
    <summary>
        All Events
    </summary>

  - `advanced-canvas:canvas-changed`
    - Fired when a new canvas gets loaded
    - Payload: `Canvas`
  - `advanced-canvas:viewport-changed:before` and `advanced-canvas:viewport-changed:after`
    - Fired before and after the viewport gets changed
    - Payload: `Canvas`
  - `advanced-canvas:node-moved`
    - Fired when a node gets moved
    - Payload: `Canvas`, `Node`
  - `advanced-canvas:double-click`
    - Fired when the canvas gets double-clicked
    - Payload: `Canvas`, `MouseEvent`, `preventDefault: { value: Boolean }`
  - `advanced-canvas:dragging-state-changed`
    - Fired when the dragging state of the canvas changes
    - Payload: `Canvas`, `boolean`
  - `advanced-canvas:node-created`
    - Fired when a new node gets created
    - Payload: `Canvas`, `Node`
  - `advanced-canvas:edge-created`
    - Fired when a new edge gets created
    - Payload: `Canvas`, `Edge`
  - `advanced-canvas:node-added`
    - Fired when a new node gets added
    - Payload: `Canvas`, `Node`
  - `advanced-canvas:edge-added`
    - Fired when a new edge gets added
    - Payload: `Canvas`, `Edge`
    - Payload: `Canvas`, `Edge`
  - `advanced-canvas:node-changed`
    - Fired when any node gets changed
    - Payload: `Canvas`, `Node`
  - `advanced-canvas:edge-changed`
    - Fired when any edge gets changed
    - Payload: `Canvas`, `Edge`
  - `advanced-canvas:node-text-content-changed`
    - Fired when the text content of a node gets changed (While typing)
    - Payload: `Canvas`, `Node`, `ViewUpdate (From CodeMirror)`
  - `advanced-canvas:node-removed`
    - Fired when a node gets removed
    - Payload: `Canvas`, `Node`
  - `advanced-canvas:edge-removed`
    - Fired when an edge gets removed
  - `advanced-canvas:copy`
    - Fired when the selection gets copied
    - Payload: `Canvas`, `SelectionData (Reference!)`
  - `advanced-canvas:node-breakpoint-changed`
    - Fired when the breakpoint of a node changes
    - Payload: `Canvas`, `Node`, `breakpoint: { value: boolean }`
  - `advanced-canvas:node-editing-state-changed`
    - Fired when the editing state of a node changes
    - Payload: `Canvas`, `Node`, `boolean (isEditing)`
  - `advanced-canvas:node-bbox-requested`
    - Fired when the bounding box of a node gets requested (e.g. for the edge path or when dragging a group)
    - Payload: `Canvas`, `Node`, `BBox (Reference!)`
  - `advanced-canvas:edge-center-requested`
    - Fired when the center of an edge gets requested (e.g. for the edge label position)
    - Payload: `Canvas`, `Edge`, `Position (Reference!)`
  - `advanced-canvas:containing-nodes-requested`
    - Fired when the nodes inside a bounding box get requested
    - Payload: `Canvas`, `BBox`, `Node[] (Reference!)`
  - `advanced-canvas:selection-changed`
    - Fired when the selection of the canvas changes
    - Payload: `Canvas`, `oldSelection: Set<Node|Edge>`, `updateSelection: (() => void) => void`
  - `advanced-canvas:zoom-to-bbox:before` and `advanced-canvas:zoom-to-bbox:after`
    - Fired before and after the canvas gets zoomed to a bounding box (e.g. zoom to selection, zoom to fit all)
    - Payload: `Canvas`, `BBox`
  - `advanced-canvas:popup-menu-created`
    - Fired when the a node popup menu gets created (Not firing multiple times if it gets moved between nodes of the same type)
    - Payload: `Canvas`
  - `advanced-canvas:node-interaction`
    - Fired when a node gets hovered over
    - Payload: `Canvas`, `Node`
  - `advanced-canvas:undo`
    - Fired when undo gets called
    - Payload: `Canvas`
  - `advanced-canvas:redo`
    - Fired when redo gets called
    - Payload: `Canvas`
  - `advanced-canvas:readonly-changed`
    - Fired when the readonly state of the canvas changes
    - Payload: `Canvas`, `boolean`
  - `advanced-canvas:data-requested`
    - Fired when the canvas data gets requested
    - Payload: `Canvas`, `CanvasData (Reference!)`
  - `advanced-canvas:load-data`
    - Fired when the canvas data gets set
    - Payload: `Canvas`, `CanvasData (Reference!)`, `setData: (CanvasData) => void`
  - `advanced-canvas:canvas-saved:before` and `advanced-canvas:canvas-saved:after`
    - Fired before and after the canvas gets saved
    - Payload: `Canvas`
</details>

## Settings
Every feature can be enabled/disabled in the settings. All features were made to be as customizable as possible.

## Contributing
All contributions are welcome!
You may want to check out issues with the `only PRs` label to find issues that won't be worked on by me.
But feel free to work on any issue or non-issue you want to work on!

## Star History
[![Star History Chart](https://api.star-history.com/svg?repos=Developer-Mike/obsidian-advanced-canvas&type=Date)](https://star-history.com/#Developer-Mike/obsidian-advanced-canvas&Date)


%% README_END %%