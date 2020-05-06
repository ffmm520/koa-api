const Router = require("koa-router");
const router = new Router({ prefix: "/vendor" });
const { Vendor } = require("../models/Vendor");
const { findVendorById, addVendorByCode, addGoodsByid } = require("../service/VendorServices");
const { findVendorByCode, findGoodsByCode } = require('../models/cms6')

router.get("/list", findVendorById);
router.post('/add', addVendorByCode);
router.post('/goods', addGoodsByid);
router.get('/client/:vcode', async ctx => {
  const { vcode } = ctx.params;
  const result = await findVendorByCode(vcode);
  ctx.body = result;
});
router.get('/goods/:goods', async ctx => {
  const { goods } = ctx.params;
  const result = await findGoodsByCode(goods);
  ctx.body = result;
});
async function find(ctx) {
  const result = await Vendor.findAll();
  // console.log(result);
  ctx.body = result;
}
// find()

module.exports = router;
