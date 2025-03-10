---
aliases:
- Optimize Canvas Connections
author:
- '[[authors/felixchenier|Félix Chénier]]'
categories: []
description: An Obsidian plugin that declutters a canvas by reconnecting notes using
  their nearest edges.
downloads: 13478
mobile: true
number: 820
stars: 51
title: Optimize Canvas Connections
type: plugin
updated: '2023-03-15T22:32:26'
url: https://github.com/felixchenier/obsidian-optimize-canvas-connections
version: 1.0.0
---

%% README_START %%

# Optimize Canvas Connections

Suppose you start a canvas.

![Figure 1](https://github.com/felixchenier/obsidian-optimize-canvas-connections/raw/master/images/fig1.png)

Then you move everything around while you brainstorm. The connections between notes may quickly become a mess.

![Figure 2](https://github.com/felixchenier/obsidian-optimize-canvas-connections/raw/master/images/fig2.png)

This simple plugin automatically reconnect notes together, using their nearest edges.

Select the notes to reconnect, then run command:

`Optimize Canvas Connections: Optimize selection (preserve axes)`

or

`Optimize Canvas Connections: Optimize selection (shortest path)`


![Figure 3](https://github.com/felixchenier/obsidian-optimize-canvas-connections/raw/master/images/fig3.png)

## Shortest path

The `shortest path` option reconnects notes using their nearest edges, always using the shortest path possible. This is the most drastic approach.

## Preserve axes

The `preserve axes` option also reconnects notes using their nearest edges, but it respects the axes on which a connection originally begins and ends. For instance, a connection that begins on the right side of a note could be changed to begin from the left, but not from the top or bottom. Use this option to preserve meaning in vertical and horizontal flow (e.g., top-to-bottom = time, left-to-right = details).

**In doubt, use `preserve axes`.**

In both cases, when no note is selected, the optimization is applied to the whole canvas.


%% README_END %%