var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var bodyParser = require('body-parser')

const mongoose = require("mongoose");
mongoose.Promise = Promise;

const connectionManager = require("./dbConnectionManager");
const connect = connectionManager(mongoose);
connect("mongodb://localhost:27017/bank");

const httpRequestAdaptor = require("./adaptHttpRequest");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

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
