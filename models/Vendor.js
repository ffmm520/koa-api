const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Vendor = sequelize.define(
  "Vendor",
  {
    vid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vcode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stopflag: {
      type: DataTypes.ENUM("0", "1"),
      allowNull: false,
    },
    startdate: { type: DataTypes.DATE, allowNull: false },
    enddate: { type: DataTypes.DATE, allowNull: false },
  },
  {
    tableName: "vendors",
    timestamps: false,
  }
);

module.exports = { Vendor };
