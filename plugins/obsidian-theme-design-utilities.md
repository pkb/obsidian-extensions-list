---
aliases:
- Theme Design Utilities
author:
- '[[authors/chrisgrieser|pseudometa]]'
categories: []
description: Some Utilities and Quality-of-Life Features for Designers of Obsidian
  Themes.
downloads: 15332
mobile: false
number: 367
stars: 109
title: Theme Design Utilities
type: plugin
updated: '2025-01-08T03:29:04'
url: https://github.com/chrisgrieser/obsidian-theme-design-utilities
version: 0.22.4
---

%% README_START %%

# Theme Design Utilities
![Obsidian downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22obsidian-theme-design-utilities%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json&style=plastic)
![Latest release](https://img.shields.io/github/v/release/chrisgrieser/obsidian-theme-design-utilities?label=Latest%20Release&style=plastic)

Some utilities and Quality-of-Life features for designers of
[Obsidian](https://obsidian.md/) themes.

## Table of contents

<!-- toc -->

- [Commands added](#commands-added)
	* [Mobile emulation](#mobile-emulation)
	* [Cycle between all three modes](#cycle-between-all-three-modes)
	* [Cycle through installed themes](#cycle-through-installed-themes)
	* [Light/dark mode toggle](#lightdark-mode-toggle)
	* [Freeze obsidian](#freeze-obsidian)
	* [Toggle `devtools`](#toggle-devtools)
	* [Garble text](#garble-text)
	* [`.foobar` test class](#foobar-test-class)
	* [Red outlines for debugging](#red-outlines-for-debugging)
	* [Permanent test notice](#permanent-test-notice)
	* [CSS feature compatibility (chrome version)](#css-feature-compatibility-chrome-version)
	* [Show cheatsheet](#show-cheatsheet)
- [Documentation and sample notes](#documentation-and-sample-notes)
	* [Cheatsheets](#cheatsheets)
	* [Markdown note: display your current theme colors](#markdown-note-display-your-current-theme-colors)
	* [Markdown note and CSS snippet: play with colors](#markdown-note-and-css-snippet-play-with-colors)
- [Other resources for Obsidian theme designers](#other-resources-for-obsidian-theme-designers)
	* [Obsidian plugins](#obsidian-plugins)
	* [Guides](#guides)
- [Installation](#installation)
- [About the developer](#about-the-developer)

<!-- tocstop -->

## Commands added

### Mobile emulation
Conveniently enable the mobile emulation of Obsidian, that is how Obsidian would
look on mobile. This helps with styling your theme for mobile.

### Cycle between all three modes
Cycles between Source Mode, Live Preview, and Reading Mode. Set a hotkey to
quickly check how the theme looks in all three view modes.

### Cycle through installed themes
Cycles between all installed themes. As opposed to the Theme Switcher Plugin,
this does not open a modal, but rather directly switches to the next installed
theme.

<img width=60% alt="Theme Cycling Demo" src="demo/theme-cycler.gif">

### Light/dark mode toggle
A simple command to toggle between light and dark mode. Set a hotkey to quickly
change the mode of the theme.

<img alt="Dark Mode Toggle Demo" width=60% src="https://user-images.githubusercontent.com/73286100/148293043-c16e8d32-489d-4f14-9b26-9d00c6a83901.gif">

### Freeze obsidian
Opens the `devtools` and freeze interaction with Obsidian, after a small delay.
During that delay, you can create fleeting elements like context menus or
tooltips which stays on screen.

To unfreeze Obsidian, click the "play" button which appears at the top of Obsidian.

<img alt="freezing Obsidian Demo" width=25% src="https://user-images.githubusercontent.com/73286100/144731519-2f64352e-5264-45c3-bb3c-eb05c56a8322.png">

### Toggle `devtools`
Opens/closes the `devtools` (developer console). Does the same thing as Obsidian's
built-in method of opening the `devtools`, but being available in the command
palette allows you to set a custom hotkey for it.

### Garble text
Garbles all text in the whole app. "Ungarbles" elements that are hovered. This
way you can share screenshots while maintaining privacy.

### `.foobar` test class
This command adds/removes a test class `.foobar` to the DOM-element
`.app-container`. This way you can quickly toggle some CSS on-and-off for
debugging purposes, without having to enable/disable a snippet.

```css
.app-container.foobar h1 {
	color: red;
}
```

### Red outlines for debugging
Add red outlines to all elements. Run the command again to remove the outlines.
The outlines are useful for debugging purposes, [essentially serving as the CSS
equivalent for `console.log()`](https://www.youtube.com/shorts/ii-lSK2_Nu4).

### Permanent test notice
Post a notice (notification) that stays on screen until you click it. This is
useful for styling notices, as they normally quickly fade away.

<img width=40% alt="Screenshot 2022-01-05 22 28 09" src="https://user-images.githubusercontent.com/73286100/148292139-86847227-5048-41e4-a6dc-768e4b54728b.png">

### CSS feature compatibility (chrome version)
- Displays a notice with the current Chrome version utilized by Obsidian to
  render CSS. Sites like [MDN](https://developer.mozilla.org/en-US/) or
  [W3-Schools](https://www.w3schools.com/cssref/css3_pr_overflow-y.asp) usually
  document the minimum Chrome version required for a certain CSS feature at the
  bottom of the feature's documentation page.
- On iOS, Obsidian uses the Safari engine, for which the version matches the iOS
  version the user is using. Prevalence of iOS versions – and therefore
  underlying Safari versions to target – [are published by Apple
  itself](https://developer.apple.com/support/app-store/).

If you are using [stylelint](https://stylelint.io/), you can also simply use the
nifty [stylelint-no-unsupported-browser-features
plugin](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features),
and add this to your `.stylelintrc.json`:

```json
{
	"extends": ["stylelint-config-recommended"],
	"plugins": ["stylelint-no-unsupported-browser-features"],
	"rules": [
		"plugin/no-unsupported-browser-features": [true, {
			"browsers": ["last 10 Chrome versions", "last 3 iOS versions"],
			"ignore": ["css-masks"],
			"ignorePartialSupport": true
		}],
	]
}
```

### Show cheatsheet
Open a cheat sheet showing the Obsidian CSS classes.

<img src="https://raw.githubusercontent.com/chrisgrieser/obsidian-theme-design-utilities/HEAD/cheatsheets/css-classes.png" alt="Obsidian API Model" width=40%>

## Documentation and sample notes
You can access these resources without installing the plugin.

### Cheatsheets
You can get various obsidian design cheatsheets from the [cheatsheets folder](https://github.com/chrisgrieser/obsidian-theme-design-utilities/tree/main/cheatsheets).

### Markdown note: display your current theme colors
[theme-design-utilities-current_theme.md](https://github.com/chrisgrieser/obsidian-theme-design-utilities/tree/main/color-playground/theme-design-utilities-current_theme.md)
is a markdown file that can be added to your vault to display your current theme
colors.

<img src="./demo/color-playground_note-current_theme-screenshot.png"
alt="current_theme colors note, screenshots" width=40%>

### Markdown note and CSS snippet: play with colors
The
[theme-design-utilities-colorplay.md](https://github.com/chrisgrieser/obsidian-theme-design-utilities/tree/main/color-playground/theme-design-utilities-colorplay.md)
markdown note and its [companion CSS
snippet](https://github.com/chrisgrieser/obsidian-theme-design-utilities/tree/main/color-playground/theme-design-utilities-colorplay.md)
display colored boxes. The note should be added to your vault, and the CSS
snippet to your snippet collection. You can change the colors by editing the CSS
snippet, or using the [Style Settings
plugin](https://github.com/mgmeyers/obsidian-style-settings).

<img src="./demo/color-playground_note-colorplay-screenshot.png" alt="colorplay
colors note, screenshot" width=40%>

## Other resources for Obsidian theme designers

### Obsidian plugins
- [My Snippets](https://github.com/chetachiezikeuzor/MySnippets-Plugin)
- [Theme Picker](https://github.com/kenset/obsidian-theme-picker)
- [Print Preview](https://github.com/nothingislost/obsidian-print-preview) (unlisted)
- [Theme
  Hot-Reload](https://github.com/mProjectsCode/obsidian-theme-hot-reload-plugin)
  (unlisted)

### Guides
- [Overview of Resources and Guides for Theme Designers](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/for+Theme+Designers)
- [Why and How to use Stylelint for your Obsidian Theme](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/Why+and+How+to+use+Stylelint+for+your+Obsidian+Theme)
- [Want some Sass with your obsidian theme? Here's How and Why](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows%2C+%26+Courses/Guides/Want+some+Sass+with+your+obsidian+theme%E2%80%BD+here's+How+and+Why)
- [How to Use Obsidian 1.0 CSS Variables](https://www.youtube.com/watch?v=yl0pvIRTWWo)

## Installation
This plugin is available in Obsidian's Community Plugin Browser: `Settings` →
`Community Plugins` → `Browse` → Search for *"Theme Design Utilities"*

## Build

```bash
npm install
node .esbuild.mjs
```

## About the developer
In my day job, I am a sociologist studying the social mechanisms underlying the
digital economy. For my PhD project, I investigate the governance of the app
economy and how software ecosystems manage the tension between innovation and
compatibility. If you are interested in this subject, feel free to get in touch.

- [Website](https://chris-grieser.de/)
- [Mastodon](https://pkm.social/@pseudometa)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'><img height='36'
style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3'
border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>


%% README_END %%