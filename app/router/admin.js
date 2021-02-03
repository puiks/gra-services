module.exports = app => {
    const { router, controller } = app;
    // const auth = app.middleware.auth();
    router.get('/admin/index', controller.admin.home.index);
    router.get('/admin/getUserLists', controller.admin.home.getUserLists);
    router.put('/admin/updateUserState', controller.admin.home.updateUserState);
}