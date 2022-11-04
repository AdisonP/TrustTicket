const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  secret: process.env.TOKEN_SECRET,
  jwtExpiration: 86400,
  jwtRefreshExpiration: 86400,
};
