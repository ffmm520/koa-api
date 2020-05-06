const oracledb = require("oracledb");
require("dotenv").config();

module.exports = {
  user: process.env.CMS6_USER,
  password: process.env.CMS6_PWD,
  connectString: process.env.CMS6_CONNECTSTRING,
};
