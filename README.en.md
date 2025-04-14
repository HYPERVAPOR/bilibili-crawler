# Overview

## Project Introduction

This project is a backend application that scrapes Bilibili video information based on a list of keywords. It works by using axios to make HTTP requests and cheerio to parse the returned HTML data. The video information that can be scraped includes:

- **Title**
- **Link**
- **Cover**
- **Publisher**
- **Views**
- **Duration**

## Quick Start

Please follow the steps below to quickly start the project:

```bash
# Clone this project
git clone https://github.com/HYPERVAPOR/bilibili-crawler

# Enter this directory
cd bilibili-crawler

# Install dependencies (recommended to use pnpm)
pnpm i

# Start the service
pnpm start
```

Next, you can use **POSTMAN** or your frontend application to send requests for debugging.

## Usage Example

After running this project, it listens on port **3000** by default. You can obtain data by sending a POST request to `http://127.0.0.1:3000/api/scrape`.

Example request body:

```json
{
  "tags": ["Artificial Intelligence", "Blockchain"]
}
```

Expected response example:

```json
[
  {
    "tag": "Artificial Intelligence",
    "result": [
      {
        "title": "The History of Artificial Intelligence: The Evolutionary Path of AI",
        "link": "https://www.bilibili.com/video/BV15q421A7tB/",
        "cover": "https://i2.hdslb.com/bfs/archive/53659a990006e6a54aab0e1572ffe2f2110583aa.jpg@672w_378h_1c_!web-search-common-cover",
        "author": "Pulsar Technology",
        "views": "59,000",
        "duration": "08:47",
        "source": "bilibili"
      },
      {
        "title": "[AI Edition] Ten Layers of Understanding AI: A Comprehensive Insight into AI's Past, Present, and Future.",
        "link": "https://www.bilibili.com/video/BV15P6GYcEc3/",
        "cover": "https://i1.hdslb.com/bfs/archive/31f71401cacc3490b11e9d1eb19efa7505171da6.jpg@672w_378h_1c_!web-search-common-cover",
        "author": "Floating World Three Thousand Questions",
        "views": "231,000",
        "duration": "21:16",
        "source": "bilibili"
      }
    ]
  },
  {
    "tag": "Blockchain",
    "result": [
      {
        "title": "Peking University Teacher Xiao Zhen's Open Course on Blockchain Technology and Applications",
        "link": "https://www.bilibili.com/video/BV1Vt411X7JF/",
        "cover": "https://i1.hdslb.com/bfs/archive/cb62713060c5c3a4058436fd5beba55f5894b70d.jpg@672w_378h_1c_!web-search-common-cover",
        "author": "Xiao Zhen from Peking University Computer Science Department",
        "views": "1,501,000",
        "duration": "20:01:19",
        "source": "bilibili"
      },
      {
        "title": "[Blockchain General Course] From Bitcoin to Blockchain - Lecturers and PhD Students from China's Top 10 Universities",
        "link": "https://www.bilibili.com/video/BV1me411J7Sk/",
        "cover": "https://i2.hdslb.com/bfs/archive/5f86a3c9a13ae5d79f23019c73079efdae83761e.png@672w_378h_1c_!web-search-common-cover",
        "author": "Approaching Web3",
        "views": "1,389",
        "duration": "06:22:59",
        "source": "bilibili"
      }
    ]
  }
]
```

# Frequently Asked Questions

## How to Change the Default Listening Port

In the `bin/www` file, modify the following code:

```javascript
var port = normalizePort(process.env.PORT || "3000");
```

## How to Change the Number of Returned Video Information

In the `routes/scrape.js` file, modify the logic of the function `function determineK(length)`:

```javascript
// The default function returns about 20 videos based on the number of tags
function determineK(length) {
  if (length === 1) return 20;
  if (length === 2) return 10;
  if (length === 3) return 7;
  if (length === 4) return 5;
  if (length === 5 || length === 6) return 4;
  if (length >= 7 && length <= 9) return 3;
  if (length >= 10) return 2;
  return 5; // Default value
}
```

# Usage Notes

## Open Source License

This project uses the MIT license, allowing users to freely use, copy, modify, and distribute.

## Terms of Use

Using this project means you have read, understood, and agreed to the following terms:

1. **Usage Restrictions**  
   This project is for learning and communication purposes only and is strictly prohibited for any commercial purposes. Users may not use this project for profit-making activities in any form.

2. **Legal Compliance**  
   Users commit not to use this project for any illegal or criminal activities, including but not limited to infringing on others' intellectual property rights, spreading malware, or conducting cyber attacks.

3. **Platform Protection**  
   Users must not affect or interfere with the normal operation of the Bilibili platform in any way, including but not limited to excessive requests, scraping data, or other actions that may cause service interruptions.

4. **Liability Disclaimer**  
   The developers of this project are not responsible for any direct, indirect, incidental, special, or consequential damages arising from the use of this project. Any legal responsibility arising from the use of this project shall be borne by the user.

5. **Terms Changes**  
   These disclaimer terms may be updated periodically, and users should regularly check this disclaimer to ensure they are aware of the latest terms.

By using this project, you agree to comply with all the above terms. If you do not agree, please stop using this project immediately.
