const Sequelize = require("sequelize");
const db = new Sequelize("myblog", "xueke", "Xk990704", {
  host: "gz-cynosdbmysql-grp-gwzb3vtp.sql.tencentcdb.com",
  port: 28565,
  dialect: "mysql",
});

function GetStr(url) {
  switch (url) {
    case "/articlesall":
      return "select * from articles";
    default:
      return;
  }
}

module.exports = (req, res, next) => {
  db.query(GetStr(req.url)).then(
    (value) => {
      res.send(value);
    },
    () => next()
  );
};
