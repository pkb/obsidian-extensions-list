---
aliases:
- Daily Note Structure
author:
- '[[db-developer|Dirk Brenckmann]]'
categories: []
description: One-Click create a structure for and including your daily notes.
downloads: 202
mobile: true
number: 1738
title: Daily Note Structure
type: plugin
updated: '2024-06-24T01:53:15'
url: https://github.com/db-developer/daily-note-structure
version: 1.1.0
---

%% README_START %%

# Daily Note Structure

Can be used to create a folder structure which finally holds the actual daily note.
If your 'daily' notes simply are a number of markdown files within a default folder, you will NOT need this plugin.

The purpose of this plugin is, to automate the daily creation of multiple folders and files.

## Best Result Plugins

You may want to install the following obsidian plugins:

- [Templater by SilentVoid](https://obsidian.md/plugins?search=templater)
  Use this, to automatically generate 'folder not' and 'file' content.

- [Folder Notes by Lost Paul](https://obsidian.md/plugins?search=folder%20notes)
  Use this, to display default notes, by clicking on folders

## Date/Time format patterns
For compatibility reasons, 'daily note structure' uses 'moment.js' so all of 
['moment.js' formats](https://momentjs.com/docs/#/displaying/format/) are available.

Additionally the following formats can be used:

| Description                  | Token  | Output                                 |
| ---------------------------: | :----- | :------------------------------------- |
| Month of the weeks first day | MOW    | 1 2 ... 11 12                          |
|                              | MoW    | 1st 2nd ... 11th 12th                  |
|                              | MMOW   | 01 02 ... 11 12                        |
|                              | MMMOW  | Jan Feb ... Nov Dec                    |
|                              | MMMMOW | January February ... November December |

The format above may be useful for the first days of a new month, if you want to keep all 'dailies' of a week in the same folder.

Format patterns to be used by 'moment.js' must follow the format '{{ ... }}' and are replaced first.

### Format errors

Evaluation errors for bad format patterns can be found in obsidians developer console (<shift>+<ctrl>+i)
Note: Not every bad pattern will  fail with an error. Some will silently return 'unexpected results'.

### Folder structure
```typescript
export interface FolderStructure {
  type: "folder" | "file";
  namepattern: string;
  template?: string;
  description?: string;
  children?: FolderStructure[];
}
```

Using the FolderStructure interface, you can setup a 'structure' on the plugins settings page.
The structure itself is an Array of FolderStructure objects.

```json
[{
  "type": "folder",
  "namepattern": "{{YYYY}}",
  "template": "Plugins/Templater/Templates/yearly_folder_note_template.md",
  "description": "yearly folder base",
  "children": [{
    "type": "folder",
    "namepattern": "{{MMOW}} - {{MMM}} {{YYYY}}",
    "template": null,
    "description": "folder matching the month for the first day in the week",
    "children": [{
      "type": "folder",
      "namepattern": "KW {{WW}} ({{MMM}} {{YYYY}})",
      "template": null,
      "description": "folder matching the years week",
      "children": [{
        "type": "file",
        "namepatern": "{{YYYY}}-{{MM}}-{{DD}}",
        "template": "Plugins/Templater/Templates/daily_template.md"
      }]
    }]
  }]
}]
```

#### Property 'type': {string} - required
Must be one of "folder" or "file"

#### Property 'namepattern': {string} - required
A string, which can hold any combination of characters ad patterns.
Patterns must follow '{{<pattern>}}' with pattern being exactly one of ['moment.js' formats](https://momentjs.com/docs/#/displaying/format/)

Do not combine patterns inline. Don't use {{YYYY-MM-DD}}.
The supported way of combining patterns would be '{{YYYY}}-{{MM}}-{{DD}}' instead.

#### Property 'template': {string} - optional
An optional string, which can hold a path to a markdown file, that can be used as template.
If a template is specified for 'type: "file"', the generated files content will be that of 'template'.
If a template is specified for 'type: "folder"', a markdown file will be generated inside the folder, with the folders name, and its content will be that of 'template'. For best results, additionally install a 'folder note' plugin.

### Property 'description': {string} - optional
An optional string, which can be used to describe the files or folders purpose.
This property currently is not used for anything else.

### Property 'children': {Array<FolderStructure>} - optional
An Array of further FolderStructure nodes. This property is used by nodes of 'type: "folder"' only. If specified on "files", the property is ignored.



%% README_END %%