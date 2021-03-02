const Controller = require("egg").Controller;
const fs = require("fs");
const path = require("path");
const request = require("../../../utils/request");
const { cookieToJson } = require("../../../utils/index");

class SongController extends Controller {
  async searchSong() {
    let ctx = this.ctx;
    let req = ctx.request;
    let res = ctx.response;
    let cks = undefined;
    let result = undefined;
    fs.readdirSync(path.resolve(__dirname, "../../../module"))
      .reverse()
      .forEach(async (file) => {
        if (!file.endsWith(".js")) return;
        let route = "/" + file.replace(/\.js$/i, "").replace(/_/g, "/");
        let question = require(path.resolve(
          __dirname,
          "../../../module",
          file
        ));
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
        // const answer = await question(query, request);
        // res.set("Set-Cookie", answer.cookie);
        // res.state = answer.status;
        ctx.body = "goods";
        // ctx.body = answer.body;
        // console.log(data);
        // ctx.body = "nic";
        // .then((answer) => {
        //   result = answer.body;
        //   cks = answer.cookie;
        //   console.log(cks);
        //   console.log("[OK]", decodeURIComponent(req.originalUrl));
        //   // res.set("Set-Cookie", answer.cookie);
        //   // res.state = answer.status;
        //   // ctx.body = answer.body;
        // })
        // .catch((answer) => {
        //   console.log("[ERR]", decodeURIComponent(req.originalUrl), {
        //     status: answer.status,
        //     body: answer.body,
        //   });
        //   if (answer.body.code == "301") answer.body.msg = "需要登录";
        //   res.set("Set-Cookie", answer.cookie);
        //   res.status = answer.status;
        //   ctx.body = answer.body;
        // });
      });
    // ctx.body = "song";
  }
}

module.exports = SongController;
