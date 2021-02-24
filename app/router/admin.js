module.exports = app => {
    const { router, controller } = app;
    // const auth = app.middleware.auth();
    router.get('/admin/index', controller.admin.user.index);
    router.get('/admin/getUserLists', controller.admin.user.getUserLists);
    router.put('/admin/updateUserState', controller.admin.user.updateUserState);
    router.get('/admin/getAllComments', controller.admin.comment.getAllComments);
    router.put('/admin/deleteComment', controller.admin.comment.deleteComment);
    router.post('/admin/addBoard', controller.admin.board.addBoard);
    router.delete('/admin/deleteBoard', controller.admin.board.deleteBoard);
    router.delete('/admin/deleteArtist', controller.admin.artist.deleteArtist);
    router.put('/admin/modifyArtist', controller.admin.artist.modifyArtist);
    router.put('/admin/editBoard', controller.admin.board.editBoard);
}