const Controller = require('egg').Controller;

class BoardController extends Controller {
    async addBoard() {
        const ctx = this.ctx;
        const boardInfo = ctx.request.body;
        const result = await ctx.service.admin.board.addBoard(boardInfo);
    }
    async deleteBoard() {
        const ctx = this.ctx;
        const { bid } = ctx.query;
        const result = await ctx.service.admin.board.deleteBoard(bid);
    }
}

module.exports = BoardController;