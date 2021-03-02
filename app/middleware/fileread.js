const fs = require("fs");
const path = require("path");
const request = require("../../utils/request");
const { cookieToJson } = require("../../utils/index");
module.exports = (options) => {
  return async function FileReader(ctx, next) {
    let req = ctx.request;
    let res = ctx.response;
    console.log(req);
    fs.readdirSync(path.resolve(__dirname, "../../module"))
      .reverse()
      .forEach((file) => {
        if (!file.endsWith(".js")) return;
        let route = "/" + file.replace(/\.js$/i, "").replace(/_/g, "/");
        let question = require(path.resolve(__dirname, "../../module", file));
        if (typeof req.header.cookie === "string") {
          req.header.cookie = cookieToJson(req.header.cookie);
        }
        let query = Object.assign(
          {},
          { cookie: req.cookies },
          req.query,
          req.body,
          req.files
        );
        question(query, request)
          .then((answer) => {
            console.log("[OK]", decodeURIComponent(req.originalUrl));
            res.set("Set-Cookie", answer.cookie);
            res.state = answer.status;
            res.body = answer.body;
          })
          .catch((answer) => {
            console.log("[ERR]", decodeURIComponent(req.originalUrl), {
              status: answer.status,
              body: answer.body,
            });
            if (answer.body.code == "301") answer.body.msg = "需要登录";
            res.set("Set-Cookie", answer.cookie);
            res.status = answer.status;
            res.body = answer.body;
          });
      });
    await next();
  };
};
