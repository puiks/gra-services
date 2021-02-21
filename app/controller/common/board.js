const Controller = require('egg').Controller;

class BoardController extends Controller {
    async getAllBoards() {
        const ctx = this.ctx;
        const result = await ctx.service.common.board.getAllBoards();
        ctx.body = {
            boardLists: result,
            status:200
        };
    }
    async selectBoardByTitle() {
        const ctx = this.ctx;
        const { title } = ctx.query;
        const result = await ctx.service.common.board.selectBoardByTitle(title);
        ctx.body = {
            board: result,
            status:200
        }
    }
    async selectBoardById() {
        const ctx = this.ctx;
        const { id } = ctx.query;
        const result = await ctx.service.common.board.selectBoardById(id);
        ctx.body = {
            board: result,
            status:200
        }
    } 
}

module.exports = BoardController;