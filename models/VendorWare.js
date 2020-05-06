const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const VendorWare = sequelize.define(
  'VendorWare', {
    /* id: {
      type: DataTypes.INTEGER
    }, */
    vid: {
      type: DataTypes.INTEGER
    },
    goodid: {
      type: DataTypes.INTEGER
    },
    stopflag: {
      type: DataTypes.ENUM('0', '1')
    },
    ownerid: {
      type: DataTypes.INTEGER
    }
  },
  {
    tableName: "vendor_ware",
    timestamps: false,
  }
) 

module.exports = VendorWare