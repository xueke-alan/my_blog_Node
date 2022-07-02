const Sequelize = require("sequelize");
const secret = require("../secret/secrett/secret");
const db = new Sequelize(...secret.sequelize);


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
