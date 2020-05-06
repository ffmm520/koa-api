const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const SalBill = sequelize.define(
  "SalBill",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ownerid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    billid: {
      type: DataTypes.INTEGER,
    },
    billno: {
      type: DataTypes.STRING,
    },
    grpno: {
      type: DataTypes.STRING,
    },
    cstcode: {
      type: DataTypes.STRING,
    },
    cstname: {
      type: DataTypes.STRING,
    },
    goods: {
      type: DataTypes.STRING,
    },
    goodsname: {
      type: DataTypes.STRING,
    },
    billqty: {
      type: DataTypes.DECIMAL,
    },
    unit: {
      type: DataTypes.STRING,
    },
    spec: {
      type: DataTypes.STRING,
    },
    lotno: {
      type: DataTypes.STRING,
    },
    vid: {
      type: DataTypes.INTEGER,
    },
    vcode: {
      type: DataTypes.STRING,
    },
    vname: {
      type: DataTypes.STRING,
    },
    producer: {
      type: DataTypes.STRING,
    },
    prod_addr: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
  },
  {
    tableName: "salbill",
    timestamps: false,
  }
);

module.exports = { SalBill };
