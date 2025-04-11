# Project Introduction

This project is a backend application that scrapes Bilibili video information based on a list of keywords. It uses Axios for HTTP requests and Cheerio to parse the returned HTML data. The video information that can be scraped includes:

- **Title**
- **Link**
- **Cover Image**
- **Publisher**
- **View Count**
- **Duration**

After running this project, it listens on port **3000** by default. You can retrieve data by sending a POST request to `http://127.0.0.1:3000/api/scrape`.

### Example Request Body

```json
{
  "tags": ["Artificial Intelligence", "Blockchain"]
}
```

### Example Expected Response

```json
[
  {
    "tag": "Artificial Intelligence",
    "result": [
      {
        "title": "History of Artificial Intelligence: The Evolution of AI",
        "link": "https://www.bilibili.com/video/BV15q421A7tB/",
        "cover": "https://i2.hdslb.com/bfs/archive/53659a990006e6a54aab0e1572ffe2f2110583aa.jpg@672w_378h_1c_!web-search-common-cover",
        "author": "Pulsar Technology",
        "views": "59,000",
        "duration": "08:47",
        "source": "bilibili"
      },
      {
        "title": "[AI Edition] Ten Layers of Understanding AI: A Comprehensive Look at AI's Past, Present, and Future.",
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
        "title": "Peking University Professor Xiao Zhen's Open Course on Blockchain Technology and Applications",
        "link": "https://www.bilibili.com/video/BV1Vt411X7JF/",
        "cover": "https://i1.hdslb.com/bfs/archive/cb62713060c5c3a4058436fd5beba55f5894b70d.jpg@672w_378h_1c_!web-search-common-cover",
        "author": "Xiao Zhen, Department of Computer Science, Peking University",
        "views": "1,501,000",
        "duration": "20:01:19",
        "source": "bilibili"
      },
      {
        "title": "[Blockchain General Course] From Bitcoin to Blockchain - A Lecture by Top 10 Chinese University Graduate Instructors and PhD Students",
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

# Quick Start

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

# FAQ

## How to Change the Default Listening Port

In the `bin/www` file, modify the following code:

```javascript
var port = normalizePort(process.env.PORT || "3000");
```

## How to Change the Number of Returned Video Information

In the `routes/scrape.js` file, modify the logic of the function `function determineK(length)`:

```javascript
// The default function returns around 20 videos based on the number of tags
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

# Disclaimer

Using this project indicates that you have read, understood, and agreed to the following terms:

1. **Usage Restrictions**  
   This project is for educational and communication purposes only and is strictly prohibited for any commercial use. Users may not use this project for profit-making activities in any form.

2. **Legal Compliance**  
   Users commit not to use this project for any illegal or criminal activities, including but not limited to infringing on others' intellectual property rights, spreading malware, or conducting cyber attacks.

3. **Platform Protection**  
   Users must not in any way affect or interfere with the normal operation of the Bilibili platform, including but not limited to excessive requests, scraping data, or other actions that may lead to service interruptions.

4. **Liability Statement**  
   The developers of this project are not responsible for any direct, indirect, incidental, special, or consequential damages arising from the use of this project. Any legal responsibility arising from the use of this project shall be borne by the user.

5. **Terms Changes**  
   This disclaimer may be updated periodically, and users should regularly review this disclaimer to ensure they are aware of the latest terms.

By using this project, you agree to comply with all the above terms. If you disagree, please stop using this project immediately.
