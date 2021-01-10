const express = require("express");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const { declareDatabaseRoutes } = require("./api/declareUserRoutes");
const { declareMatchRoutes } = require("./api/declareMatchRoutes")

const app = express();

app.promiseListen = function promiseListen(port, host) {
  return new Promise((resolve, reject) =>
    this.listen(port, host, (err) => (!err ? resolve() : reject(err)))
  );
};

const runServer = async () => {
  // declare routes
  declareDatabaseRoutes(app);
  declareMatchRoutes(app);


  // start server
  await app.promiseListen(PORT, HOST);
  console.log(`[Server Startup] Running on http://${HOST}:${PORT}`);
};

module.exports = {
  app,
  runServer,
};
