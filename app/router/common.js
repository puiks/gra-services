module.exports = app => {
    const { router, controller } = app;
    router.post('/login', controller.common.user.login);
    router.post('/register', controller.common.user.register);
}