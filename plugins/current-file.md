---
aliases:
- Current File
author:
- '[[2shortplanks|Mark Fowler]]'
categories: []
description: Allows external applications to know what file the desktop app is currently
  viewing.
downloads: 115
mobile: false
number: 1847
title: Current File
type: plugin
updated: '2024-07-20T17:43:46'
url: https://github.com/2shortplanks/current-file
version: 1.0.0
---

%% README_START %%

# Current File

Plugin for [Obsidian](https://obsidian.md) that allows external programs to
determine what the current file you're looking at in the the desktop
application.

## Why?

One of the great things about Obsidian is that it just works on a directory
of Markdown (an "Obsidian Vault").  You can manipulate the contents of the files
with external programs while Obsidian is open and it'll reflect the changes in
the application.  You're not bound to Obsidian and can use any tools you want
in your workflow.

This plugin allows external programs to be able to determine what file you're
looking at in the Obsidian desktop application.  For example, you could bind a
keyboard shortcut to execute a Perl script to add the path to the current note
to your daily note. You could have a Go program that checks if every link in the
current file is still reachable and removes those that are not.  The
possibilities are endless.

## How to use this plugin

By default every time Obsidian starts looking at a new file in a vault that has
this plugin installed, a JSON file will be written to
`.obsidian-current-file.json` in your home directory (or current profile directory
on Windows))

```json
{
    "file": "Sorted/Daily/2024-07-19.md",
    "vault": "/Users/markfowler/Obsidian/MyVault",
    "fullpath": "/Users/markfowler/Obsidian/MyVault/Sorted/Daily/2024-07-19.md"
}
```

You can change where the file will be written to in the settings for this plugin.

## Alternatives

Obsidian natively supports a x-callback-url scheme to allow you to determine
what file it's looking at, although this requires you to be running an
application with a custom url scheme to receive the information (or be running a
webserver and not mind having Obsidian spawn a web browser window).

More information on this feature can be found in the
[Obsidian Help Documentation](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI#Integrate+with+Hook).

## Copyright and License

```
MIT License

Copyright (c) 2024 Mark Fowler <mark@twoshortplanks.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


%% README_END %%