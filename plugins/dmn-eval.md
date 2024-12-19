---
aliases:
- DMN Eval
author:
- '[[authors/joleaf|JoLeaf]]'
categories: []
description: This plugin enables evaluating DMNs in an obsidian note.
downloads: 3455
mobile: false
number: 792
stars: 3
title: DMN Eval
type: plugin
updated: '2024-08-31T18:44:28'
url: https://github.com/joleaf/obsidian-dmn-eval-plugin
version: 0.5.0
---

%% README_START %%

# DMN-Eval-Plugin for Obsidian [![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/joleaf/obsidian-dmn-eval-plugin)](https://github.com/joleaf/obsidian-dmn-eval-plugin/releases) [![Release Obsidian Plugin](https://github.com/joleaf/obsidian-dmn-eval-plugin/actions/workflows/release.yml/badge.svg)](https://github.com/joleaf/obsidian-dmn-eval-plugin/actions/workflows/release.yml) [![Obsidian downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%238b6cef&label=downloads&query=%24%5B%22dmn-eval%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)](https://obsidian.md/plugins?id=dmn-eval)

This plugin lets you evaluate (execute) DMNs within your [Obsidian](https://www.obsidian.md) notes.
The DMN evaluator is based on the [dmn-engine](https://github.com/camunda/camunda-bpm-platform/tree/master/engine-dmn)
library by [Camunda](https://camunda.com/).
If you want to view DMNs in your note, look at the [DMN Plugin](https://github.com/joleaf/obsidian-dmn-plugin).

## Install ..

### .. automatically in Obsidian

1. Go to **Community Plugins** in your Obsidian Settings and **disable** Safe Mode
2. Click on **Browse** and search for "DMN Eval Plugin"
3. Click install
4. Toggle the plugin on in the **Community Plugins** tab
5. **Important:** You need [Java](https://www.java.com/en/download/help/download_options_de.html) 14 or later installed

### .. manually from this repo

1. Download the latest [release](https://github.com/joleaf/obsidian-dmn-eval-plugin/releases) `*.zip` file.
2. Unpack the zip in the `.obsidan/plugins` folder of your obsidian vault
3. **Important:** You need [Java](https://www.java.com/en/download/help/download_options_de.html) 14 or later installed

## Requirements

- [Java](https://www.java.com/en/download/help/download_options_de.html) 14 or later

## How to use

1. Add a valid `*.dmn` file to your vault (e.g., `my-diagram.dmn`) (e.g., modeled with
   the [Camunda Modeler](https://camunda.com/de/download/modeler/)).
2. Add the DMN to your note:

````
```dmn-eval
url: [[my-diagram.dmn]]
decisionId: Evaluator
variables:
  myValue1: 2
  myValue2: 3
```
````

3. All front matter data of your note are used as input for the DMN evaluation (in addition to the `variables` values).
4. If no errors occur, the output of the decision will be evaluated and printed to your note.

### Parameter

You can customize the view with the following parameters:

| Parameter       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Values                                                   |
|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------|
| url             | The url of the *.dmn file (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Relative/Absolute path, or `[[*.dmn]]` as markdown link. |
| decisionId      | An ID (or Name) of a decision table to evaluate (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String value                                             |
| title           | An optional h1 rendered before the DMN output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String value                                             |
| title1          | An optional h1 rendered before the DMN output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String value                                             |
| title2          | An optional h2 rendered before the DMN output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String value                                             |
| title3          | An optional h3 rendered before the DMN output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String value                                             |
| title4          | An optional h4 rendered before the DMN output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String value                                             |
| title5          | An optional h5 rendered before the DMN output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String value                                             |
| title6          | An optional h6 rendered before the DMN output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String value                                             |
| text            | An optional span text rendered before the DMN output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String value                                             |
| textafter       | An optional span text rendered after the DMN output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | String value                                             |
| noresultmessage | An optional message if the evaluation returns no result.                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String value (Default: "No result")                      |
| variables       | A map of variables used as input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | YAML Object                                              | - |
| template        | Render the result in a template file. The template file is another markdown file and should contain `{{result}}` where the result of the DMN evaluation is parsed. Other variables and frontmatter variables can be referenced as well (e.g., `{{variableX}}`). Furthermore, the name of the result columns of the DMN can be used to print individual values (if the DMN returns more than one column). If the DMN returns multiple rows (Hit Policy collect), than the variables can be indexed, e.g., `{{val1}}`. | Relative/Absolute path, or `[[...]]` as markdown link.   | - |

### Example

![Example](https://raw.githubusercontent.com/joleaf/obsidian-dmn-eval-plugin/HEAD/example/dmn-eval-plugin.gif)

## How to dev

1. Clone this repo into the plugin folder of a (non-productive) vault (`.obsidian/plugins/`)
2. Build DmnEvaluator (if changed):
    1. `cd DmnEvaluator && mvn --batch-mode --update-snapshots package && cd ..`
    2. `cp DmnEvaluator/target/DmnEvaluator*-jar-with-dependencies.jar DmnEvaluator.jar`
    3. Recreate the `DmnEvaluator.ts`
        - OSX: `echo "export const dmnEvaluatorBase64 = '$(base64 -i DmnEvaluator.jar)';" > DmnEvaluator.ts`
        - Linux: `echo "export const dmnEvaluatorBase64 = '$(base64 -w 0 DmnEvaluator.jar)';" > DmnEvaluator.ts`
3. `npm i`
4. `npm run dev`
5. Toggle the plugin on in the **Community Plugins** tab

## Donate

<a href='https://ko-fi.com/joleaf' target='_blank'><img height='35' style='border:0px;height:46px;' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' />


%% README_END %%