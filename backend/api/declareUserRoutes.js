const { Router } = require("express");
const { addUserHandler, findUserHandler, updateUserHandler } = require("./endpoints/user");
let bodyParser = require('body-parser');

const routerOptions = {
  mergeParams: true,
  strict: true,
};

/**
 * Adds user routes to the provided app.
 * @param  {Express} app  Express app for current server.
 * @return {undefined}
 */
const declareDatabaseRoutes = (app) => {
  const route = "/database";
  const router = Router(routerOptions);

  router.post("/adduser/name=:name/role=:role/careHome=:careHome/interests=:interests/languages=:languages", addUserHandler);
  router.get("/finduser/:name", findUserHandler);
  router.post("/updateuser", updateUserHandler);

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(route, router);

  console.log(`[API] Database routes registered`);
};

module.exports = {
  declareDatabaseRoutes,
};
