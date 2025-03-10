---
aliases:
- Desmos
author:
- '[[authors/Nigecat|Nigecat]]'
categories: []
description: Embed Desmos graphs into your notes
downloads: 16272
mobile: true
number: 468
stars: 132
title: Desmos
type: plugin
updated: '2024-06-24T08:34:40'
url: https://github.com/Nigecat/obsidian-desmos
version: 0.6.8
---

%% README_START %%

# Obsidian Desmos

Render [Desmos](https://www.desmos.com/calculator) graphs right inside your notes.  
Works both online and offline.

![demo](https://user-images.githubusercontent.com/48661288/159597221-afc18198-5a3f-4a58-a6b2-a3a552a92a7f.png)

# Installation

### Automatic (Recommended)
Search for `Desmos` in the inbuilt Obsidian community plugin browser and install it from there.

### Manual
Download the attached files from the [latest release](https://github.com/Nigecat/obsidian-desmos/releases/latest) and place them in `<vault-root>/.obsidian/plugins/obsidian-desmos/` (you may need to create any missing directories) then enable community plugins (if needed) and toggle the `Desmos` plugin on.

# Exporting

If you wish to export a note with a graph in it to a pdf then   
(a) Filesystem caching must be on  
(b) All target graphs must be in the filesystem cache
(c) The renderer must be disabled  
(a) and (c) can be found in the plugin settings. (b) can be achieved by viewing all graphs at least once after enabling filesystem caching.

# Usage

The most basic usage of this plugin involves creating a codeblock with the tag `desmos-graph` and placing the equations you wish to graph in the body:

````
    ```desmos-graph
    y=x
    ```
````
<details>
  <summary>View Graph</summary>

  ![linear](https://user-images.githubusercontent.com/48661288/158956700-96525ec7-20bb-4da6-9314-106a6c43eced.png)
</details>

Equations use the [LaTeX math](https://en.wikibooks.org/wiki/LaTeX/Mathematics) format and you can graph multiple equations by placing each one on a seperate line:

````
    ```desmos-graph
    y=\sin(x)
    y=\frac{1}{x}
    ```
````
<details>
  <summary>View Graph</summary>

  ![latex](https://user-images.githubusercontent.com/48661288/158957163-2b561a94-08b0-40fa-b725-0e8957bd696c.png)
</details>

You can restrict the bounds of the graph and apply other settings by placing a `---` seperator before your equations. The content before it must be a set of `key=value` pairs seperated by either **newlines or semicolons** (or both):

````
    ```desmos-graph
    left=0; right=100;
    top=10; bottom=-10;
    ---
    y=\sin(x)
    ```
````
<details>
  <summary>View Graph</summary>

  ![restriction](https://user-images.githubusercontent.com/48661288/158957249-eb3f063e-e4c4-4d50-9935-d4fb95fd2336.png)
</details>

You can set the dimensions of the rendered image by using the `height` and `width` fields.  
Additionally, you can disable the graph grid by setting `grid=false`.

You can set the mode of trigonometry functions by using the `degreeMode` setting.  
This has two valid values: `radians` or `degrees`. By default, it will be set to `radians`.

## Equation Control

You can additionally set three other fields for each equation - the style, color, and a restriction.
Each of these must be placed between a series of `|` characters after the equation (in any order).

The valid colors are (case-insensitive):
 - `RED`
 - `GREEN`
 - `BLUE`
 - `YELLOW`
 - `MAGENTA`
 - `CYAN`
 - `PURPLE`
 - `ORANGE`
 - `BLACK`
 - `WHITE`
 - Any hex color code beginning with `#` (e.g `#42ddf5`)  

Note that the default color can be set by using the `defaultColor` field in the graph settings. This field follows the same format.

The valid styles are (case-insensitive):
 - Line (e.g `y=x`)
    - `SOLID` (default)
    - `DASHED`
    - `DOTTED`
 - Point (e.g `(1,4)`)
    - `POINT` (default)
    - `OPEN`
    - `CROSS`

For example, if we wanted to create a straight green dashed line of `x=2` with a restriction of `y>0` we could do any of the following.
````
    ```desmos-graph
    x=2|y>0|green|dashed
    ```
````
````
    ```desmos-graph
    x=2|y>0|dashed|green
    ```
````
````
    ```desmos-graph
    x=2|green|y>0|dashed
    ```
````
````
    ```desmos-graph
    x=2|dashed|green|y>0
    ```
````
(you get the idea)  
<details>
  <summary>View Graph</summary>

  ![equation-control](https://user-images.githubusercontent.com/48661288/158956490-9d4eaf54-4ae6-4b1c-9f49-18e3eb456650.png)  
</details>

Additionally, individual equations can be hidden with the `hidden` flag, this can be useful when graphing things such as derivatives:
````
    ```desmos-graph
        f(x)=x^2|hidden
        f'(x)
    ```
````
<details>
  <summary>View Graph</summary>

  ![hidden](https://user-images.githubusercontent.com/48661288/161505291-9a28618a-d14e-48ec-9d5e-14b7235db733.png)
</details>

### Labels

Point labels can be specified with the `label:<content>` flag (equation labels are unsupported by Desmos):  
````
    ```desmos-graph
        (0,0)|label:(0,0)
        (5,4)|open|label:This is a label
    ```
````
<details>
  <summary>View Graph</summary>

  ![label](https://user-images.githubusercontent.com/48661288/163488878-a1d8daeb-8ac6-41e7-9a6c-899b0a7f3c5f.svg)
</details>

# Custom Styling
The `obsidian-desmos` CSS class is applied to all graphs. This can be used in themes and snippets to override certain behaviour.  
For instance, if you wanted all graphs to be centered in the page content, you could use the following snippet:
```css
/* Horizontally center the graph in the page content */
.desmos-graph {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
```


%% README_END %%