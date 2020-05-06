require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_NAME, DB_USER, DB_PWD, DB_HOST, DB_PORT } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PWD, {
  host:DB_HOST,
  port: DB_PORT,
  dialect: "mysql",
  options: {
		encrypt: true,
		enableArithAbort: true,
		trustServerCertificate: false
	},
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

// 测试连接
async function run() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
run()

module.exports = sequelize;
