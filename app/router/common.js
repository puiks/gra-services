module.exports = app => {
    const { router, controller } = app;
    router.get('/logout', controller.common.user.logout);
    router.post('/login', controller.common.user.login);
    router.post('/register', controller.common.user.register);
    router.put('/resetPassword', controller.common.user.resetPassword);
}