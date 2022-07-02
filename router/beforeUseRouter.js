const cors = require("cors");
const sql = require("../Middleware/mysql");
module.exports = (app) => {
  // 跨域模块

  app.use(cors());


  return app;
};
