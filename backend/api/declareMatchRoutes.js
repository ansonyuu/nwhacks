const { Router } = require("express");
const { createMatchHandler } = require("./endpoints/createMatch");

const routerOptions = {
  mergeParams: true,
  strict: true,
};

/**
 * Adds match routes to the provided app.
 * @param  {Express} app  Express app for current server.
 * @return {undefined}
 */
const declareMatchRoutes = (app) => {
  const route = "/creatematch";
  const router = Router(routerOptions);

  router.post("/", createMatchHandler);

  app.use(route, router);

  console.log(`[API] Match routes registered`);
};

module.exports = {
    declareMatchRoutes,
};
