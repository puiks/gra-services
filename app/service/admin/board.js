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
        const result = await this.app.mysql.update('board', {
            id: bid,
            state: 1
        });
        return result;
    }
    async editBoard(board) {
        const result = await this.app.mysql.update('board', board);
        return result;
    }
}

module.exports = BoardService;