---
aliases:
- Cypher
author:
- '[[authors/aths7|Atharva]]'
categories: []
description: Hides text in a simple diagramatic cypher to make reading unrecognizable
  for viewers.
downloads: 107
mobile: true
number: 2067
stars: 2
title: Cypher
type: plugin
updated: '2024-11-04T13:48:46'
url: https://github.com/aths7/cypher
version: 1.0.0
---

%% README_START %%

# Cypher Plugin for Obsidian

Transform your Obsidian notes into an enigmatic, fun, and visually distinct experience with the **Cypher Text Plugin**! With a simple toggle, you can hide your text in icon-based ciphers, ideal for adding a layer of mystery to your notes or just keeping things visually intriguing.

![Cypher Plugin Demo](https://raw.githubusercontent.com/aths7/cypher/HEAD/link_to_demo_image.gif) <!-- Optional: Add a demo image or GIF showcasing the plugin -->

## Features

-   **Toggle Cypher Mode On/Off**: Easily switch between normal text and cyphered text with a click.
-   **Real-Time Cypher Conversion**: Watch your text transform as you type, with plain text for input and auto-cyphered output.
-   **Unique Upper and Lowercase Icons**: Each letter has a distinct symbol, making every word visually unique.
-   **Backspace Handling**: Intelligent handling of spaces and backspacing, so your text remains clean and easy to manage.
-   **Simple Reversion**: Toggle off the cypher to instantly revert to plain text without losing any data.

## Installation

### From the Obsidian Community Plugins

1. Open **Obsidian** and go to **Settings** > **Community Plugins**.
2. Search for **Cypher Text Plugin**.
3. Click **Install** and then **Enable** the plugin.

### Manual Installation

1. Download the latest release from the [Releases](https://github.com/aths7/cypher/releases) page.
2. Unzip the folder and place it in your Obsidian vault's plugins folder: `.obsidian/plugins/cypher`.
3. Go to **Settings** > **Community Plugins** and enable the **Cypher Text Plugin**.

## Usage

1. **Activate Cypher Mode**: Click on the dice icon in the ribbon (sidebar) to activate or deactivate the cypher mode.
    - **Activated**: Your text will transform into symbol-based icons.
    - **Deactivated**: All cyphered text reverts to plain text for easy reading and editing.
2. **Transform Selected Text**: Use the command `Transform Selected Text to Cypher` to convert specific text selections into symbols, even if cypher mode is off.
3. **Real-Time Cypher as You Type**: While cypher mode is on, your text will be visually transformed after typing, adding three spaces between words and intelligently handling backspaces.

## Customization

Cypher Text Plugin offers customization to fit your preferences:

-   **Choose Cypher Style**: Select different cypher styles to modify the appearance of transformed text (e.g., different icon sets for letters).

## Example

```plaintext
Hello World
```

With Cypher Mode ON, becomes:

```plaintext
🌺💧🍃🍃🔺   🔷🔶🌻🍃⬛
```

This transformation allows for playful exploration of text without compromising readability when toggled off.

## Development

1. Clone the repository:
    ```bash
    git clone https://github.com/aths7/cypher.git
    ```
2. Navigate to the plugin directory:
    ```bash
    cd cypher-text-plugin
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Build the plugin:
    ```bash
    npm run build
    ```

## Contributing

Contributions are welcome! If you have ideas for improvements or new features, feel free to open an issue or submit a pull request.

## Feedback and Support

If you encounter issues or have suggestions, please [open an issue](https://github.com/aths7/cypher/issues) on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Enjoy adding a dash of mystery and style to your notes with the Cypher Text Plugin!


%% README_END %%