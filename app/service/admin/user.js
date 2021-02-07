const Service = require('egg').Service;

class AdminService extends Service {
    async find() {
        const user = await this.app.mysql.get('user', { id: 1 });
        return { user };
    }
    async getUserLists() {
        const userLists = await this.app.mysql.select('user');
        return { userLists };
    }
    async updateUserState(state, id) {
        const user = { id, state };
        const result = await this.app.mysql.update('user', user);
        return result;
    }
};

module.exports = AdminService;