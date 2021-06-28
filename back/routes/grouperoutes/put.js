var groupecontroller = require("../../controllers/groupe.controllers");
const authmidllwares = require("../../midllwares/auth/authmidllwares");

const initializePutRoutes = (app) => {
  app.put("/groupe/:groupeId", [authmidllwares, groupecontroller.update]);
  app.put("/putsub/:groupeId",[authmidllwares,groupecontroller.putsub])
};

module.exports = initializePutRoutes;
