const Controller = require('egg').Controller;

class AdminController extends Controller {
    async index() {
        const ctx = this.ctx;
        const user = await ctx.service.admin.home.find();
        console.log(user);
        this.ctx.body = user;
    }
};

module.exports = AdminController;