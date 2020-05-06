const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Stock = sequelize.define(
  "Stock",
  {
    id: {
      type: DataTypes.INTEGER,
    },
    ownerid: {
      type: DataTypes.INTEGER,
    },
    goodid: {
      type: DataTypes.INTEGER,
    },
    stock_qty: {
      type: DataTypes.DECIMAL,
    },
    vid: {
      type: DataTypes.INTEGER,
    },
    lotno: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "salbill",
    timestamps: false,
  }
);

module.exports = { Stock };
