---
aliases:
- At People
author:
- '[[authors/saibotsivad|saibotsivad]]'
categories:
- '[[categories/Links|Links]]'
description: Use the @ to create links to people files.
downloads: 5588
mobile: true
number: 1058
stars: 23
title: At People
type: plugin
updated: '2023-08-28T03:29:48'
url: https://github.com/saibotsivad/obsidian-at-people
version: 1.0.2
---

%% README_START %%

# Obsidian `@People`

Obsidian plugin to add that familiar @-to-tag-someone syntax:

![](https://raw.githubusercontent.com/saibotsivad/obsidian-at-people/HEAD/example.png)

When you hit enter on a suggestion, it'll create a link that looks like this:

```
The author was [[@Rich Hickey]]
```

and leave the cursor at the end.

## Options

There's not a lot to configure here, but they are important:

### 1. Where are the people files?

You probably want to group the people files in a folder.

I usually do something like this:

```
People/
	@Rich Hickey.md
	@Rich Harris.md
```

You can configure that in settings to point to somewhere else, like `Reference/People/` or whatever makes sense.

### 2. Explicit link structure?

By default, the plugin will insert the simple version:

```
[[@Rich Hickey]]
```

But you might rather make that explicit, in which case you can enable "explicit links" and they'll look like this instead:

```
[[People/@Rich Hickey.md|@Rich Hickey]]
```

### 3. Last name grouping?

For my personal Obsidian vaults, I have a lot of people with my same last name, so I put them in sub-folders for organization.

You can toggle the "last name folder" option, and it'll do that in the links.

The earlier example folder structure would be:

```
People/
	Hickey/
		@Rich Hickey.md
	Harris/
		@Rich Harris.md
```

And then the inserted link would look like:

```
[[People/Hickey/@Rich Hickey.md|@Rich Hickey]]
```

> Note: figuring out what the "last name" is (or if it even has one) is really complicated! This plugin takes a very simply approach: if you split a name by the space character, it'll just pick the last "word". So for example "Charles Le Fabre" would be "Fabre" and *not* "Le Fabre".
>
> I'm open to better implementations that don't add a lot of complexity, just start a discussion.

## Conflicts

Several plugins have conflicts with using the `@` symbol, please look at the [Github issues for plugin conflicts](https://github.com/saibotsivad/obsidian-at-people/issues?q=is%3Aissue+conflict+) to see if yours has been resolved.

## License

Published and made available freely under the [Very Open License](http://veryopenlicense.com/).


%% README_END %%