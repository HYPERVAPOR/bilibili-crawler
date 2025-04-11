const axios = require("axios");
const cheerio = require("cheerio");

async function crawlBilibili(tagSelector, k) {
  const baseUrl = "https://search.bilibili.com/all?keyword=";
  const url = `${baseUrl}${encodeURIComponent(tagSelector)}`;

  try {
    console.log("请求的 URL:", url);
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const videos = [];
    const videoCards = $(".bili-video-card");

    // 获取视频卡片的总数
    const totalVideos = videoCards.length;

    // 确保 k 不超过总视频数量
    const numberOfVideosToSelect = Math.min(k, totalVideos);
    const selectedIndexes = new Set();

    // 随机选择 numberOfVideosToSelect 个视频
    while (selectedIndexes.size < numberOfVideosToSelect) {
      const randomIndex = Math.floor(Math.random() * totalVideos);
      selectedIndexes.add(randomIndex);
    }

    selectedIndexes.forEach((index) => {
      const element = videoCards[index];

      const title = $(element)
        .find(".bili-video-card__info--tit")
        .attr("title")
        .trim();
      const link = $(element).find("a").attr("href");
      const cover = $(element).find("img").attr("src");
      const author = $(element)
        .find(".bili-video-card__info--author")
        .text()
        .trim();
      const views = $(element).find("span").first().text().trim();
      const duration = $(element)
        .find(".bili-video-card__stats__duration")
        .text()
        .trim();

      const fullLink = link.startsWith("http") ? link : `https:${link}`;
      const fullCover = cover.startsWith("http") ? cover : `https:${cover}`;

      // 检测链接是否包含 "bilibili.com/video"
      if (!fullLink.includes("bilibili.com/video")) {
        console.log(`抛弃链接: ${fullLink}`);
        return; // 如果不包含，则跳过当前循环
      }

      videos.push({
        title,
        link: fullLink,
        cover: fullCover,
        author,
        views,
        duration,
        source: "bilibili", // 添加 source 属性
      });
    });

    return videos;
  } catch (error) {
    console.error("爬虫错误:", error.message);
    throw error;
  }
}

// 导出函数
module.exports = { crawlBilibili };
