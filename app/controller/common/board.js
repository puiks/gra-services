const Controller = require('egg').Controller;

class BoardController extends Controller {
    async getAllBoards() {
        const ctx = this.ctx;
        const result = await ctx.service.common.board.getAllBoards();
    }
    async selectBoard() {
        const ctx = this.ctx;
        const { title } = ctx.query;
        const result = await ctx.service.common.board.selectBoard(title);
    }
}

module.exports = BoardController;