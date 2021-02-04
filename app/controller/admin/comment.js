const Controller = require('egg').Controller;

class CommentController extends Controller {
    async getAllComments() {
        const ctx = this.ctx;;
        const result = await ctx.service.common.comment.getAllComments();
        // console.log(result);
    };
    async deleteComment() {
        const ctx = this.ctx;
        const commentInfo = ctx.query;
        const result = await ctx.service.admin.comment.deleteComment(commentInfo);
    };
}

module.exports = CommentController;