---
aliases:
- Barcode Generator
author:
- '[[authors/noxonad|noxonad]]'
categories: []
description: Generates customizable barcodes into your notes.
downloads: 2545
mobile: true
number: 1263
stars: 8
title: Barcode Generator
type: plugin
updated: '2024-01-07T22:53:29'
url: https://github.com/noxonad/obsidian-barcode-generator
version: 1.1.0
---

%% README_START %%

Obsidian Barcode Generator
==========================

A plugin for [obsidian](https://obsidian.md/) that generates and displays barcodes in different variations. It uses the [JsBarcode](https://github.com/lindell/JsBarcode) plugin to generate the barcode.

For a plugin that generates qr codes, you might check [this repository](https://github.com/rudimuc/obsidian-qrcode).

## Installation

### From Obsidian

You can activate this plugin within Obsidian by doing the following:

  - Open Settings > Comunity Plugins;
  - Make sure the Restricted Mode is off;
  - Click on Browse community plugins;
  - Search for "Barcode";
  - Click Install;
  - Don't forget to enable it before using.

### Mobile

This plugin works on mobile as well. The installation processs is the same as on desktop.

### Manual Installation

You can download this plugin manually from the [latest releases](https://github.com/noxonad/obsidian-barcode-generator/releases). Copy the `main.js` and `manifest.json` into `<vault>/.obsidian/plugins/obsidian-barcode`. Then you can enable the plugin from `Comunity Plugins` in obsidian.

## Usage

For an insertion of the default barcode, you can use the following codeblock structure:
````markdown
```barcode
content
```
````

If you want to select a specific type of barcode, you can type dash and then the barcode types:

````markdown
```barcode-code128
content
```
````

If you want to make a barcode different from the sandard settings, this can be done using `barcode-custom`:
````markdown
```barcode-custom
lineColor: #fff
height: 10
format: pharmacode
1341
```
````

> Note: after changing the options, the barcodes on the page won't be refreshed.

### Barcodes

As for now, the following barcodes are supported:
| Codeblock          | Name       | Description                                                                                                                                                                                                      | Image                             |
| ------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| barcode-code128    | Code 128   | Automatic selection of Code 128. It has a range of 30 characters or 60 digits.                                                                                                                                   | ![code128](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/code128.png)       |
| barcode-code128a   | Code 128 A | Encodes ASCII characters 00 to 95 (0–9, A–Z and control codes), special characters, and FNC 1–4.                                                                                                                 | ![code128a](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/code128a.png)     |
| barcode-code128b   | Code 128 B | Encodes ASCII characters 32 to 127 (0–9, A–Z, a–z), special characters, and FNC 1–4.                                                                                                                             | ![code128b](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/code128b.png)     |
| barcode-code128c   | Code 128 C | 00–99 (encodes two digits with a single code point) and FNC1.                                                                                                                                                    | ![code128c](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/code128c.png)     |
| barcode-ean13      | EAN-13     | Encodes 13 digits. Used in labeling products. The last digit is a checksum. If the last digit is not specified, it'll be automatically generated.                                                                | ![ean13](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/ean13.png)           |
| barcode-upc        | UPC        | Encodes 12 digits. Used in labeling products. The last digit is a checksum. If the last digit is not specified, it'll be automatically generated.                                                                | ![upc](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/upc.png)               |
| barcode-ean8       | EAN-8      | Encodes 8 ditis. The last digit is a checksum. If the last digit is not specified, it'll be automatically generated.                                                                                             | ![ean8](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/ean8.png)             |
| barcode-ean5       | EAN 5      | Encodes 5 digits.                                                                                                                                                                                                | ![ean5](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/ean5.png)             |
| barcode-ean2       | EAN 2      | Encodes 2 digits.                                                                                                                                                                                                | ![ean2](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/ean2.png)             |
| barcode-code39     | Code 39    | Encodes numbers, uppercase letters and a number of special characters (`-`, `.`, `$`, `/`, `+`, `%`, and `space`)                                                                                                | ![code39](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/code39.png)         |
| barcode-itf4       | ITF-14     | Encodes 14 digits. The last digit is a checksum. If the last digit is not specified, it'll be automatically generated.                                                                                           | ![itf14](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/itf14.png)           |
| barcode-msi        | MSI        | Encodes digits.                                                                                                                                                                                                  | ![msi](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/msi.png)               |
| barcode-msi10      | MSI 10     | Encodes digits. The checksum modulo 10 is done automatically.                                                                                                                                                    | ![msi10](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/msi10.png)           |
| barcode-msi11      | MSI 11     | Encodes digits. The checksum modulo 11 is done automatically.                                                                                                                                                    | ![msi11](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/msi11.png)           |
| barcode-msi1010    | MSI 1010   | Encodes digits. The checksum modulo 1010 is done automatically.                                                                                                                                                  | ![msi1010](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/msi1010.png)       |
| barcode-msi1110    | MSI 1110   | Encodes digits. The checksum modulo 1110 is done automatically.                                                                                                                                                  | ![msi1110](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/msi1110.png)       |
| barcode-pharmacode | Pharmacode | Encodes numbers from 3 to 131070.                                                                                                                                                                                | ![pharmacode](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/pharmacode.png) |
| barcode-codabar    | Codabar    | Encodes numbers and a number of special characters (`–`, `$`, `:`, `/`, `+`, `.`). You can set start and stop characters to `A`, `B`, `C` or `D` but if no start and stop character is defined `A` will be used. | ![codabar](https://raw.githubusercontent.com/noxonad/obsidian-barcode-generator/HEAD/img/codabar.png)       |

Note that some barcodes have certain limitation of the content, and if the provided contents doesn't match them, the barcode won't be displayed. For more details about the barcodes, you can check out [this resource](https://github.com/lindell/JsBarcode/wiki).

%% README_END %%