---
aliases:
- Arweave Uploader
author:
- '[[konfuzz|makesimple]]'
categories:
- '[[categories/Export|Export]]'
description: Convert your notes to HTML and upload to Arweave
downloads: 41
mobile: true
number: 1982
stars: 0
title: Arweave Uploader
type: plugin
updated: '2024-11-02T02:01:07'
url: https://github.com/konfuzz/arweave-uploader-plugin
version: 1.0.1
---

%% README_START %%

# Arweave Uploader Plugin for Obsidian

## Overview

The **Arweave Uploader** plugin allows you to upload your Obsidian notes (including embedded images) to the Arweave blockchain as HTML documents. This provides a decentralized, permanent storage solution for your notes, ensuring they remain accessible even if local or cloud storage fails.

**Important Notice**: At this time, the private key is stored in plaintext within the plugin settings. For this reason, it is recommended that you **do not use your primary Arweave wallet** or store large amounts of AR tokens in the wallet used with this plugin.

Additionally, please note that **only image attachments are supported** in this version of the plugin.

## What is Arweave?

Arweave is a decentralized storage network that aims to store data permanently. Unlike traditional cloud storage, where users pay subscription fees, Arweave allows you to pay a one-time fee to store your data forever (as long as the network exists). Files are stored on the Arweave blockchain and can be accessed via a unique URL.

## Key Features

- **Export Notes as HTML**: Automatically converts Markdown notes to HTML, including embedded images.
- **Upload to Arweave**: Securely uploads HTML to the Arweave blockchain.
- **Transaction Pricing**: Get an estimated transaction price in AR tokens (Arweave's cryptocurrency) and USD.
- **Image Handling**: Embedded images are converted to base64 and included in the HTML. (_Currently, only images are supported as attachments._)
- **Wallet Balance Check**: View your wallet balance before uploading to ensure sufficient funds.

## How to Set Up and Use

### 1. Create an Arweave Wallet

To upload your notes to Arweave, you'll need an Arweave wallet. Follow these steps:

1. Visit [Arweave Wallet](https://arweave.app/wallet) and click "Create Wallet."
2. Save your wallet file (a JSON file) securely. **Do not lose this file!** It contains your private key and is necessary for accessing your wallet and funds.
3. Fund your wallet with AR tokens. You can purchase AR from various cryptocurrency exchanges like Binance, KuCoin, or through fiat gateways like Moonpay or Ramp.

### 2. Fund Your Wallet

Once you've created a wallet, you'll need to fund it with AR tokens to pay for storage. Prices vary based on the file size. For example, storing 1MB might cost around **0.0001 AR**, but prices fluctuate based on network demand. Check live prices on platforms like [CoinGecko](https://www.coingecko.com/en/coins/arweave).

### 3. Set Up the Plugin

1. Install the Arweave Uploader plugin in Obsidian.
2. Go to the plugin settings and paste your wallet's private key (from the JSON file) into the provided field. (**Warning**: The private key is currently stored in plaintext.)
3. Start uploading notes directly from the Obsidian interface!

### 4. Uploading a Note

- Click the **Arweave Uploader** icon in the ribbon (it looks like a cloud upload icon).
- The plugin will convert your active note into HTML and estimate the transaction cost.
- After confirmation, the note is uploaded to Arweave, and you'll receive a unique URL to access it.

### Example Usage

1. Write your note in Obsidian.
2. Click the Arweave Uploader icon.
3. Check the estimated transaction cost.
4. Click "Upload" to send your note to Arweave.

After a successful upload, you'll get a link like:  
`https://arweave.net/your-transaction-id`

### What the Plugin Does **Not** Do

- **Does not encrypt your notes**: Uploaded notes are publicly accessible on Arweave. Ensure you don't upload sensitive information.
- **Does not guarantee instant uploads**: Arweave is decentralized, so transaction confirmations may take a few minutes depending on network conditions.
- **Does not handle Arweave wallet creation or funding**: You must create and fund your Arweave wallet separately.
- **Does not support all file types**: Currently, only images are handled properly as embedded attachments.

## Pricing and Transaction Costs

Arweave uses a unique pricing model where you pay for permanent storage in AR tokens. Pricing depends on the file size of your note. Here are some rough estimates:

- **1-250KB** – less than 0.0002 AR
- **1MB** – around 0.0008 AR (prices may fluctuate)
- **1GB** – around 0.75 AR

You can check current storage costs via [Arweave Storage Calculator](https://ar-fees.arweave.dev/).

Check the estimated cost before uploading in the plugin. You can also check live AR prices in USD via APIs like [CoinGecko](https://www.coingecko.com/en/coins/arweave).

## Risks and Considerations

- **Permanence**: Once uploaded, your data is stored on Arweave forever. Be cautious about what you upload as there's no way to delete it.
- **Public Accessibility**: All data uploaded to Arweave is publicly accessible. If you need to store sensitive information, Arweave may not be the best option unless you encrypt your data first.
- **Volatility**: AR token prices are subject to market fluctuations. The cost to store data may increase or decrease depending on market conditions.
- **Private Key Security**: The private key for your Arweave wallet is stored in plaintext within the plugin settings. Do not use your primary wallet, and avoid storing large amounts of AR in the wallet used with this plugin.

## Conclusion

The **Arweave Uploader** plugin for Obsidian offers a simple, decentralized solution to permanently store your notes. Whether you're preserving important documents or just experimenting with decentralized storage, Arweave provides a unique, long-term approach to data storage.

Start uploading today and enjoy the benefits of the decentralized web!

%% README_END %%