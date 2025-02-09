---
aliases:
- Journal Folder
author:
- '[[authors/chfourie|Charl Fourie]]'
categories:
- '[[categories/Journalling|Journalling]]'
description: Utilities for folder-based journaling
downloads: 1397
mobile: true
number: 1796
stars: 18
title: Journal Folder
type: plugin
updated: '2024-10-07T20:53:39'
url: https://github.com/chfourie/obsidian-journal-folder
version: 1.2.2
---

%% README_START %%

# Journal Folder Plugin

This plugin provides utilities for use with folder based journaling.  The term _"folder based journaling"_ implies the ability to use any arbitrary folder within an _Obsidian_ vault as a journal.

There's no special setup that need to be performed for this folder.  Simply start creating notes using a pre-defined naming convention to indicate the journal note type and the date range represented by the note.  All notes within this folder that adheres to the aforementioned naming convention will be seen and handled as part of the journal represented by the folder.

_Folder based journaling_ enables the user to maintain multiple arbitrary journals within the same vault as opposed to the model where only one folder within the vault is allocated for journal entries of a specific type.  This opens up a range of possibilities.  As an example, a project worked on for a client can have it's own journal which can then be used for reporting to the client.

It should be noted that, as with the initial releases of this plugin, while the date format used within files (for titles, links etc.) are configurable as per the user's preference, the file name format is fixed.  

The following journal note types are supported by the plugin:

| **Note type** | **Filename Format** | Example filename |
| ------------- | ------------------- | ---------------- |
| Daily note    | YYYY-MM-DD.md       | 2024-07-23.md    |
| Weekly note   | gggg-[W]ww.md       | 2024-W30.md      |
| Monthly note  | YYYY-MM             | 2024-07.md       |
| Yearly note   | YYYY                | 2024.md          |

> [!CAUTION]
> Please take note that, due to the way in which link resolution is handled in Obsidian, using the vault's root folder as a journal folder is not supported by this plugin.  

>[!note]
> The usage of sub-folders is not currently supported by this plugin, nor are there plans to add support for it in the foreseeable future.

The following is a list of features that have been, or are planned to be implemented in this plugin...

---
## Feature: Journal header

The _journal header_ feature is a code block processor that renders an appropriate header in a journal file.  

### Examples
Examples of rendered headers for the different supported note types are as follows:

Daily note
![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727154201.png)


Weekly note
![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727154226.png)


Monthly note
![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727154802.png)


Yearly note
![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727154342.png)

### Using the Journal Header feature
To render a header in your journal note, simply add the following to the top of your note...

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240808152226.png)

Note that the header will render correctly without the `%% EDITING %%` in the first line.   It is however recommended to include a comment line for the following reason... If the `journal-header` code block is placed on the first line, whenever you open a document in edit mode, the cursor (which defaults to the first line in the file) will start off on the code block.  This results in the code block being rendered instead of the title until the user moves the cursor off it.  This behaviour can be a bit distracting.  

By placing a comment on the first line, the cursor will fall on the comment when entering edit mode in stead of the header, providing a better user experience.   However, when switching to _reading view_, the comment is omitted, resulting in the header being rendered right at the top of the document.

As a personal preference, I like adding the word "EDITING" to the above comment as it also serves as an additional queue that the page is currently displayed in edit mode.

It is recommended to use the templating functionality provided by the __Templater__ plugin (available in the _Obsidian_ plugin store) to automatically add the above code block to new journal files.   _Templater_ can be configured to automatically add the code block to any new files created in the specified folders.

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240706113526.png)

Alternatively the _Obsidian_ core _Templates_ plugin can be used.

### Composition of a Journal header
#### Daily notes

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727125104.png)

##### Folder title
- Renders the folder title assigned to the current folder.  If no title is assigned, this line is omitted.

##### Title
- Renders the date represented by the journal note, using the specified date format for the note type.
- The date format used for the title can be configured in the _Journal Note_ plugin configuration tab (see topic on _Configuration_ later in this document).

##### Backwards link
- Renders a link to a daily note file for the closest date before the current note's date where either the note already exists, or the note's date is in the present or future.
- If none of the above exist, this link is omitted.

##### Forwards link
- Renders a link to a daily note file for the closest date after the current note's date where either the note already exists, or the note's date is in the future.
- If the current note represents yesterday, a link to today's daily note will be rendered regardless of whether the note exists or not.
- If no note can be found that meet the above criteria, this link is omitted.

##### Current year link
- If a note exists for the current note's year component, or if the current note's year component represents the current or a future year, a link to the year note is rendered.
- If the year component falls in the past and no note exists for the year component, this link is omitted.

##### Current month link
- If a note exists for the current note's month component, or if the current note's month component represents the current or a future month, a link to the month note is rendered.
- If the month component falls in the past and no note exists for the month component, this link is omitted.

##### Current week link
- If a note exists for the current note's week component, or if the current note's week component represents the current or a future week, a link to the week note is rendered.
- If the week component falls in the past and no note exists for the week component, this link is omitted.

##### Today link
- Rendered if the current note represents a different date than the current date.

#### Weekly notes

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727131319.png)

##### Folder title
- Renders the folder title assigned to the current folder.  If no title is assigned, this line is omitted.

##### Title
- Renders the week represented by the journal note, using the specified date format for the note type.
- The date format used for the title can be configured in the _Journal Note_ plugin configuration tab (see topic on _Configuration_ later in this document).

##### Backwards link
- Renders a link to a weekly note file for the closest week before the current note's week, where either the note already exists, or the note's week is in the present or future.
- If none of the above exist, this link is omitted.

##### Forwards link
- Renders a link to a weekly note file for the closest week after the current note's week, where either the note already exists, or the note's week is in the present or future.

##### Current year link
- If a note exists for the current note's year component, or if the current note's year component represents the current or a future year, a link to the year note is rendered.
- If the year component falls in the past and no note exists for the year component, this link is omitted.

##### Current month(s) link
- If a note exists for the current note's month component, or if the current note's month component represents the current or a future month, a link to the month note is rendered.
- If the month component falls in the past and no note exists for the month component, this link is omitted.
- If the weekly note's week spans over 2 months, links to both months may be displayed depending on the above criteria.

##### Today link
- Links to the daily note for the current date.
- Always rendered for weekly notes.

##### Day links for week
- Renders links or plain text labels for each day that falls in the current link's week.
- If a link exists for the day, or the day falls in the present or future, a link to the daily note is rendered.  Otherwise a plain text label is rendered.

#### Monthly notes

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727131617.png)

##### Folder title
- Renders the folder title assigned to the current folder.  If no title is assigned, this line is omitted.

##### Title
- Renders the month represented by the journal note, using the specified date format for the note type.
- The date format used for the title can be configured in the _Journal Note_ plugin configuration tab (see topic on _Configuration_ later in this document).

##### Backwards link
- Renders a link to a monthly note file for the closest month before the current note's month, where either the note already exists, or the note's month is in the present or future.
- If none of the above exist, this link is omitted.

##### Forwards link
- Renders a link to a monthly note file for the closest month after the current note's month, where either the note already exists, or the note's month is in the present or future.

##### Current year link
- If a note exists for the current note's year component, or if the current note's year component represents the current or a future year, a link to the year note is rendered.
- If the year component falls in the past and no note exists for the year component, this link is omitted.

##### Today link
- Links to the daily note for the current date.
- Always rendered for monthly notes.

##### Week links for month
- Renders links or plain text labels for each week that falls in the current link's month.
- If a link exists for the week, or the week ends in the present or future, a link to the weekly note is rendered.  Otherwise a plain text label is rendered.

#### Yearly notes

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727131909.png)

##### Folder title
- Renders the folder title assigned to the current folder.  If no title is assigned, this line is omitted.

##### Title
- Renders the year represented by the journal note, using the specified date format for the note type.
- The date format used for the title can be configured in the _Journal Note_ plugin configuration tab (see topic on _Configuration_ later in this document).

##### Backwards link
- Renders a link to a yearly note file for the closest year before the current note's year, where either the note already exists, or the note's year is in the present or future.
- If none of the above exist, this link is omitted.

##### Forwards link
- Renders a link to a yearly note file for the closest year after the current note's year, where either the note already exists, or the note's year is in the present or future.

##### Today link
- Links to the daily note for the current date.
- Always rendered for yearly notes.

##### Month links for year
- Renders links or plain text labels for each month that falls in the current link's year.
- If a link exists for the month, or the month ends in the present or future, a link to the monthly note is rendered.  Otherwise a plain text label is rendered.
#### Journal header options
All configuration settings used in rendering a journal header can be overridden on an individual header.  This is accomplished by adding any config values that should be overridden as content to the code block.  As an example, the following journal-header code block...

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727164708.png)

...would render folder title and title...

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727164813.png)

Setting names can be delimited by either spaces, dashes, or underscores.  Any uppercase/lowercase combination can be used.  As an example, all of the following front-matter declarations for the folder title are valid:
- journal-folder-title: My Awesome Project
- journal_folder_title: My Awesome Project
- JOURNAL_FOLDER_TITLE: My Awesome Project
- Journal folder title: My Awesome Project

For a list of settings that can be configured, please refer to the section on configurable settings later in this document.

> [!CAUTION]
> It should be noted that any settings configured in the code block will only apply to that code block.  If for example the journal-folder-title property is configured within the code block, it will only effect the title rendered for that header and will not determine/override the actual title assigned to the folder.

---
### Configuration
#### Vault level configuration
The _Journal Folder_ plugin includes a configuration tab that is available in Obsidian's configuration screens.  For each note type (daily, weekly, monthly, yearly), the the following is configurable....
- **Title pattern:**  The date pattern used to render the title of the note.
- Short title pattern:  The pattern used as labels for links to the note.
- Medium title pattern: The pattern used as labels for links to this note where the this note falls in a different year than the note where the link is situated.  This pattern should typically be similar to the short title pattern, but should contain the year also to make the change in year explicit.

> [!CAUTION]
> As previously noted, the filename format for journal files isn't configurable in the first releases of this plugin.  The filename format used for weekly note files is `gggg-[W]ww`.  It is therefore important that, when setting up custom title patterns for weekly note titles and adding a year component, only 'gggg' or 'gg' should be used.  Any other variant used (e.g. yyyy, YYYY, GGGG, GG etc.) will result in discrepancies between the date in the filename and the date displayed to the user.


![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240706165831.png)
  
#### Folder level configuration
All configuration settings can be overridden at folder level.  This is accomplished by creating a note named "journal-folder" in the folder to be configured, and then adding any config values that should be overridden as front matter.

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240727162726.png)

Setting names can be delimited by either spaces, dashes, or underscores.  Any uppercase/lowercase combination can be used.  As an example, all of the following front-matter declarations for the folder title are valid:
- journal-folder-title: My Awesome Project
- journal_folder_title: My Awesome Project
- JOURNAL_FOLDER_TITLE: My Awesome Project
- Journal folder title: My Awesome Project

For a list of settings that can be configured, please refer to the section configurable settings below.

#### Configurable Settings

| Setting                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| daily-note-title-pattern          | The pattern used to render the title of a daily note. This pattern should not render any date/time elements shorter than a day (e.g. hour or minute). For instance, using a pattern of 'DD-HH' would not make sense as the hour component represents a fraction of the day. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>]                                                                                                                                                                                                                                                               |
| daily-noteShort-title-pattern     | The pattern used to render links to daily notes. The user should aim to keep this pattern short as multiple links may be rendered next to each other. This pattern should not render any date/time elements shorter than a day (e.g. hour or minute). For instance, using a pattern of 'DD-HH' would not make sense as the hour component represents a fraction of the day. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>]                                                                                                                                                               |
| daily-noteMedium-title-pattern    | The pattern used to render links to daily notes where the destination note falls in a different year then the current note. The user should aim to keep this pattern short as multiple links may be rendered next to each other. This pattern should not render any date/time elements shorter than a day (e.g. hour or minute). For instance, using a pattern of 'DD-HH' would not make sense as the hour component represents a fraction of the day. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>]                                                                                    |
| weekly-note-title-pattern         | The pattern used to render the title of a weekly note. This pattern should not render any date/time elements shorter than a week (e.g. day or hour). For instance, using a pattern of 'WW-DD' would not make sense as the day component represents a fraction of the week. PLEASE NOTE: for weekly patterns 'gg' or 'gggg' should be used to reflect the year. [<a href='https://momentjs.com/docs/#/displaying/format/' target='BLANK'>pattern syntax</a>]                                                                                                                                                                             |
| weekly-note-short-title-pattern   | The pattern used to render links to weekly notes. The user should aim to keep this pattern short as multiple links may be rendered next to each other. This pattern should not render any date/time elements shorter than a week (e.g. day or hour). For instance, using a pattern of 'WW-DD' would not make sense as the day component represents a fraction of the week. PLEASE NOTE: for weekly patterns 'gg' or 'gggg' should be used to reflect the year. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>]                                                                            |
| weekly-note-medium-title-pattern  | The pattern used to render links to weekly notes where the destination note falls in a different year then the current note. The user should aim to keep this pattern short as multiple links may be rendered next to each other. This pattern should not render any date/time elements shorter than a week (e.g. day or hour). For instance, using a pattern of 'WW-DD' would not make sense as the day component represents a fraction of the week. PLEASE NOTE: for weekly patterns 'gg' or 'gggg' should be used to reflect the year. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>] |
| monthly-note-title-pattern        | The pattern used to render the title of a monthly note. This pattern should not render any date/time elements shorter than a month (e.g. week or day). For instance, using a pattern of 'MM-DD' would not make sense as the day component represents a fraction of the month. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>]                                                                                                                                                                                                                                                             |
| monthly-note-short-title-pattern  | The pattern used to render links to monthly notes. The user should aim to keep this pattern short as multiple links may be rendered next to each other. This pattern should not render any date/time elements shorter than a month (e.g. week or day). For instance, using a pattern of 'MM-DD' would not make sense as the day component represents a fraction of the month. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>]                                                                                                                                                             |
| monthly-note-medium-title-pattern | The pattern used to render links to monthly notes where the destination note falls in a different year then the current note. The user should aim to keep this pattern short as multiple links may be rendered next to each other. This pattern should not render any date/time elements shorter than a month (e.g. week or day). For instance, using a pattern of 'MM-DD' would not make sense as the day component represents a fraction of the month. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>]                                                                                  |
| yearly-note-title-pattern         | The pattern used to render the title of a yearly note. This pattern should not render any date/time elements shorter than a year (e.g. month, week or day). For instance, using a pattern of 'YYYY-MM' would not make sense as the month component represents a fraction of the year. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>]                                                                                                                                                                                                                                                     |
| yearly-note-short-title-pattern   | The pattern used to render links to yearly notes. The user should aim to keep this pattern short as multiple links may be rendered next to each other. This pattern should not render any date/time elements shorter than a year (e.g. month, week or day). For instance, using a pattern of 'YYYY-MM' would not make sense as the month component represents a fraction of the year. [<a href='https://momentjs.com/docs/#/displaying/format/' target='_blank'>pattern syntax</a>]                                                                                                                                                     |
| user-folder-name-as-default-title | Indicates whether the folder name should be used as default title for the journal folder.  Value can be either true or false.  If true, and no journal-folder-title is configured at folder level, the folder name will be used as title.                                                                                                                                                                                                                                                                                                                                                                                               |
| journal-folder-title              | The journal folder title is used in the rendering of journal headers as well as to identify the folder in other views. The journal folder title should typically be configured at folder level (i.e. as a front-matter property in the `journal-folder` note in the applicable folder).                                                                                                                                                                                                                                                                                                                                                 |

#### Journal folder title configuration
A title can be assigned to a journal folder.  This title will be displayed in the header, and will also be used as label for the folder in various other views.  The title for a folder will be determined as follows:
- If the title is configured at folder level (as described earlier in this document), that title will be used for the folder.
- Otherwise, if the `user-folder-name-as-default-title` property is set to `true` ("Use folder name as default title" in global configuration), the folder name will be used as title.
- Otherwise the value will be seen as `empty`.

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240809094217.png)

---
## Planned Feature: Journal Folder view
This plugin view will provide a view context sensitive the note currently active in the editor.  The following components will be provided by the view...
- The calendar folder title assigned to the folder where the currently active note resides.  If no title has been assigned, the folder path will be displayed in stead.
- A calendar similar to the [calendar plugin](https://github.com/liamcain/obsidian-calendar-plugin) written by __Liam Cain__.  The biggest difference from Liam's plugin will be that the folder of the currently active note will be used for rendering the calendar.
- An option to configure the folder level settings for the folder of the currently active note.  Selecting this feature will open a dialog where these settings can be update.  Folder level settings are retrieved from and stored as front matter in a note named `journal-folder` within the folder of the currently active note.  If the `journal-folder` note does not exist yet, it will be created on submission of the updated folder level settings.
- A task view that will be rendered based on the currently active note.  
	- Tasks will be limited to those defined in the folder of the currently active note.
	- The date range depicted by the note (year, month, week, day or n/a) will determine which tasks are rendered and how/where the individual task are rendered.

![](https://raw.githubusercontent.com/chfourie/obsidian-journal-folder/HEAD/documents/attachments/Pasted%20image%2020240809123010.png)
(Please note that the above image is just a rough estimate and by no means accurate reflection of the final artefact)

%% README_END %%