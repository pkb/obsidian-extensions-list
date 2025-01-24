---
aliases:
- Clojure Plugin Host
author:
- '[[authors/farcaller|Vladimir "farcaller" Pouzanov]]'
categories: []
description: A Clojure plugin host, allowing the creation of simple Clojure-based
  plugins right inside the editor.
downloads: 14
mobile: true
number: 2121
stars: 5
title: Clojure Plugin Host
type: plugin
updated: '2024-10-07T02:18:59'
url: https://github.com/farcaller/obsidian-clojure-plugin-host
version: 0.1.0
---

%% README_START %%

# Clojure Plugin Host for Obsidian

This plugin allows one to author simple plugins written in Clojure
([SCI](https://github.com/babashka/sci) specifically) directly inside Obsidian.

## Usage

As of 0.1, this plugin requires `Dataview` plugin to be installed. To create a
new plugin, add a note like this:

    ---
    tags:
      - clojure-plugin
    ---
    ```clojure

    (defn on-ribbon
      []
      (let [Notice (.-Notice obsidian/exports)]
        (Notice. "A notice from Clojure!")))

    (defn on-load
      [plugin]
      (prn "hello plugin!")
      (let [status-bar-el (.addStatusBarItem plugin)
            rib (.addRibbonIcon plugin "dice" "Sample Plugin" on-ribbon)]
        (.setText status-bar-el "Hello world!")))
    ```

The note must be tagged with `clojure-plugin` and must contain a single code
block with the clojure code inside. The code must have a form `on-load`, which
will be called upon the plugin initialization.

## License

This repository is forked off the [Obsidian plugin
template](https://github.com/obsidianmd/obsidian-sample-plugin), which does not
have a license. At the same time, this repository doesn't use any code provided
in the aforementioned repository, other than general plugin setup. All the
clojure code within is distrubuted under Apache-2.0.


%% README_END %%