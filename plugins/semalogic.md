---
aliases:
- UseSemaLogic
author:
- '[[MM-GO|SemaLogic UG]]'
categories: []
description: Real-time use of the SemaLogic formal language
downloads: 1251
mobile: true
number: 1384
title: UseSemaLogic
type: plugin
updated: '2024-07-16T21:59:14'
url: https://github.com/MM-GO/UseSemaLogic
version: 2.1.4
---

%% README_START %%

# Obsidian SemaLogic PlugIn

It is possible to use SemaLogic (<https://semalogic.de>) in Obsidian (<https://obsidian.md>).

SemaLogic is a symbolic AI, that can be adapted to natural language in order to represent logical relationships unambiguously in a coherent language that is both computer and user understandable. The three forms of SemaLogic (natural language, technical language and practical representation) can be converted into each other at any time without loss of logical relationships in the understanding of the respective user.

**Note:** The SemaLogic-Obsidian API is still in early alpha and is subject to change at any time!

Currently the plugin is in development status and for testing SemaLogic to show technical language, graphical pictures in realtime and e.g. part of the SVGs in pdf directly.

## First use cases for pdf-display

First SemaLogic Commands which are available are

1. Show technical language in seperate view (through a dice on left side controls)
2. Preview-HTML-Commands by using "SemaLogic()" e.g.

- Show Help
- Show Version
- Set Dialect with template

3. Hand over the results of SemaLogic to an asp-specified-SemaLogic-service for solving (special opportunity for developer friend)

## How to use

After installation there shoud be a first profile for connecting the SemaLogic service in the web on service.semalogic.ddns.net with default settings. Later it could be possible that there is a SemaLogic-Service running on localhost or private network, so there are more than one profile settings.

We are building an overview documentation to use the SemaLogic formal and technical language. Then it will be linked here, published on SemaLogic.de and then you are able to create to own SemaLogic realtime notes.

To test using SemaLogic - open a new notes and write following :

Note 1 - Example technical language:

OR-Rule 1|2 { Choice A, Choice B}
Choice A [AND-Rule D,E]
AND-Rule D[Choice A,F]

and see what happens in the SemaLogicView

Note 2 - Example:

Formalsprachliche Definition einer Und-Regel inkl. notwendiger SymToken - Configuration (for German Language)

Das Studium besteht aus der Abschlussarbeit, den Pflichtkursen und den Wahlmodulen.

Aus den Wahlmodulen können 2 bis 3 Alternativen der Module Geschichte 19tes Jh., moderne Geschichte, römische Geschichte oder griechische Geschichte gewählt werden.

SymTokenAndOpen≡ besteht aus
SymTokenSpace≡Das
SymTokenSpace≡der
SymTokenElement≡,
SymTokenSpace≡den
SymTokenEoS≡.
SymTokenElement≡ und

SymTokenOrOpen≡ Alternativen
SymTokenOrClose≡gewählt werden
SymTokenSpace≡Aus
SymTokenSpace≡können
SymTokenInterval≡ bis
SymTokenSpace≡der Module
SymTokenElement≡ oder


%% README_END %%