var express = require("express");
var cors = require("cors"); // 引入 CORS 中间件
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var scrapeRouter = require("./routes/scrape");

var app = express();

// 中间件设置
app.use(cors()); // 使用 CORS 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 路由设置
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/scrape", scrapeRouter);

// 404 错误处理
app.use(function (req, res, next) {
  res.status(404).send("Not Found");
});

// 错误处理
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send("Error: " + err.message);
});

module.exports = app;
