const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PORT: process.env.DB_PORT,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  QUERY_LOGGING: process.env.QUERY_LOGGING,
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
