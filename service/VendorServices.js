// 操作供应商信息的类
const boom = require("@hapi/boom");
const { Vendor } = require("../models/Vendor");
const VendorWare = require("../models/VendorWare");
const { findVendorByCode, findGoodsByCode } = require("../models/cms6");
const {} = require('../models/cms6')

// 查询供应商
async function findVendorById(ctx) {
  ctx.id = 17510; //模拟jwt解析出来的vid
  const id = 17510;
  const result = await Vendor.findAll({
    where: {
      vid: id,
    },
  });
  ctx.body = result;
}

// 添加供应商账户
async function addVendorByCode(ctx) {
  // ？正则判断code是否符合规则
  const { vcode } = ctx.request.body;
  console.log(vcode);
  // ctx.body = vcode;
  const vendor = await findVendorByCode(vcode);
  ctx.body = vendor;
}

// 修改供应商账户密码
async function addGoodsByid(ctx) {
  const { vid, goodid, ownerid } = ctx.request.body;
  console.log(vid, goodid, ownerid);
  const result = await VendorWare.findOne({
    where: {
      vid,
      goodid,
      ownerid,
    },
  });
  // console.log(result);
  if (!result) {
    // ctx.body = boom.badRequest('添加信息重复');
    const goodsResult = await VendorWare.create({ vid, goodid, ownerid });
    ctx.body = goodsResult;
    // ctx.body = result;
    return;
  }

  // ctx.body = { "msg": "hello"}
  ctx.body = boom.badRequest("添加商品信息重复").output.payload;
}
// 禁用供应商：停用

module.exports = { findVendorById, addVendorByCode, addGoodsByid };
