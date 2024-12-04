---
aliases:
- Multiplatform Highlights Importer
author:
- '[[wwwkieran|wwwkieran]]'
categories:
- '[[categories/Import|Import]]'
- '[[categories/Annotations and highlights|Annotations and highlights]]'
description: Import and consolidate highlights from different reading sources. Supports
  reconciling books across reading sources.
downloads: 141
mobile: false
number: 1750
stars: 1
title: Multiplatform Highlights Importer
type: plugin
updated: '2024-06-25T04:58:08'
url: https://github.com/wwwkieran/obsidian-multiplatform-highlights-import
version: 0.1.2
---

%% README_START %%

# Obsidian Multi-Platform Book Highlight Importer

This plugin pulls your highlights and annotations from various different reading sources into Obsidian. This plugin reconciles books based on ISBN or title, so if you read the same book on different devices this plugin will only create one note (per book) with all the highlights. 

### Currently supported data sources
- [x] Kobo
- [x] Apple Books (iBooks)

### Why would I use this instead of kobo-highlights-importer / apple-books-highlights-plugin etc.?
1. **Highlights/annotations of the same book made using different services will be reconciled and consolidated into one note.**
2. **Note format is standardized regardless of reading platform.** Even if you do not read the same book across multiple services, you might read different books on different services. This plugin can still help you by getting all your annotations into one standard note format. 

## How to use
1. Install the plugin, either from the Obsidian plugin library or by cloning this repo to `/your/vault/.obsidian/plugins/`.
2. Enable the plugin on the `Community plugins` page. 
3. Configure the plugin on the `Multiplatform Highlights Importer` page. Here you can enable the reading services you would like to extract from. Note that some extractor require additional configuration (see below).
4. Trigger extraction by clicking the eBook icon in the sidebar or by using the `Import multiplatform highlights` command in the command palette.

### Extractor specific configuration
#### Kobo
You need to specify the path to your `KoboReader.sqlite` database. It is located in the `/.kobo` folder on your Kobo when you plug it in to your computer. On a Mac, this would be `/Volumes/KOBOeReader/.kobo/KoboReader.sqlite`.

#### Apple Books (macOS only)
No additional configuration is necessary beyond enabling the extractor on the `Multiplatform Highlights Importer` settings page. Note that this extractor only works on macOS.

## Contributing
I would really appreciate contributions, either to develop connections to new services or to improve the note generation process (or anything else you can think of)!.

### Architecture
The modular architecture of this plugin is really what distinguishes this plugin from others in the space. 
The highlight extraction logic contains three main elements: extractors, the aggregator, and the extraction loop. 

Extractors are modular components that extract highlights from a single specific service.
They must conform to the `IExtractor` interface, which means that they must implement a function called `extractHighlights()` which returns a list of `IBookWithHighlights`.
`IBookWithHighlights` is a simple data structure representing a book with both book metadata and a list of highlights from that book. 

The aggregator is responsible for accepting lists of `IBookWithHighlights`, performing reconciliation, and outputting markdown. 
The aggregator implements a function `addBooks()` which accepts `[]IBookWithHighlights` from an extractor and adds them to the aggregator's internal map.
This function also performs reconciliation so that duplicate entries are not added to the map if the same book is extracted by multiple extractors. 
The aggregator implements a second function `outputMarkdown()` which adds markdown files to the Obsidian vault for each book in its internal map. 
This function is called once we have finished extracting from all services. 

The extraction loop ties the extractors and the aggregator together to extract the highlights and pipe them into Obsidian. 
This is the entry point when you run the `Import Book Highlights` command of this plugin.
It is quite simple: we call on each enabled extractor to produce highlights and pipe those highlights into the aggregator. 
Once we've done this for each extractor, we ask the aggregator to output markdown for all the books.
In pseudocode, the main extraction loop looks something like this: 
```
for (extractor of extractors) {
	booksWithHighlights = extractor.extractHighlights()
	aggregator.addBooks(booksWithHighlights)
}
aggregator.outputMarkdown()
```

### Why you should contribute to this plugin instead of writing your own
If you're thinking of writing your own plugin to do something with book annotations/highlights, it's likely for one of two reasons:
1) You want to import highlights from a service which does not currently have a plugin.
2) You don't like the files that an existing plugin creates and you want to create markdown files from highlights in a wildly different way. 

In both cases, I would argue that you would be better off contributing to this plugin instead of writing your own.
If you fall into camp (1), you can simply create an extractor for your service, which will require you to only write the code to extract from your service. 
The `IExtractor` interface is simple, and only requires you to implement one 
By implementing an extractor, you get all the rest of the functionality (reconciliation between services, Markdown formatting and output) for free. 
It's less work for you to create an extractor than to implement a whole plugin from scratch.

If you fall into camp (2), I'd make the same argument as (1) but in reverse. 
If you want to output markdown in a specific way, please build that in as an optional functionality on the aggregator. 
By extending the aggregator, which already maintains a map of books and highlights, you won't have to worry about sourcing the data at all. 
This means less work for you; you can focus your energies exclusively on writing code to output the files exactly the way you want them. 

### Future work
- Make extractor settings modular
- Support for article services (Pocket, Zotero)
- Specify different destination folders for different services (reconcile at the folder level, ie Kobo and Apple Books should output to the `Books` folder while Pocket and Zotero should output to the `Articles` folder)
- Specify destination folders based on tags
- More customization of note format

## Acknowledgements
I built this plugin by forking [obsidian-kobo-highlights-import](https://github.com/OGKevin/obsidian-kobo-highlights-import) because I wanted Kobo support and I liked how their output notes grouped annotations by chapter. 
I also looked at the code for [obsidian-apple-books-highlight-plugin](https://github.com/bandantonio/obsidian-apple-books-highlights-plugin) to build the Apple Books plugin. Thank you to the creators of those plugins. 


%% README_END %%