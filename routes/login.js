const Router = require("koa-router");
const router = new Router()
const { Vendor } = require("../models/Vendor");


router.get("/list", find);

async function find(ctx) {
  const result = await Vendor.findAll();
  // console.log(result);
  ctx.body = result;
}
// find()

module.exports = router;
