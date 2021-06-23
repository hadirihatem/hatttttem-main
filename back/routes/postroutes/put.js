const { body } = require("express-validator");
var postcontroller = require("../../controllers/post.controllers");
const authmidllwares = require("../../midllwares/auth/authmidllwares");

const initializePutRoutes = (app) => {
  app.put("/post/:postId", [authmidllwares, postcontroller.putpost]);

  app.put("/postlike/:postId",[authmidllwares,postcontroller.putlikepost]);
};

module.exports = initializePutRoutes;
