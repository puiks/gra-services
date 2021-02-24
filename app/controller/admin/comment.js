const Controller = require('egg').Controller;

class CommentController extends Controller {
    async getAllComments() {
        const ctx = this.ctx;;
        const result = await ctx.service.admin.comment.getAllComments();
        ctx.body = {
            commentList: result,
            status: 200
        }
    };
    async deleteComment() {
        const ctx = this.ctx;
        const commentInfo = ctx.request.body;
        const result = await ctx.service.admin.comment.deleteComment(commentInfo);
        if (result.affectedRows === 1) {
            ctx.body = {
                status: 204,
                desc:'删除成功'
            }
        } else {
            ctx.body = {
                status: 500,
                desc:'删除失败'
            }
        }
        
    };
}

module.exports = CommentController;