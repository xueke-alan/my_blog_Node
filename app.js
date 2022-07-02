// 引入express模块
const express = require("express");
let app = express();

// 路由前引入
app = require("./router/beforeUseRouter")(app);

// 引入路由模块
const router = require("./router/router");
app.use(router);

// 路由后引入
app = require("./router/afterUseRouter")(app);

// 开启端口
app.listen(80, () => {
  console.log("OK");
});
