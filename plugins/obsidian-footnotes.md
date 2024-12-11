---
aliases:
- Footnote Shortcut
author:
- '[[authors/Alexis Rondeau|Alexis Rondeau]]'
- '[[authors/Micha Brugger|Micha Brugger]]'
- '[[MichaBrugger|Jason Qin]]'
categories:
- '[[categories/Note editing and formatting|Note editing and formatting]]'
description: Insert and write footnotes faster
downloads: 110893
mobile: true
number: 116
stars: 130
title: Footnote Shortcut
type: plugin
updated: '2023-08-25T10:20:09'
url: https://github.com/MichaBrugger/obsidian-footnotes
version: 0.1.3
---

%% README_START %%

# Obsidian Footnotes Plugin
![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%27obsidian-footnotes%27%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json) [![Active Development](https://img.shields.io/badge/Maintenance%20Level-Actively%20Developed-brightgreen.svg)](https://gist.github.com/cheerfulstoic/d107229326a01ff0f333a1d3476e068d) ![Release Version](https://img.shields.io/github/v/release/MichaBrugger/obsidian-footnotes)

This hotkey lets you:

- Insert a new numbered footnote marker (e.g. `[^1]`) with auto-incremented index in your text 
- Insert a new named footnote marker (e.g. `[^Citation]`) in your text
- Adds the corresponding footnote detail (e.g. `[^1]: ` or `[^Citation]: `) at the bottom of your text     
- Places your cursor so you can fill in the details quickly
- Jump from your footnote TO the footnote detail
- Jump from your footnote detail BACK to the footnote

![Overview](https://user-images.githubusercontent.com/68677082/228686351-fe71a0ec-be56-4d70-93c1-01925dd6380f.gif)

## IMPORTANT: You must to set up your footnote hotkeys

After installing and activating this plugin, you still have to SET UP your hotkeys. This is easy and quick:

`Settings -> Hotkeys -> Search for "Footnote" -> Customize Command -> Your preferred hotkeys`

I personally use: 
- <kbd>Alt</kbd>+<kbd>0</kbd> as my auto-numbered footnote hotkey
- <kbd>Alt</kbd>+<kbd>-</kbd> as my named footnote hotkey

![Hotkey](https://user-images.githubusercontent.com/68677082/228659877-8ea81271-37c4-4fdf-99de-1d4b6ca1c85f.png)

If you would like, you can further customize the plugin's behavior in Footnote Shortcut Settings. 

## Feature Details
### Numbered Footnotes
#### Scenario: No previous numbered (e.g. "[^1]") footnotes exist:
- Given my cursor is where I want a numbered footnote to exist (e.g. `Foo bar baz▊`)
- When I hit `auto-numbered footnote hotkey`
- Then a new footnote marker (e.g. `[^1]`) is inserted where my cursor was (e.g. `Foo bar baz[^1]`)
- And a new footnote details marker (e.g. `[^1]: `) is inserted on the last line of the document
- And my cursor is now placed at the end of the detail marker (e.g. `[^1]: ▊`)

#### Scenario: Previous numbered (e.g. "[^1]") footnotes exist:
- Given there is one or more numbered footnotes in my text 
- And my cursor is where I want a numbered footnote to exist (e.g. `Foo bar[^1] baz▊`)
- When I hit `auto-numbered footnote hotkey`
- Then a new footnote marker with the next numbered index (e.g. `[^2]`) is inserted where my cursor was (e.g. `Foo bar[^1] baz[^2]`)
- And a new footnote details marker (e.g. `[^2]: `) is inserted on the last line of the document
- And my cursor is now placed at the end of the detail marker (e.g. `[^2]: ▊`)

### Named Footnotes
#### Scenario: Add a named footnote:
- Given my cursor is where I want a named footnote to exist (e.g. `Foo bar baz▊`)
- When I hit `named footnote hotkey`
- Then an empty footnote marker (e.g. `[^]`) is inserted around my cursor (e.g. `Foo bar baz[^▊]`)
- Then, I fill in the name I want (e.g. `Foo bar baz[^customName]`)
- When I hit `named footnote hotkey` again
- A matching footnote details marker (e.g. `[^customName]: `) is inserted on the last line of the document
- And my cursor is now placed at the end of the detail marker (e.g. `[^customName]: ▊`)

### Universal
#### Footnote Autosuggest
- automatically suggests similar footnotes to save you time when typing repeated footnotes

![ezgif com-video-to-gif (1)](https://github.com/MichaBrugger/obsidian-footnotes/assets/68677082/f93f8828-f199-40a3-a9c3-0614bdb96e5b)

#### Footnote Section Heading
- automatically adds a customizable heading separating your footnotes from the rest of your note
- disabled by default

![ezgif com-video-to-gif](https://github.com/MichaBrugger/obsidian-footnotes/assets/68677082/6e53a654-eac0-4077-a2cf-fc76d5ef3961)

#### Scenario: Jumping TO a footnote detail
- Given I'm on a footnote detail line (e.g. `[^1]: ▊`)
- When I hit `auto-numbered footnote hotkey` OR `named footnote hotkey`
- Then my cursor is placed right after the *first* occurence of this footnote in my text (e.g. `[^1]▊`)

#### Scenario: Jumping BACK to a footnote
- Given I'm on - or next to - a footnote (e.g. `[^1]▊`) in my text
- When I hit `auto-numbered footnote hotkey` OR `named footnote hotkey`
- Then my cursor is placed to the right of the footnote (e.g. `[^1]: ▊`)

## More Info

- For more information, please check the [plugin wiki](https://github.com/MichaBrugger/obsidian-footnotes/wiki). 
  - [Overview of how footnotes work in Obsidian](https://github.com/MichaBrugger/obsidian-footnotes/wiki/Footnote-Functionality)
  - [Debug Guide](https://github.com/MichaBrugger/obsidian-footnotes/wiki/Debug-Guide)

## Other Recommended Plugins

- If you're looking for the capability to "Automatically Re-Index Footnotes", check out the [Linter plugin](https://github.com/platers/obsidian-linter), which has the ability to re-index all your footnotes based on order of occurrence every time a note is changed or saved. 

## Background
This plugin is based on the great idea by [jacob.4ristotle](https://forum.obsidian.md/u/jacob.4ristotle/summary) posted in the ["Footnote Shortcut"](https://forum.obsidian.md/t/footnote-shortcut/8872) thread.

> **Use case or problem:**
>
> I use Obsidian to take school notes, write essays and so on, and I find myself needing to add frequent footnotes. Currently, to add a new footnote, I need to:
> - scroll to the bottom to check how many footnotes I already have
> - type [^n] in the body of the note, where n is the next number
> - move to the end of the note, type [^n] again, and then add my citation.
>
> **Proposed solution:**
>
> It would be convenient to have a shortcut to automate these steps. In particular, I envision that the shortcut would:
> Using the smallest natural number n that has not yet been used for a footnote
> - add `[^n]` at the insertion point
> - add `[^n]: ` to the end of the note, and move the insertion point there.


%% README_END %%