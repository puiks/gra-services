module.exports = options => {
    return async function midHttp(ctx, next) {
        ctx.response.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
        ctx.response.set('Content-Type', 'application/json; charset=utf-8');
        if (ctx.request.method === 'OPTIONS') {
            ctx.response.status = 204;
        } else {
            await next();
        }
    }
}