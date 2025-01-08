---
aliases:
- Simple Quiz
author:
- '[[authors/IvanKalmar|Ivan Kalmar]]'
categories: []
description: Creating simple quizzes.
downloads: 193
mobile: true
number: 2041
stars: 2
title: Simple Quiz
type: plugin
updated: '2024-12-19T23:56:05'
url: https://github.com/IvanKalmar/simple-quiz
version: 0.2.10
---

%% README_START %%

<p align="center">
<img src="documentation/media/header.svg" style="width: 90%;">
</p>

<p align="center">
<img src="https://img.shields.io/badge/Obsidian-%23483699.svg?style=for-the-badge&logo=obsidian&logoColor=white" />
<img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" /> 
<img src="https://img.shields.io/static/v1?label=License&message=MIT&color=3DDC84&style=for-the-badge" /> 
<img src="https://img.shields.io/static/v1?label=Version&message=0.2.10&color=3DDC84&style=for-the-badge" />
<img src="https://img.shields.io/static/v1?label=Status&message=Unstable&color=yellow&style=for-the-badge" />
</p>

# Spaced repetition using flashcards

## Summary:
- Only manual input cards are supported;
- Support loading with js or by json;
- Works on mobile devices (Tested on android);
- Can run the quiz directly in the note by using `quiz` markdown block.
- Shows the current steak, the number of repeated cards and the number of quizzes for the day;
- Shows charts with month, year, and cards progression;
- Enabling grouping by conditions;


## Demo
<p align="center">
<img src="https://raw.githubusercontent.com/IvanKalmar/simple-quiz/HEAD/documentation/media/demo.gif" style="width: 70%;">
</p>

## Card fields
```json5 
{
	id: "uniqueID",  // Card unique id, if empty create automatically, using question data;
	question: {
		left: ['Question', ...],  // Left question options;
		right: ['Answer', ...]  // Right question options;
	},
	pool: "pool",  // Card pool;
	tags: ["tag1", "tag2", ...],  // Array of tags;
	defaultSide: "left",  // If card not reversible, then that side will be considered questions;
	notReversible: true  // If card reversible, then the questions and answers will switch places;
}
```

## Definition
<details>
<summary><b>JSON</b></summary>

~~~
```quizjson
[
  {
	"question": {
		"left": ["question1", "subQuestion1"],
		"right": ["answer1", "answer2", "answer3"]
	},
	"pool": "testPool1",
	"tags": ["exampleTag1", "exampleTag2", "exampleTag3"],
	"notReversible": true
  }
]
```
~~~

</details>

<details>
<summary><b>JS</b></summary>

Must be enabled from settings. <br/>
In the code `fc` object is available with two methods:
- `addCard(flashcard);` - Adds a card, if it is not valid performs an exception.
- `commit();` - Must be called after all cards have been added.

~~~
```quizjs

for(let i = 0; i < 100; i++) {
	fc.addCard({
		question: {
			left: [`question${i}`],
			right: [`answer${i}`]
		},
		pool: "testPool2",
		tags: [`exampleTag${i}`]
	});
}

fc.commit();
```
~~~

</details>




## Running quiz
There are several ways to start a quiz:
1. Using the `Simple Quiz:Run quiz!` menu command;
2. Using play icon button in menu;
3. Using start button in card placeholder, or today statistics, if the minify mode is not activated;
4. Insert `quiz` markdown block, who render inline quiz form;

Depending on where the quiz was launched from, the set of cards will be different:
1. Quiz from icon in menu, by command, or today statistics, all available cards will be loaded;
2. Launching from the placeholder, only cards declared in it will be loaded;
3. If start from `quiz` markdown block, by default  it will load all possible cards, but you can customize with `sources` argument;

If saving results is enabled, the cards will be sorted by success, otherwise they will be randomly mixed.


## More
[Markdown blocks description](documentation/MarkdownBlocks.md) <br/>
[Groups description](documentation/Groups.md) <br/>
[Examples of usage](documentation/examples/Example.md)


## Manually installing the plugin
Copy over `main.js`, `styles.css`, `manifest.json`, to `<vault>/.obsidian/plugins/simple-quiz/`


## TODO
- [ ] Add new card types
  - [ ] Manually cards
  - [ ] Matching cards
  - [ ] Option select cards
- [ ] Add images to cards


## Third-party libraries
[Chart.js](https://github.com/chartjs/Chart.js)


%% README_END %%