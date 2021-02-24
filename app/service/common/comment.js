const Service = require('egg').Service;

class CommentService extends Service {
    // async getAllComments() {
    //     const result = await this.app.mysql.select('comment', {
    //         orders: [['commentTime', 'desc']]
    //     });
    //     console.log(result);
    //     // return result;
    // }
    async getSongsComments(sid) {
        const result = await this.app.mysql.select('comment', {
            where: { belongTo: sid },
            limit: 10,
            orders: [['commentTime', 'desc']]
        }
        );
        console.log(result);
    }
    async getSubComments(parentId) {
        // console.log(parentId);
        const result = await this.app.mysql.select('comment', {
            where: { parentId }
        })
        console.log(result);
    }
    async addComment(commentInfo) {
        const result = await this.app.mysql.insert('comment', {
            ...commentInfo,
            commentTime: this.app.mysql.literals.now
        })
        console.log(result);
    }
}

module.exports = CommentService;