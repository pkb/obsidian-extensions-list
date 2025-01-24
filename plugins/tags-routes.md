---
aliases:
- Tags Routes
author:
- '[[authors/kctekn|Ken]]'
categories: []
description: A powerful tool for visualizing 3D graphs and managing orphan files,
  offering a dynamic and colorful 3D graph view for enhanced user experience.
downloads: 7034
mobile: true
number: 1806
stars: 44
title: Tags Routes
type: plugin
updated: '2024-12-06T23:39:21'
url: https://github.com/kctekn/obsidian-TagsRoutes
version: 1.2.3
---

%% README_START %%

# Obsidian plugin: TagsRoutes
<div align="left">
<img alt="GitHub Release" src="https://img.shields.io/github/downloads/kctekn/obsidian-TagsRoutes/total?logo=github&&color=%23a8baff">
<img alt="GitHub Release" src="https://img.shields.io/github/v/release/kctekn/obsidian-TagsRoutes?color=%23a8baff">
</div>

This is a plugin for obsidian, to visualize files and tags as nodes in 3D graphic.
![title](https://github.com/user-attachments/assets/4033af48-3dd7-4cbf-948f-02a03cf29189)


<img1 width="40%" src="https://github.com/user-attachments/assets/27d000e5-fc97-4b53-ac6f-a5ed9a14aea0">

Wiki:

[Organize Tags by Timestamp Using the Obsidian Plugin: "Tags Routes"](https://github.com/kctekn/obsidian-TagsRoutes/wiki/Organize-Tags-by-Timestamp-Using-the-Obsidian-Plugin:-%22Tags-Routes%22)

[Organize Tags with Hierarchy Using the Obsidian Plugin "Tags Routes"](https://github.com/kctekn/obsidian-TagsRoutes/wiki/Organize-Tags-with-Hierarchy-Using-the-Obsidian-Plugin-%22Tags-Routes%22)

And you can show up your beautiful vault pictures here: [Share & showcase](https://github.com/kctekn/obsidian-TagsRoutes/discussions/17)
## Version 1.2.3 Release Notes:


### New Features:

1. **Path Filter**:  
   - You can now use both positive and negative filters to customize the display of your vault content.  
   - This allows for more precise control over what is shown, as illustrated below.  

<img  src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v1.2.3-feature1.png">



https://github.com/user-attachments/assets/62c32f11-977b-4d38-b33f-835963125712



2. **Open Scene in Sidebar as a Navigator**:  
   - A new button has been added to the "Display Control" section, enabling you to open a scene in the sidebar for easier navigation.

<img  src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v1.2.3-feature2.png">



https://github.com/user-attachments/assets/6c734a67-1325-4466-b2cb-ec66445d0e71



## Version 1.2.2 Bug Fix Release:

- **Bug fix:** LMB+Drag and RMB+Drag has no effect

Refer to https://github.com/kctekn/obsidian-TagsRoutes/issues/34 for detail.

This appears to be an issue introduced in Obsidian v1.7.x, now been fixed.

## Version 1.2.1 Release Notes:

### New Features:

- **Lock Scene**:
    - When enabled, nodes within the visual will no longer change or update automatically, and the view angle will remain fixed unless manually adjusted by dragging.
    - This is useful when you want to focus on a specific sub-network within a vault without distractions.

<img  src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v1.2.1-lockScene.gif">

- **View Distance Tuning**:
    - You can now set the current view distance relative to the focused node as a global setting. This ensures that the view distance for all other nodes is automatically adjusted based on their size.
    - This provides an optimal way to adjust the view distance for a more comfortable and consistent viewing experience across the scene.

<img  src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v1.2.1-setFocus.gif">

## Version 1.2.0 Release Notes:

- **Time Lapse Animation Feature:**
  - **Vault Growth Visualization:** You can now initiate an animation that showcases how the vault has grown over time.
  - **Display Settings:** Ensure these are adjusted appropriately before starting the animation for optimal viewing.
  - **Interactive Controls:** 
    - Press the **Animate** button to begin the visualization.
    - The animation can be **paused** or **stopped** as needed.

 Have fun exploring the progression of your vault with this engaging feature.
 <img  src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v120-feature.gif">

## Version 1.1.8 Release Notes:

### 1. New feature:
- **Selection Box for Enhanced Clarity:** A selection box has been added to clearly highlight the currently selected node. This visual cue makes it easier to track your position within the graph and navigate your tags effectively. (See GIF for a demonstration)

<img width="30%" src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v1.1.8-feature.gif">

### 2. Bug fix:
- **Global Preference for Tag Click Actions Now Functional:** Previously, disabling tag click actions in the global plugin preferences did not work as intended. This issue has been resolved, and you can now reliably control this behavior through the plugin settings. (See issue https://github.com/kctekn/obsidian-TagsRoutes/issues/28 for more details)

## Version 1.1.5/1.1.6 Release Notes:

### 1. Tag Query Enhancements:
   - **Time-based tag queries:**  
     You can now query content associated with time-sensitive tags like `#1day`, `#30day`, `#60day`, etc.
     - **How to use it:**
       1. Add time-based tags (e.g., `#1day`, `#30day`) anywhere in your notes.
       	     1. Note the time of the tags will be timestamp you added or the file's creation time.
       	     2. Refer to [Organize Tags by Timestamp Using the Obsidian Plugin: "Tags Routes"](https://github.com/kctekn/obsidian-TagsRoutes/wiki/Organize-Tags-by-Timestamp-Using-the-Obsidian-Plugin:-%22Tags-Routes%22) for the detail.
       3. Restart Obsidian to allow the plugin to re-index the tags.
       4. Navigate to the plugin's interface, find the tag, and click on the corresponding node.
       5. You'll receive a report summarizing the content tagged within the specified time period.
   - **Direct linking to paragraphs:**  
     Instead of linking only to entire notes, the plugin now creates direct links to specific paragraphs, improving navigation accuracy.
     At the same time you can turn off this in the main settings tab.
   - **Performance optimization:**  
     Query performance has been significantly improved for faster and more efficient results.

### 2. New Option: "Auto-Focus File in Explorer"
   - **Toggle Auto-Focus:**  
     A new option has been added to toggle the auto-focus feature in the file explorer. This was the default behavior in previous versions, but now you can turn it off if it causes issues or if you don’t always need the file explorer to focus on the current file.
   - **Enhanced Functionality:**  
     When auto-focus is enabled, deleting items in the canvas will no longer trigger unintended reactions in the file explorer.
     
For the details, please check https://github.com/kctekn/obsidian-TagsRoutes/issues/24 . Thanks to @scriptingtest for the detailed feedback!

### Version 1.1.6 Bug Fix Release

1.  The issue when multiple notes has the same name in different directories.
2.  The issue of identical queries to be executed multiple times unnecessarily.


## Version 1.1.3/1.1.4 Release Notes
 
 This release introduces major updates to screenshots, enhancements to graph display control, and provides more choice in how you interact with tags nodes.
 
**1. Major Updates:**

* **Screenshot Functionality:** Capture your current graph as an image! You can now save the graph as a picture and insert it directly into your note or save it to a designated snapshot folder.
* **New "Screenshot" Node Type:** A new node type dedicated to screenshots has been added. Customize its color and use it to easily manage and check for orphan files.

**2. Graph Display Enhancements:**

* **Adjustable Node Label Color:**  Easily adjust the color of node labels using a slider. This allows you to automatically find a clear and readable text color against the background.
* **Tunable Bloom in Dark Mode:** Fine-tune the bloom strength in dark mode for optimal visual appeal.
* **Lock Node Positions:** Lock the position of nodes to improve performance, especially on lower-end devices.
* **Disable Link Particles:** Set the link particle number to 0 to disable the particle effect and boost performance.
* **New "Track" Highlight Mode:** Introducing a new highlight mode called "Track." When enabled, clicking a node will highlight all directly and indirectly connected nodes, allowing you to easily visualize sub-networks within your larger graph.

**3. Choice of Tags Node Interaction:**

* **Enable/Disable Tags Query:** Choose whether to enable the tag query function when clicking on tag nodes. Disable this feature if you don't rely on tags for note management.
* **"TagsRoutes" Folder Removal:** If you disable the following three options:
    * 'Log node/link Count'
    * 'Show log file on Startup'
    * 'Enable tag click action '
    
	You can safely delete the 'TagsRoutes' folder in your vault, as the plugin will no longer utilize it.

### Version 1.1.4 Bug Fix Release

1. Fix a bug that the setting of 'highlight track mode' lost update when switch slot.


_*The usage demo:*_

<img src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v1.1.3-feature.gif">

## Version 1.1.1/1.1.2 Release Notes

1. **Improved Orphan File Detection**
    - Enhanced algorithm to identify unlinked files:
      - Files are now flagged as orphaned if they are not referenced by any other markdown file.
    - New feature: Easily select and link orphaned files within the application.

2. **Added Support for PDF Files**:
    - The application now supports linking and managing PDF file types.

3. **Bug Fixes**:
    - Resolved various issues related to linking files within the scene.

4. **New Quick Focus Function**:
    - Right-clicking on a node in the scene now triggers a "quick focus" behavior for easier navigation.

### Version 1.1.2 Bug Fix Release

1. Color Map Source Update Issue: The color map source now correctly updates when the color is reset.
2. Label Text Display Issue: The label text now displays correctly when toggled off.
3. Unwanted Border Issue: An issue causing an unwanted border to appear in certain scenarios has been resolved.

_*The usage demo:*_

<img src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v1.1.1-feature.gif">

_*Settings of the demo:*_
1. Obsidian theme: "80s Neon" - dark mode
2. Plugin theme: default settings - dark mode
3. Toggle global map: off
4. Toggle label display: on

## Version 1.1.0 Release Notes

I'm excited to announce the release of Version 1.1.0, which includes several new features and improvements to enhance your experience:

### Major Updates:

1. **Light Theme Added**:
    
    - Introduced a new light theme with a bright background and distinct visual elements, offering an alternative to the dark theme.
  <img width="40%" src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v1.1.0-defaultLightTheme.gif">
      
2. **Node Color Synchronization with Obsidian**:
    
    - You can now import node colors directly from Obsidian:
        1. Node colors will sync with Obsidian's graph view.
        2. You can switch between different Obsidian themes and:
            - **Apply Theme Colors**: Import the color scheme of the selected theme.
            - **Save Slot**: Save the imported color scheme into a slot for future use.
        3. The saved color schemes can be reused across different modes (light/dark) and themes, as long as the corresponding slot is loaded.

### New Features:

3. **Enhanced Node Interaction**:
    
    - Clicking on frontmatter tags within a note will now focus on the corresponding node in the scene, consistent with other clickable elements.
4. **User-Friendly Tooltip Bar**:
    
    - A new tooltip bar has been added to guide new users on how to navigate and operate the interface. Special thanks to @RealSourceOfficial for his support in this addition.
5. **Node Label Display Toggle**:
    
    - A new toggle in the settings allows you to turn off node label displays. This is particularly useful if there are too many labels cluttering the view or if you don't need to see note labels constantly.
6. **Improved Node Label Interaction**:
    
    - Node labels will no longer respond to mouse clicks, making it easier to interact directly with the nodes.
7. **Settings Box Style Update**:
    
    - The settings box style has been updated to match the current Obsidian theme, ensuring a more cohesive visual experience.

These updates significantly enhance customization options, improve user experience, and provide better integration with Obsidian's theming system. I hope you enjoy the new features and improvements!

_**You can check the simple usage demo here:**_

<img width="50%" src="https://github.com/kctekn/obsidian-TagsRoutes/blob/main/usage/v1.1.0-usage.gif">



# More
**Full version history please refer to [What's-new-history](https://github.com/kctekn/obsidian-TagsRoutes/wiki/What's-new-history)**

# How to operate:
https://github.com/kctekn/obsidian-TagsRoutes/assets/32674595/2c37676c-f307-4a74-9dae-0679067cbae7



https://github.com/kctekn/obsidian-TagsRoutes/assets/32674595/759e9cba-c729-4b3e-a0c4-bb4c4f1b5dd1






This plugin provides a comprehensive graph view to visualize the relationships between files, file-tag connections, and inter-tag connections within Obsidian. **It is particularly useful for users who manage extensive thoughts and ideas with numerous tags in Obsidian.**

# Features: 
 
- **Node and Link Visualization** :
  - Display all files and their links.
 
  - Display all tags and their connections, including:
    - Tag-to-tag links

    - Tag-to-file links

    - File-to-file links
 
- **Dynamic Node Sizing** :
  - Adjust the size of file nodes based on the number of links.

  - Adjust the size of tag nodes based on their frequency of appearance.

This approach helps you identify the most significant parts of your vault at a glance.

# Additional Functionalities: 
 
- **Orphan File Linking** : 
  - Connect all orphan files, making them easier to review. Note that orphan files are not necessarily useless but are:
    - Non-markdown files with no links to other files.

    - For example, they could be isolated images from copy/paste operations or various collected items.
 
- **Orphan Excalidraw File Linking** :
  - Connect all orphan Excalidraw files that are not linked by any markdown files, simplifying their review.

# Interactive Features: 
 
- **Node Interaction** :
  - Click on a file node to open it in the editor, regardless of its file type.
 
  - Click on a tag node to generate a query result for that tag, displayed in a file in the editor.
    - Provides a clear view of the tag's content by capturing the surrounding lines until a blank line is encountered, showing the entire paragraph containing the tag.
 
- **Graph Focus** :
  - Clicking on any file to open it in the editor will automatically focus the graph on its node.

  - Clicking on a tag in Obsidian's "Reading Mode" will focus on the tag node in the graph.

This allows you to clearly understand the status of files and tags through:

- The file’s link status

- The tags contained within the file

# Adjustable Settings: 

- Focus distance on a node

- Toggle tag query result page

- Toggle log page
 
- Display styles:
  - Link distance and width
  - Link particle size, number, and color
  - Node size and repulsion


# Install
- Search for "Tags routes" in Obsidian's community plugins browser, or you can find it [HERE](https://obsidian.md/plugins?search=tags%20routes).
- Choose to intall it.
- You can also install it manually:
	- Download the release file, and extract to your obsidian's: valut/.obsidian/plugin/tags-routes.
- Enable it in obsidian settings tab.

# More

**For more information,please refer to [What's-new-history](https://github.com/kctekn/obsidian-TagsRoutes/wiki/What's-new-history) and [Discussions](https://github.com/kctekn/obsidian-TagsRoutes/discussions)**



%% README_END %%