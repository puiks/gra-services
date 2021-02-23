const Controller = require('egg').Controller;

class BoardController extends Controller {
    async addBoard() {
        const ctx = this.ctx;
        const boardInfo = ctx.request.body;
        const result = await ctx.service.admin.board.addBoard(boardInfo);
        if (result.affectedRows === 1) {
            ctx.body = {
                status: 204,
                desc: '发布成功'
            }
        } else {
            ctx.body = {
                status: 500,
                desc: '发布失败'
            }
        }
    }
    async deleteBoard() {
        const ctx = this.ctx;
        const { bid } = ctx.query;
        const result = await ctx.service.admin.board.deleteBoard(bid);
    }
    async editBoard() {
        const ctx = this.ctx;
        const {board} = ctx.request.body;
        const result = await ctx.service.admin.board.editBoard(board);
        if (result.affectedRows === 1) {
            ctx.body = {
                status: 204,
                desc:'更新成功'
            }
        } else {
            ctx.body = {
                status: 500,
                desc:'更新失败'
            }
        }
    }
}

module.exports = BoardController;