---
aliases:
- CSV Codeblock
author:
- '[[authors/elrindir|elrindir]]'
categories: []
description: This is a plugin for Obsidian. This plugin renders codeblocks with csv
  format.
downloads: 3686
mobile: true
number: 1218
stars: 5
title: CSV Codeblock
type: plugin
updated: '2024-07-18T13:46:13'
url: https://github.com/elrindir/obsidian-csv-codeblock
version: 1.1.0
---

%% README_START %%

# CSV Codeblock

This is a plugin for Obsidian (https://obsidian.md). This plugin renders codeblocks with csv format as tables.

# Usage

Just put the `csv` identifyer in a codeblock:

`````

```csv
Pos, Date, Name, Price
1, 2023-09-28, Spices, 150$
2, 2023-02-29, Shovel, 1.25$
```

`````

![A preview of the rendered table](https://github.com/elrindir/obsidian-csv-codeblock/blob/master/rendered_table.png)


# Stolen Code

I stole the code from https://docs.obsidian.md/Plugins/Editor/Markdown+post+processing#Post-process+Markdown+code+blocks

```ts
import { Plugin } from "obsidian";

export default class ExamplePlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor("csv", (source, el, ctx) => {
      const rows = source.split("\n").filter((row) => row.length > 0);

      const table = el.createEl("table");
      const body = table.createEl("tbody");

      for (let i = 0; i < rows.length; i++) {
        const cols = rows[i].split(",");

        const row = body.createEl("tr");

        for (let j = 0; j < cols.length; j++) {
          row.createEl("td", { text: cols[j] });
        }
      }
    });
  }
}
```

# Changelog

## v1.1 Added TSV Support
on Jul 18, 2024

Now supports `tsv` in codeblocks. Thanks mklepaczewski for the request.


## v1.0 Initial Release
on Sep 28, 2023



%% README_END %%