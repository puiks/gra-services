const Controller = require('egg').Controller;

class UserController extends Controller {
    async register() {
        const ctx = this.ctx;
        const userInfo = ctx.request.body;
        const result = await ctx.service.common.user.register(userInfo);
        if (result === 0) {
            ctx.body = {
                status: '200',
                desc: '成功注册'
            };
        } else {
            ctx.body = {
                status: '501',
                desc: '注册失败'
            };
        }
    };
    async login() {
        /*
        ** loginType 分三种
        ** 0 -----  用户名登陆
        ** 1 -----  手机号登陆
        ** 2 -----  邮箱登录
       */
        const ctx = this.ctx;
        const loginType = ctx.query.loginType;
        const userInfo = ctx.request.body;
        const result = await ctx.service.common.user.login({
            ...userInfo,
            loginType
        });
        if (result.length !== 0) {
            ctx.body = {
                status: '200',
                desc: '成功登录'
            };
        } else {
            ctx.body = {
                status: '401',
                desc: '用户名/邮箱/手机号或密码错误'
            };
        }
    };
};

module.exports = UserController;