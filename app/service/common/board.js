const Service = require('egg').Service;

class BoardService extends Service {
    async getAllBoards() {
        const result = await this.app.mysql.select('board');
        console.log(result);
    }
    async selectBoard(title) {
        const sql = `select * from board where title like "%${title}%" `
        const result = await this.app.mysql.query(sql);
        console.log(result);
    }
}

module.exports = BoardService;