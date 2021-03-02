module.exports = (app) => {
  const { router, controller } = app;
  const auth = app.middleware.auth();
  router.get("/admin/index", controller.admin.user.index);
  router.get("/admin/getUserLists", auth, controller.admin.user.getUserLists);
  router.put(
    "/admin/updateUserState",
    auth,
    controller.admin.user.updateUserState
  );
  router.get("/admin/getAllComments", controller.admin.comment.getAllComments);
  router.put(
    "/admin/deleteComment",
    auth,
    controller.admin.comment.deleteComment
  );
  router.post("/admin/addBoard", auth, controller.admin.board.addBoard);
  router.delete("/admin/deleteBoard", auth, controller.admin.board.deleteBoard);
  router.delete(
    "/admin/deleteArtist",
    auth,
    controller.admin.artist.deleteArtist
  );
  router.put("/admin/modifyArtist", auth, controller.admin.artist.modifyArtist);
  router.put("/admin/editBoard", auth, controller.admin.board.editBoard);
};
