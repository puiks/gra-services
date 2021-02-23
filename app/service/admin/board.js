const Service = require('egg').Service;

class BoardService extends Service {
    async addBoard(boardInfo) {
        const result = await this.app.mysql.insert('board', {
            ...boardInfo,
            releaseTime: this.app.mysql.literals.now,
            username: '111'
        });
        return result;
    }
    async deleteBoard(bid) {
        const conn = await this.app.mysql.beginTransaction();
        let result;
        try {
            result = await conn.delete('board', {
                id: bid
            });
            await conn.query('ALTER TABLE board AUTO_INCREMENT = 1;');
            await conn.commit();
        } catch (err) {

        }
        console.log(result);
    }
    async editBoard(board) {
        const result = await this.app.mysql.update('board', board);
        return result;
    }
}

module.exports = BoardService;