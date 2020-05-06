const Koa = require("koa");
const bodyParser = require("koa-bodyparser");

// require("reflect-metadata");
require("./config/db.config");
require("./config/cms6.config");
const { gloableError, notFound } = require("./middleware/errorhandle");
const loginRouter = require("./routes/login");

const app = new Koa();

app.use(gloableError);
app.use(bodyParser());
app.use(loginRouter.routes());
app.use(notFound);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
