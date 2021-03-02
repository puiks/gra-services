module.exports = (options) => {
    return async function cookieParser(ctx, next) {
        let req = ctx.request;
        req.cookies = {};
        (req.header.cookie || '').split(/\s*;\s*/).forEach((pair) => {
            let crack = pair.indexOf('=')
            if (crack < 1 || crack == pair.length - 1) return
            req.cookies[
                decodeURIComponent(pair.slice(0, crack)).trim()
              ] = decodeURIComponent(pair.slice(crack + 1)).trim()
        })
        await next();
    }
}