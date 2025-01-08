---
aliases:
- Nomnoml Diagram
author:
- '[[authors/Daeik|Daeik Kim]]'
categories:
- '[[categories/Diagrams and drawing|Diagrams and drawing]]'
description: Draw nomnoml diagrams in Obsidian notes
downloads: 9103
mobile: true
number: 308
stars: 56
title: Nomnoml Diagram
type: plugin
updated: '2023-09-26T21:47:37'
url: https://github.com/Daeik/obsidian-nomnoml-diagram
version: 1.2.0
---

%% README_START %%

## Obsidian nomnoml Diagram

![An example of nomnoml diagram](https://raw.githubusercontent.com/Daeik/obsidian-nomnoml-diagram/main/images/nomnoml-diagram-example.gif)

This [Obsidian](https://obsidian.md/) plugin lets you draw [nomnoml](https://www.nomnoml.com/) diagrams inside of Obsidian notes.


## Drawing a nomnoml diagram

To draw a nomnoml diagram inside of a note, you can simply use fenced code block syntax with `nomnoml` keyword. (Or use *[Nomnoml Diagram: New Diagram]* command to insert auto-generated fenced code block)

    ```nomnoml
    [Example] -> [Diagram]
    ```

nomnoml directives are also supported to set diagram styles per diagram.

(Default directive settings can be set in *[Plugin Options > Nomnoml Diagram]*.)


    ```nomnoml
    #background: #000000
    #arrowSize: 0.5

    [Example] -> [Diagram]
    ```

Please check nomnoml's [official website](https://www.nomnoml.com/) and [GitHub repository](https://github.com/skanaar/nomnoml) for the full syntax references and more examples!


## Notes

- All diagrams are generated as SVG(Scalable Vector Graphics)
- Obsidian's default "Export to PDF" includes generated SVG diagrams (and each text node is PDF annotatable!)
- Inserting new diagrams will be much easier using *[Nomnoml Diagram: New Diagram]* command by [a hotkey](https://help.obsidian.md/How+to/Use+hotkeys) or [`/` slash command (`v0.12.17+`)](https://forum.obsidian.md/t/obsidian-release-v0-12-17/25270)


## Compatibility

- Supports Obsidian desktop and mobile versions
- Tested for Obsidian `v0.12.15+`


## License

[MIT](./LICENSE)


%% README_END %%