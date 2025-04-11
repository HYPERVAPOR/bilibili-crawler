const express = require("express");
const { crawlBilibili } = require("../services/crawler_bilibili");
const router = express.Router();
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

router.post("/", async (req, res) => {
  const { tags } = req.body;

  // 根据 tags 的长度动态决定 k 的大小
  const k = determineK(tags.length);

  try {
    console.log("标签选择器:", tags);

    // 使用 Promise.all 并行爬取每个来源标签
    const crawlResults = [];

    for (const tag of tags) {
      const result = await crawlBilibili(tag, k); // 逐个调用爬虫函数
      crawlResults.push({ tag, tag, result }); // 保存结果
      console.log(`爬取结果(${tag}, ${tag}):`, result);
    }

    res.status(200).json(crawlResults); // 返回逐个结果
  } catch (error) {
    console.error("爬虫错误:", error.message);
    res.status(500).json({ message: "爬虫失败", error: error.message });
  }
});

module.exports = router;
