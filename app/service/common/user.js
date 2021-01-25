const Service = require('egg').Service;

class UserService extends Service {
    async register(userInfo) {
        const result = await this.app.mysql.insert('user', {
            ...userInfo
        });
        return result.affectedRows === 1 ? 0 : 1;
    };
    async login(userInfo) {
        let result = null;
        switch (userInfo.loginType) {
            case '0':
                result = await this.app.mysql.select('user', {
                    where: {
                        username: userInfo.username,
                        password: userInfo.password
                    }
                });
                break;
            case 1:
                result = await this.app.mysql.select('user', {
                    where: {
                        telephone: userInfo.telephone,
                        password: userInfo.password
                    }
                });
                break;
            case 2:
                result = await this.app.mysql.select('user', {
                    where: {
                        email: userInfo.email,
                        password: userInfo.password
                    }
                });
                break;
        }
        return result;
    }
    async resetPassword(userInfo) {
        const result = await this.app.mysql.update('user', userInfo);
        return result.affectedRows === 1 ? 0 : 1;
    }
}

module.exports = UserService;