---
aliases:
- Canvas2Document
author:
- slnsys
author_page: https://github.com/slnsys
categories: []
description: Convert a complete Canvas to a long form document, integrating all cards,
  notes, images and other media content into a single markdown file.
downloads: 4258
mobile: false
number: 1601
title: Canvas2Document
type: plugin
updated: '2024-11-13T03:54:26'
url: https://github.com/slnsys/obsidian-canvas2document
version: 1.2.3
---

%% README_START %%

# Obsidian Canvas2Document

![Screencast](https://raw.githubusercontent.com/slnsys/obsidian-canvas2document/HEAD/images/canvas2document.gif)

Canvas2Document lets you convert any obsidian canvas structure with all content, i.e. cards, notes, media (images, YouTube videos, PDF, websites) from the 2-dimensional representation into the linear structure of a document.
The plugin helps you to pour all the elements of a novel or a complex startup plan into one document and not to have to copy all the components individually.

The plugin reads [Obsidian's](https://obsidian.md/blog/json-canvas/) [JSON Canvas File Format](https://jsoncanvas.org/) and takes the elements from the canvas with their specific metadata. The metadata can then be used to navigate and arrange the elements in the document. The connections in the canvas are replicated via metadata headers containing corresponding links in the target document.

<img src="https://raw.githubusercontent.com/slnsys/obsidian-canvas2document/HEAD/images/conv1_metabox.png" alt="metaheader" width="500"/>

# Supported embeddings
- Images: jpg, jpeg, png, gif
- Audio: mp3, ogg, wav
- Video: mp4, webm
- PDF
- Canvas

# Process and usage
The conversion process takes place in two steps:
1. First, a document is created (with command **Convert canvas to a longform document**) that integrates the elements of the canvas in manageable blocks (navigation headings are visible in the outline). The text content is not yet written into the document, but rather just embedded.
This allows the headings of cards and notes in the outline to be ignored, which in turn allows these blocks to be arranged or deleted at the canvas node level.

2. If the document is in the correct order and size, you can delete the node level navigation headings and the canvas metadata (with command **Clear canvas2document target document**) and you will receive your cleaned, converted canvas document containing all the real content level headings to continue editing the document normally.

<img src="https://raw.githubusercontent.com/slnsys/obsidian-canvas2document/HEAD/images/canvas2document.png" alt="steps"/>

You find a more in depth information in the repos [Wiki](https://github.com/slnsys/obsidian-canvas2document/wiki)

# Handling of the generated documents
An adjustment or arrangement of the documents may be necessary because Obsidian Canvas is not necessarily used as a graph with a consistent hierarchical structure, as in the figure:

<img src="https://raw.githubusercontent.com/slnsys/obsidian-canvas2document/HEAD/images/obsidian-canvas-simple.png" alt="screencomplex" width="300"/>

But an obsidian canvas can also look like this, making a simple hierarchical conversion from graph to document structure impossible:

<img src="https://raw.githubusercontent.com/slnsys/obsidian-canvas2document/HEAD/images/obsidian-canvas-complex.png" alt="screensimple" width="500"/>


# Roadmap
* Options for selecting types of elements to convert to Doc like "only notefiles", "no media"


%% README_END %%