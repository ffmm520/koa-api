// 异常处理中间件模块
const boom = require('@hapi/boom')
// 全局异常处理中间件
const gloableError = async (ctx, next) => {
	try {
		await next()
	} catch (err) {
		ctx.response.status = err.statusCode || err.status || 500
		ctx.response.body = {
			message: err
		}
	}
}

// 404路由中间件
function notFound(ctx) {
	ctx.body = boom.notFound('接口不存在').output.payload // 404
	// ctx.body = boom.gatewayTimeout()
}
module.exports = { gloableError, notFound }