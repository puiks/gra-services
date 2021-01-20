const Controller = require('egg').Controller;

class AdminController extends Controller {
    async index() {
        this.ctx.body = 'admin home';
    }
};

module.exports = AdminController;