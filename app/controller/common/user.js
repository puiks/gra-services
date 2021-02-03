const Controller = require('egg').Controller;
const moment = require('moment');

moment.locale('zh-cn');

class UserController extends Controller {
    async register() {
        const ctx = this.ctx;
        const userInfo = ctx.request.body;
        const today = moment().format('YYYY-MM-DD');
        const result = await ctx.service.common.user.register({
            ...userInfo,
            type: 0,
            state: 0,
            registerDate: today
        });
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
        const userInfo = ctx.request.body;
        const result = await ctx.service.common.user.login(userInfo);
        if (result.length !== 0) {
            ctx.session.openId = { openId: Date.now() };
            ctx.session.uid = result[0].id;
            ctx.body = {
                status: '200',
                desc: '成功登录',
                type: result[0].type
            };
        } else {
            ctx.body = {
                status: '401',
                desc: '用户名/邮箱/手机号或密码错误'
            };
        }
        // console.log(ctx.session);
    };
    async resetPassword() {
        const ctx = this.ctx;
        const userInfo = ctx.request.body;
        const result = await ctx.service.common.user.resetPassword(userInfo);
        if (result === 0) {
            ctx.body = {
                status: 204,
                desc: '成功修改密码'
            };
        } else {
            ctx.body = {
                status: 501,
                desc: '修改失败'
            };
        }
    };
    async logout() {
        const ctx = this.ctx;
        ctx.session.openId = null;
        ctx.body = {
            status: 204,
            desc: '已退出登录'
        }
    }
    async checkCode() {
        const ctx = this.ctx;
        const myCode = 'now';
        const code = ctx.request.body.code;
        if (code === myCode) {
            ctx.body = { status: 204 };
        } else {
            ctx.body = { status: 401 };
        }
        // const result = ctx.service.common.user.checkCode();
    }
};

module.exports = UserController;