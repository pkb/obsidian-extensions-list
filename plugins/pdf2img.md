---
aliases:
- PDF2Image
author:
- '[[authors/rasmusachr|RasmusAChr]]'
categories: []
description: Turns a PDF into a series of images.
downloads: 258
mobile: false
number: 1970
stars: 4
title: PDF2Image
type: plugin
updated: '2024-11-09T21:29:18'
url: https://github.com/rasmusachr/pdf2images
version: 1.2.7
---

%% README_START %%

# PDF 2 Images

Convert PDF pages into images and insert them directly into your Obsidian notes. Optionally, extract headers from each page and add or empty lines below each image for quick and easy-to-annotate notes.

## Demo
![demo](https://github.com/RasmusAChr/PDF2Images/blob/master/resources/demo.gif?raw=true)

## How to use

1. Activate the plugin from the Community Plugins page.
2. Open the PDF-selector by either
 	- Opening the command palette and type `Convert pdf to images`.
	- Use the ribbon in the left menu.
3. Select your PDF file and click convert.
4. The images will be inserted into your note.

## Settings
- **Image Quality**: Adjust the image quality to suit your needs. The default setting is 1x, but you can reduce it to as low as 0.5x for smaller file sizes and improved performance, or increase it up to 2x for the highest image clarity.

- **Image Insertion Method**: Choose between two different methods for inserting images:
    - Procedural: Images are generated and inserted one at a time.
    - Batch: All images are generated first, then inserted simultaneously for a more streamlined process.

- **Optional Line Between Images**: You can toggle the option to include or exclude an empty line beneath each image. 

- **Insert headers**: Toggle the option on to generate headers for each image based on pdf page analysis. This feature is in early development, so its effectiveness may vary depending on the PDF layout. I’m actively working to improve the algorithm to better detect different header types.

- **Header size**: Choose the size of the header to be inserted above each image. You can select the following options: `h1`, `h2`, `h3`,`h4`,`h5`.

- **Header extraction sensitivity**: Adjust the sensitivity of the header extraction algorithm. The default is set to `1.2`.
    - Increase this value if headers are not being detected correctly. 
    - Lower the value if non-headers are mistakenly being detected as headers. 


## Support
This plugin is free for everyone. If you'd like to show your appreciation or support further development, feel free to send a contribution my way:<br>
<a href='https://ko-fi.com/Q5Q814LKGT' target='_blank'><img height='50' style='border:0px;height:50px;' src='https://storage.ko-fi.com/cdn/kofi3.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>


%% README_END %%