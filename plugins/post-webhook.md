---
aliases:
- Post Webhook
author:
- '[[authors/Masterb1234|MasterB1234]]'
categories: []
description: Send notes to Webhook endpoints, for seamless integration with n8n, Make.com,
  and Zapier.
downloads: 51
mobile: true
number: 2040
stars: 4
title: Post Webhook
type: plugin
updated: '2024-11-30T16:36:21'
url: https://github.com/Masterb1234/obsidian-post-webhook
version: 1.0.3
---

%% README_START %%

# Post Webhook Plugin

Send your Obsidian notes to any Webhook endpoint with YAML frontmatter support and attachment handling. Perfect for automating your note-taking workflow and integrating with external services.

## Features

- 📤 Send note content to any Webhook endpoint
- 📋 YAML frontmatter parsing and inclusion in the Webhook payload
- 📎 Automatic attachment handling
- ⚡ Quick access through command palette
- 🧪 Built-in Webhook testing functionality 
- 📥 Optional response attachment to notes

## Installation

1. Open Obsidian Settings
2. Go to Community Plugins and disable Safe Mode
3. Click Browse and search for "Post Webhook"
4. Install the plugin
5. Enable the plugin in your Community Plugins list

## Usage

1. Set your Webhook URL in the plugin settings
2. Open any note
3. Use the command palette (Ctrl/Cmd + P) and search for "Send to Webhook"
4. Your note's content, frontmatter, and attachments will be sent to the configured Webhook

### YAML Frontmatter Support

The plugin automatically parses YAML frontmatter and includes it in the Webhook payload. Example note:

```yaml
---
title: My Note
tags: [Webhook, automation]
category: tech
---
Your note content here...

![attachment.png]
```

Will be sent as:

```json
{
  "title": "My Note",
  "tags": ["Webhook", "automation"],
  "category": "tech",
  "content": "Your note content here...\n\n![attachment.png]",
  "filename": "note.md",
  "timestamp": 1234567890,
  "attachments": [
    {
      "name": "attachment.png",
      "type": "png",
      "size": 12345,
      "data": "base64_encoded_data..."
    }
  ]
}
```

### Attachment Support

The plugin automatically:
- Detects attachments referenced in your notes using the `![[filename]]` syntax
- Reads the attachment files
- Converts them to Base64
- Includes them in the Webhook payload
- Supports images and other file types

### Response Handling

The plugin can automatically append Webhook responses to your notes:

1. Enable "Attach Response" in plugin settings
2. When sending a note, any response from the Webhook will be appended at the bottom with a separator line
3. Perfect for receiving processed data, AI responses, or confirmation messages

## License

MIT License - feel free to use this plugin in any way you'd like.

---

Created by MasterB1234

%% README_END %%