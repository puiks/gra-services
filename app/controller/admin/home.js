const Controller = require('egg').Controller;

class AdminController extends Controller {
    async index() {
        const ctx = this.ctx;
        const user = await ctx.service.admin.home.find();
        console.log(user);
        this.ctx.body = user;
    }
    async getUserLists() {
        const ctx = this.ctx;
        const userLists = await ctx.service.admin.home.getUserLists();
        ctx.body = userLists;
    }
    async updateUserState() {
        const ctx = this.ctx;
        const { state, id } = ctx.request.body;
        const result = await ctx.service.admin.home.updateUserState(state, id);
        if (result.affectedRows) {
            ctx.body = {
                status: 204,
                desc: '操作成功'
            }
        }
    }
};

module.exports = AdminController;