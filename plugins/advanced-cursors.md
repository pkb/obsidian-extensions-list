---
aliases:
- Advanced Cursors
author:
- '[[authors/SkepticMystic|SkepticMystic]]'
categories:
- '[[categories/Note editing and formatting|Note editing and formatting]]'
description: Use multiple cursors even more powerfully.
downloads: 15249
mobile: false
number: 332
stars: 105
title: Advanced Cursors
type: plugin
updated: '2022-01-09T00:47:09'
url: https://github.com/SkepticMystic/advanced-cursors
version: 0.5.1
---

%% README_START %%

# Advanced Cursors

Advanced Cursors adds new commands to Obsidian which let you take more advantage of [multiple cursors](https://help.obsidian.md/How+to/Working+with+multiple+cursors).

This plugin pairs really well with `@spslater`'s [Cursor Position plugin](https://github.com/spslater/obsidian-cursor-location-plugin)

## Commands

### Move to next instance of current selection

This command takes the text you currently have selected (or selects the word under the cursor if nothing is selected), and moves the cursor to the next instance of that same text.

![](https://raw.githubusercontent.com/SkepticMystic/advanced-cursors/HEAD/Assets/cursors-readme1.gif)

If no next instance is found, it will loop back to the beginning of the note.

### Add next instance of current selection to selections

This command does mostly the same as the previous, except it keeps your previous cursor selections in place.
Similarly, if no next instance is found, it will loop back to the beginning of the note.

This does the same thing as `Ctrl + d` in VS Code.

![](https://raw.githubusercontent.com/SkepticMystic/advanced-cursors/HEAD/Assets/cursors-readme2.gif)

### Move to previous instance of current selection

Same as [Move to next instance of current selection](https://github.com/SkepticMystic/advanced-cursors/blob/master/README.md#Move-to-next-instance-of-current-selection), except going backwards.

### Add previous instance of current selection to selections

Same as [Add next instance of current selection to selections](https://github.com/SkepticMystic/advanced-cursors/blob/master/README.md#Add-next-instance-of-current-selection-to-selections), except going backwards.

### Copy Line Up/Down

This command copies the currently selected lines up or down depending on which option you choose.

Like `Alt + Shift + ↑/↓` in VS Code.

### Inserting incrementing value at eachc ursor

Running this command opens a modal which lets you choose a `start` number, and an increment `inc`. On submitting, Advanced Cursors will **overwrite** each of your current selections with an incrementing value starting from `start` and incrementing by `inc` each cursor.

Both `start` and `inc` can be arbitray real numbers. The resulting number will be rounded to 4 decimals.

![](https://raw.githubusercontent.com/SkepticMystic/advanced-cursors/HEAD/Assets/AC-IncrementingI.gif)

### Open Regex match modal

This command allows even more fine-grained control of where you place the cursor.

When you open the modal, you will see a text input field, and submit button, and an option to toggle `Regex`.

![image](https://user-images.githubusercontent.com/70717676/138410766-7c3b2843-5761-4c57-a09f-e0edceb4cc41.png)

Enter a search query into the input field, and Advanced Cursors will place a cursor at each place in the current document that matches the query.

Toggle `Regex?` for the query to be treated as a regex, or a string literal.

![](https://raw.githubusercontent.com/SkepticMystic/advanced-cursors/HEAD/Assets/cursors2.gif)

You can now also use [Saved Queries](https://github.com/SkepticMystic/advanced-cursors/blob/master/README.md#saved-queries) to quickly run queries.

## Saved Queries

In the settings tab of Advanced Cursors, you will see an interface allowing you to `Add New Query`. This allows you to set up a query (regex or literal) to quickly access from the [Match Modal](https://github.com/SkepticMystic/advanced-cursors/blob/master/README.md#open-regex-match-modal), or run as an Obsidian command from the command palette.

In the `Add New Query` modal, you have 4 options:

1. The `name` of the query,
2. The actual `query` itself,
3. Any [regex flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags) to apply to the query (if it is a regex),
   - The `g` flag is automatically added, but it won't break if you add it yourself.
4. A toggle to say if the `query` should be interpretted as a regex or literal string.

![image](https://user-images.githubusercontent.com/70717676/138410689-e0846afa-3f9e-4bcd-9fa0-27679416a2e1.png)

### Running Saved Queries

After adding a query, it will appear in a list of saved queries in settings:

![image](https://user-images.githubusercontent.com/70717676/138498450-03d966e6-4f90-4165-944f-64a1e8380610.png)

In the Match Modal (Simply click the query to run it):

![image](https://user-images.githubusercontent.com/70717676/138410277-b3b0ebb0-15f0-45a2-ac1e-54578bc68c9b.png)

As well as in the command palette:

![image](https://user-images.githubusercontent.com/70717676/138410368-bc063007-f3a6-4c4c-b7a4-2f24ebcd3748.png)

## Query Examples

The following is a list of queries created by users of the plugin:

#### Unfinished Tasks

```re
/^- \[ ] .*$/m
```

#### Completed Tasks

```re
/^- \[x] .*$/m
```

#### Bullet List followed by Numbered List

```re
/^- +[\d\w][\.\)] /m
```

Matches a bullet point followed by a numbered bullet:

- `- 1. `
- `- 1) `
- `- a. `
- `- a)`

Having both is usually redundant, so this allows you to remove one or the other.

#### Disjoint Bullet Items

```re
/\n\n>? ?[-\d]+\.?/
```

If you prefer bullet points to not have an extra line between them, use this to find offending bullet points.

```md
- 1

- 2

- 3
```

#### Select Sentences

```re
/\b.*?\.(?=\s|$)/m
```

Select the shortest string between a word boundary `\b` and a fullstop `\.`

#### DOIs

```re
/10\.[^\s]+\/[^\s]*\w/
```

#### URLs

```re
/\b((?:[a-z][\w-]+:(?:/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|(([^\s()<>]+|(([^\s()<>]+)))))+(?:(([^\s()<>]+|(([^\s()<>]+))))|[^\s`!()[]{};:'".,<>?«»“”‘’]))/
```

#### Copy DEVONthink Link to Clipboard

```re
/\[Line\s\d{1,2}\]\(x-devonthink-item:\/\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}\?line=\d{1,2}\)/
```

- Look for all DT links in the note and copy then to clipboard;
- Delete `\(x-devonthink-item:\/\/\w{8}-\w{4}-\w{4}-\w{4}-\w{12}\?line=\d{1,2}\)`
- Paste in the end of the note.

#### Capture all Highlights

```re
/==.*?==/

```

#### Capture a Specific HTML Tag

```re
/(?<=id="green">).*?(?=\<)/
```

### Navigation Queries

#### Navigate between Headers

```re
/^#+.*?$/m
```

#### Navigate between Backlinks (do not include block refs)

```re
/(?<=\[\[)(?!.*#\^).*(?=\]\])/
```

#### Navigate to a specific tag

```re
/#Tag/
```


%% README_END %%