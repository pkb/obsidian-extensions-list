---
aliases:
- JS Engine
author:
- '[[mProjectsCode|Moritz Jung]]'
categories: []
description: Run JavaScript from within your notes.
downloads: 14610
mobile: true
number: 1141
stars: 89
title: JS Engine
type: plugin
updated: '2024-11-04T21:16:21'
url: https://github.com/mProjectsCode/obsidian-js-engine-plugin
version: 0.1.20
---

%% README_START %%

# Obsidian JS Engine Plugin

This plugin for Obsidian allows you to run JavaScript from within your notes using special code blocks.

## Usage

Start by creating a code block with `js-engine` as the code block language.
Inside the code block you can write what ever JavaScript code that you want.
The plugin will run the JavaScript and render the returned value in place of the code block.

````md
## This is a Note in Obsidian

```js-engine
return engine.markdown.create('*test*');
```
````

## API Docs

Docs are available [here](https://www.moritzjung.dev/obsidian-js-engine-plugin-docs/).

## Examples

### Markdown Builder

```js
let markdownBuilder = engine.markdown.createBuilder();

markdownBuilder.createHeading(2, 'Test Heading');
markdownBuilder.createParagraph('This is a test paragraph.');

markdownBuilder.createHeading(3, 'This is a sub heading');
markdownBuilder.createHeading(4, 'This is a sub sub heading');
markdownBuilder.createParagraph('This is another test paragraph.');

return markdownBuilder;
```

#### Output

> ## Test Heading
>
> This is a test paragraph.
>
> ### This is a sub heading
>
> #### This is a sub sub heading
>
> This is another test paragraph.

### Rendering Strings as Markdown

```js
let str = '*test*';
return str;
```

```js
let str = '*test*';
return engine.markdown.create(str);
```

The top example renders the string as plain text and the second one renders the text as markdown.

#### Output

> \*test\*

> _test_

### Importing JS

```js
let lib = await engine.importJs('lib.js');
return lib.getGreeting();
```

With a file named `lib.js` in the root of the vault.

```js
export function getGreeting() {
	return 'Hello!';
}
```

#### Output

> Hello!


%% README_END %%