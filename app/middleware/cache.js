const cache = require("../../utils/apicache").middleware;
module.exports = (options) => {
  return async function caches(ctx, next) {
    cache("2 minutes", (req, res) => res.status === 200);
    await next();
  };
};
