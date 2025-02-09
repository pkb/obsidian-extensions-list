---
aliases:
- JSONifier
author:
- '[[authors/KjellConnelly|Kjell Connelly]]'
categories: []
description: Select text that you want to JSON.stringify(), or JSON.parse(). Select
  text and use the keystroke and the transformation will be copied to your clipboard.
  Paste it wherever you want.
downloads: 5299
mobile: true
number: 82
stars: 6
title: JSONifier
type: plugin
updated: '2021-01-26T00:08:45'
url: https://github.com/KjellConnelly/obsidian-jsonifier
version: 1.0.1
---

%% README_START %%

## Obsidian JSONifier

All this plugin does is convert highlighted text via `JSON.stringify(text)` or `JSON.parse(text)`.

### How to use

1. Highlight text you can to convert
2. Use hotkey to parse selection (default `Cmd+Alt+[`) or stringify selection (default `Cmd+Alt+[`). You can update hotkeys if you'd like.
3. Paste wherever you want. (Note, selection must be a valid JSON string to parse it. So if you're copying a JSON string, make sure you select the quotes around it as well).

##### Also useful to validate JSON

As you may know, `JSON.parse()` also throws an error if the string is not valid JSON. So if you're writing a JSON codeblock, or editing frontmatter in JSON format, you can use the `JSON.parse()` function to check your code.

### Example

I'm using **Obsidian.md** to write markdown, but I'm a developer who needs to send my markdown as a string using JSON.

```markdown
# My Website

Hello and welcome to *my website*. It's very cool. Here are 3 things you should know about me.

1. I like cats.
2. I like dogs.
3. ???
4. Profit!
```

So now we need to convert this into a JSON string, using this plugin. I highlight it and using the JSON.stringify() function. The result is copied to your clipboard, so paste it wherever. Now what will that string look like?

```json
"# My Website\n\nHello and welcome to *my website*. It's very cool. Here are 3 things you should know about me.\n\n1. I like cats.\n2. I like dogs.\n3. ???\n4. Profit!"
```

Ok cool! But wait... I'm coming back to this project a week later and I want to edit my markdown file... but all I saved was my JSON string! Oh no!

![alt text](https://raw.githubusercontent.com/KjellConnelly/obsidian-jsonifier/HEAD/grinch.gif)

Now what? Well, highlight the JSON string from above and use the JSON.parse() function. Now the result is copied to your clipboard as the original markdown. So paste it and edit it again.


%% README_END %%