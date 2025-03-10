---
aliases:
- brAIn
author:
- '[[authors/lusob|Luis Sobrecueva]]'
categories:
- '[[categories/AI assistance|AI assistance]]'
description: This is a brAIn for Obsidian. This plugin implements a ChatGPT retrieval
  for your obsidian notes.
downloads: 4584
mobile: false
number: 939
stars: 14
title: brAIn
type: plugin
updated: '2023-06-28T22:50:30'
url: https://github.com/lusob/obsidian-brain
version: 1.0.3
---

%% README_START %%

# 🧠 Obsidian brAIn plugin

This plugin enables a ChatGPT powered chatbot specifically focused on question answering over your Obsidian vault notes(markdown files).


https://user-images.githubusercontent.com/480507/236815106-2c38d137-9345-498e-8531-46494239d19a.mp4


### 🧰 Requirements

- [Docker](https://docs.docker.com/get-docker/)

### 📖 How to use

1. Install the plugin in your Obsidian vault by going to `Settings -> Community Plugins -> Browse` and searching for `brAIn`.
2. After installation, In the settings section of the plugin, enter your OpenAI API key to enable the plugin to ingest your vault documents and to use the chat.
3. Feed the model with your notes your vault notes running `brAIn: Ingest vault docs` command in the command palette or by pressing `Ctrl/Cmd + P`.
4. From now on you can also talk with your brAIn by clicking on the brain button in the ribbon or running `brAIn: Open chat` command in the command palette or by pressing `Ctrl/Cmd + P`.

*If you have new notes that you want to be indexed by the brAIn just run again `brAIn: Ingest vault docs`*

### 🛠 How it works

The plugin uses a [brAIn docker container](https://hub.docker.com/repository/docker/lusob04/brain) running the [brAIn](https://github.com/lusob/brAIn) server to enable the chatbot functionality. The brAIn server reads in your Obsidian vault documents and uses the OpenAI GPT-3 API to enable the question answering functionality. Once the server is running, you can chat with the bot through the plugin's interface.

### 💬 Support

If you have any issues or feature requests, please open an issue on [GitHub](https://github.com/).

### 📓 License

This plugin is licensed under the [MIT License](https://github.com/lusob/obsidian-brain/blob/main/LICENSE).

### © Privacy

By defauls the embeddings as generated locally so your docs are not leaving your machine, in case you check the OpenAI Embeddings check in settings, The OpenAI API is used by brAIn to generate the vector store during ingestion and to answer each question asked in the chat, but its [API usage policies](https://openai.com/policies/api-data-usage-policies ) guarantee to us that OpenAI will not use data submitted by customers via its API to train or improve their models and any data submitted via API will be deleted after 30 days.

### ⚠️ Limitations

If you are generating the embeddings locally it could consume a lot of time and hardware resources (depending of your marchines and the number of documents)
In case you want to generate the embeddings in OpenAI during the ingestion (embedding generation) a big amount of notes in your vault can lead to high expenses (~ 1000 notes = 1$), monitor your account and set API key limits to avoid scares

### 🐞 Known Issues

brAIn may occasionally generate incorrect or irrelevant content based on the user's input. Additionally, it may encounter errors when calling the OpenAI API if the API key is invalid or if there are issues with the OpenAI API service.

### ⏭ Next

The final idea is to create a complete offline chatbot using an LLM, but so far the hardware requirements for these models are too high.

%% README_END %%