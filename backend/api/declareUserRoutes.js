const { Router } = require("express");
const { addUserHandler } = require("./endpoints/user");

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

  router.get("/addNewUser", addUserHandler);

  app.use(route, router);

  console.log(`[API] Database routes registered`);
};

module.exports = {
  declareDatabaseRoutes,
};
