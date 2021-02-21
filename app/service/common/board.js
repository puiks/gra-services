const Service = require('egg').Service;

class BoardService extends Service {
    async getAllBoards() {
        const result = await this.app.mysql.select('board');
        return result;
    }
    async selectBoardByTitle(title) {
        const sql = `select * from board where title like "%${title}%" `
        const result = await this.app.mysql.query(sql);
        return result
    }
    async selectBoardById(id) {
        const result = await this.app.mysql.get('board', {
            id
        });
        return result
    }
}

module.exports = BoardService;