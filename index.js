const Koa = require('koa');
const Router = require('koa-router');
require('./config/db.config')
const loginRouter = require('./routes/login')
const router = new Router();
const app = new Koa()

app.use(loginRouter.routes())

app.listen(3000, () => {
  console.log('server running on port 3000');
})