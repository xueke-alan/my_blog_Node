const express = require("express");
const router = express.Router();

// 引入自定义模块
const sql = require("../Middleware/mysql");
const fs = require("../Middleware/fs");

// 查询文章全部详细信息
router.get("/articlesAll",sql,fs);


module.exports = router;
