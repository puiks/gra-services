module.exports = app => {
    const { router, controller } = app;
    const auth = app.middleware.auth();
    router.get('/default/index', auth, controller.default.home.index);
}