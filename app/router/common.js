module.exports = app => {
    const { router, controller } = app;
    router.get('/logout', controller.common.user.logout);
    router.post('/login', controller.common.user.login);
    router.post('/register', controller.common.user.register);
    router.put('/resetPassword', controller.common.user.resetPassword);
    router.post('/checkCode', controller.common.user.checkCode);
    router.get('/getAllSongLists', controller.common.songList.getAllSongLists);
    router.delete('/deleteSongList', controller.common.songList.deleteSongList);
    router.get('/getSongList', controller.common.songList.getSongList);
    router.put('/updateSongList', controller.common.songList.updateSongList);
    router.post('/addSongList', controller.common.songList.addSongList);
    router.get('/getSongsComments', controller.common.comment.getSongsComments);
    router.get('/getSubComments', controller.common.comment.getSubComments);
    router.post('/addComment', controller.common.comment.addComment);
    router.get('/getAllBoards', controller.common.board.getAllBoards);
    router.get('/selectBoard', controller.common.board.selectBoard);
}