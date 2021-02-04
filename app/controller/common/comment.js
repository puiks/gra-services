const Controller = require('egg').Controller;

class CommentController extends Controller {
    async getAllComments() {
        const ctx = this.ctx;;
        const result = await ctx.service.common.comment.getAllComments();
        // console.log(result);
    }
    async getSongsComments() {
        const ctx = this.ctx;
        const { sid } = ctx.query;
        const result = await ctx.service.common.comment.getSongsComments(sid);
    }
    async getSubComments() {
        const ctx = this.ctx;
        const { parentId } = ctx.query;
        const result = await ctx.service.common.comment.getSubComments(parentId);
    }
    async addComment() {
        const ctx = this.ctx;
        const commentInfo = ctx.request.body;
        const result = ctx.service.common.comment.addComment(commentInfo);
    }
}

module.exports = CommentController;