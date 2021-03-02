module.exports = (appInfo) => {
  const config = (exports = {});
  // cookie配置
  config.keys = appInfo.name + "_1594602090964_3116";
  // 数据库配置
  config.middleware = ["http", "cookieParser", "cache"];
  config.mysql = {
    client: {
      host: "localhost",
      port: "3306",
      user: "root",
      password: "root",
      database: "cloud_music",
      // 修正数据库时间格式和时区
      dateStrings: true,
    },
  };
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ["*"],
  };
  config.cors = {
    origin: "http://127.0.0.1:8080",
    credentials: true,
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  config.session = {
    key: "SESSION_ID", // 设置session cookie里面的key
    maxAge: 1000 * 60 * 30, // 设置过期时间
    httpOnly: true,
    encrypt: true,
    renew: true, // renew等于true 那么每次刷新页面的时候 session都会被延期
  };
  return {
    ...config,
  };
};
