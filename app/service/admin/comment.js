const Service = require('egg').Service;

class CommentService extends Service {
    async getAllComments() {
        const result = await this.app.mysql.select('comment');
        return result;
    }
    async deleteComment(commentInfo) {
        const result = await this.app.mysql.update('comment', {
            id: commentInfo.id,
            state: 1,
            reason: commentInfo.reason
        });
        console.log(result);
        return result;
        // const conn = await this.app.mysql.beginTransaction();
        // console.log(commentInfo.cid);
        // let result;
        // try {
        //     result = await conn.delete('comment', {
        //         id: commentInfo.cid
        //     });
        //     await conn.query('ALTER TABLE comment AUTO_INCREMENT = 1;');
        //     await conn.commit();
        // } catch (error) {

        // }
        // console.log(result);
    }
}

module.exports = CommentService;