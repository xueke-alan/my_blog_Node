module.exports = {
  sequelize: [
    "database",
    "username",
    "password",
    {
      host: "localhost",
      port: 3306,
      dialect: "mysql" | "mariadb" | "sqlite" | "postgres" | "mssql",
    },
  ],
};
