module.exports = appInfo => {
    const config = exports = {};
    // cookie配置
    config.keys = appInfo.name + '_1594602090964_3116';
    // 数据库配置
    config.mysql = {
        client: {
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'root',
            database: 'cloud_music',
            // 修正数据库时间格式和时区
            dateStrings: true
        }
    };
    config.security = {
        csrf: {
            enable: false
        },
        domainWhiteList: ['*']
    };
    config.cors = {
        origin: 'http://localhost:8080',
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
    };
    return {
        ...config
    };
};