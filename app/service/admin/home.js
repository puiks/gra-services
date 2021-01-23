const AdminController = require('../../controller/admin/home');

const Service = require('egg').Service;

class AdminService extends Service {
    async find() {
        const user = await this.app.mysql.get('user', { id: 1 });
        return { user };
    }
};

module.exports = AdminService;