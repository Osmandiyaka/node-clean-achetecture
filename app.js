var createError = require("http-errors");
const app=require('./startUp/createApp');
const appConfig=require('./startUp/loadConfig');
global.gAppConfig=appConfig;


const connectionManager = require("./startUp/dbConnectionManager")(appConfig);
connectionManager.connect();

const httpRequestAdaptor = require("./core/adaptHttpRequest");

const userDb = require("./auth/userDb")();
var secure = require("./auth/routeSecurityManager")(userDb.findOne);
secure("/api", app);

require("./account").controller({ app, httpRequestAdaptor });
require("./auth").controller({ app, httpRequestAdaptor });

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  console.log(err)
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  next(err);
});

module.exports = app;
