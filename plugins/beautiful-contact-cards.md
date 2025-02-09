---
aliases:
- Beautiful Contact Cards
author:
- '[[authors/seth10|Seth Tenembaum]]'
categories:
- '[[categories/Appearence|Appearence]]'
description: Renders "contact" code blocks with tappable links for phone, social media,
  etc.
downloads: 310
mobile: true
number: 2012
stars: 3
title: Beautiful Contact Cards
type: plugin
updated: '2024-11-15T04:04:23'
url: https://github.com/seth10/beautiful-obsidian-contacts
version: 1.6.2
---

%% README_START %%

# Beautiful Contact Cards

This is a plugin for Obsidian (https://obsidian.md). It will render a contact card given the data present in a "contact" code block.

## Example
````
Some other text in your note.

```contact
name: First Last, "The Boss"
birthday: 2000/02/01
phone: 5551234567
email: user@example.com
email: work@workplace.com
insta: [username, food_insta_username]
discord: <username|1234567890123456789>
```

Some further text in your note.
````

### Output
![An Obsidian window showing a note in editing mode with a card rendered in the middle, containing a name and linked contact info](https://raw.githubusercontent.com/seth10/beautiful-obsidian-contacts/HEAD/example-output.png)

## Supported fields
- `name`
- `birthday`
- `phone`
- `email`
- `insta`
- `discord`

## Formatting details
Fields and their values are separated by a colon. Any value may may be a list, denoted by one or more commas. Brackets are optional. Extra commas or whitespace will be ignored. You can also provide additional phone numbers, emails, etc. on separate lines as long as it starts with the field name and a colon.

If you provide multiple names, any subsequent names after the first will be listed as nicknames.

If you provide a [valid birthday](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#date_string), it will be formatted and a calculated age will be displayed. If not, the provided birthday will be displayed as-is. You can set your preferences for how formatted dates are displayed in the "Beautiful Contact Cards" community plugin settings. Birthdays without a year are also supported.

Phone numbers may include a country code, but if it's excluded then +1 will be assumed. Formatting like +, (), and - may be included or excluded, but will be rendered in this standard format regardless. Each phone number will render two links: one to call, and one to message.

Emails won't be rendered if they don't appear to be a valid email address.

Instagram usernames may include or exclude the preceeding @ sign.

You may provide Discord username(s); or, if you would like a convenient link to directly to your DM with that user (works on Desktop and Mobile), you can further provide that channel ID after a pipe symbol. Angle brackets surrounding this pair are optional. For how to obtain the channel ID, please reference https://wiki.discord.id/obtain-ids/desktop. In the "Beautiful Contact Cards" community plugin settings you can decide whether you want links to open in your native client or a browser.


%% README_END %%