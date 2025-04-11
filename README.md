# 项目介绍

本项目是一个根据关键字列表爬取 Bilibili 视频信息的后端应用。原理是使用 axios 进行 HTTP 请求，并利用 cheerio 解析返回的 HTML 数据。可以爬取的视频信息包括：

- **标题**
- **链接**
- **封面**
- **发布者**
- **播放量**
- **时长**

运行此项目后，默认监听 **3000** 端口。您可以通过向 `http://127.0.0.1:3000/api/scrape` 发送 POST 请求来获取数据。

### 请求体示例

```json
{
  "tags": ["人工智能", "区块链"]
}
```

### 预期响应示例

```json
[
  {
    "tag": "人工智能",
    "result": [
      {
        "title": "人工智能发展史，AI的进化革新之路",
        "link": "https://www.bilibili.com/video/BV15q421A7tB/",
        "cover": "https://i2.hdslb.com/bfs/archive/53659a990006e6a54aab0e1572ffe2f2110583aa.jpg@672w_378h_1c_!web-search-common-cover",
        "author": "脉冲星科技",
        "views": "5.9万",
        "duration": "08:47",
        "source": "bilibili"
      },
      {
        "title": "【AI篇】AI 的十层理解，一口气，看懂 AI 的过去、现在与未来。",
        "link": "https://www.bilibili.com/video/BV15P6GYcEc3/",
        "cover": "https://i1.hdslb.com/bfs/archive/31f71401cacc3490b11e9d1eb19efa7505171da6.jpg@672w_378h_1c_!web-search-common-cover",
        "author": "浮世叁千问",
        "views": "23.1万",
        "duration": "21:16",
        "source": "bilibili"
      }
    ]
  },
  {
    "tag": "区块链",
    "result": [
      {
        "title": "北京大学肖臻老师《区块链技术与应用》公开课",
        "link": "https://www.bilibili.com/video/BV1Vt411X7JF/",
        "cover": "https://i1.hdslb.com/bfs/archive/cb62713060c5c3a4058436fd5beba55f5894b70d.jpg@672w_378h_1c_!web-search-common-cover",
        "author": "北京大学计算机系肖臻",
        "views": "150.1万",
        "duration": "20:01:19",
        "source": "bilibili"
      },
      {
        "title": "【区块链通识课】《从比特币到区块链》-中国Top10名校研究生讲师与博士",
        "link": "https://www.bilibili.com/video/BV1me411J7Sk/",
        "cover": "https://i2.hdslb.com/bfs/archive/5f86a3c9a13ae5d79f23019c73079efdae83761e.png@672w_378h_1c_!web-search-common-cover",
        "author": "走近Web3",
        "views": "1389",
        "duration": "06:22:59",
        "source": "bilibili"
      }
    ]
  }
]
```

# 快速开始

请按照以下步骤快速启动项目：

```bash
# 克隆此项目
git clone https://github.com/HYPERVAPOR/bilibili-crawler

# 进入此目录
cd bilibili-crawler

# 安装依赖（推荐使用 pnpm）
pnpm i

# 启动服务
pnpm start
```

接下来，您可以使用 **POSTMAN** 或您的前端应用发送请求进行调试。

# 常见问题

## 如何更改默认监听端口

在 `bin/www` 文件中，修改以下代码：

```javascript
var port = normalizePort(process.env.PORT || "3000");
```

## 如何更改返回视频信息的条数

在 `routes/scrape.js` 文件中，修改函数 `function determineK(length)` 的逻辑：

```javascript
// 默认函数会根据标签的个数，总是返回20个左右的视频
function determineK(length) {
  if (length === 1) return 20;
  if (length === 2) return 10;
  if (length === 3) return 7;
  if (length === 4) return 5;
  if (length === 5 || length === 6) return 4;
  if (length >= 7 && length <= 9) return 3;
  if (length >= 10) return 2;
  return 5; // 默认值
}
```

# 免责声明

使用本项目即表示您已阅读、理解并同意以下条款：

1. **用途限制**  
   本项目仅供学习和交流之用，严禁用于任何商业目的。用户不得以任何形式将本项目用于盈利活动。

2. **法律合规**  
   用户承诺不将本项目用于任何违法或犯罪活动，包括但不限于侵犯他人知识产权、传播恶意软件或进行网络攻击等。

3. **平台保护**  
   用户不得以任何方式影响或干扰 Bilibili 平台的正常运营，包括但不限于过度请求、爬取数据或其他可能导致平台服务中断的行为。

4. **责任声明**  
   本项目的开发者不对因使用本项目而引发的任何直接、间接、偶然、特殊或后果性损害承担责任。用户使用本项目所产生的任何法律责任均由用户自行承担。

5. **条款变更**  
   本免责声明条款可能会不定期更新，用户应定期查阅本免责声明，以确保了解最新条款。

使用本项目，即表示您同意遵守上述所有条款。如您不同意，请立即停止使用本项目。
