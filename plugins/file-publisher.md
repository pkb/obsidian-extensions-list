---
aliases:
- File Publisher
author:
- '[[yiglas|Devin Sackett]]'
categories:
- '[[categories/Sharing and publishing|Sharing and publishing]]'
description: Publishes a file to a given api.
downloads: 3428
mobile: true
number: 834
stars: 13
title: File Publisher
type: plugin
updated: '2023-03-07T04:16:55'
url: https://github.com/yiglas/obsidian-file-publisher
version: 0.0.1
---

%% README_START %%

# Obsidian File Publisher

Obsidian plugin that allows you to publish a file to a POST endpoint.

# Configure

Enter the POST endpoint url

Enter the API key for the endpoint

Enter the API secret for the endpoint

# Create a new file to post

1. Create a template with the following frontmatter

   ```
   ---
   title:
   excerpt: ''
   timestamp: {{date:MMM D, YYYY}}
   ---
   ```

2. Create a new note.

3. Insert the by executing the `Templates: Insert template` command

4. Write your note

5. Right click on the Note and select `Publish file`


%% README_END %%