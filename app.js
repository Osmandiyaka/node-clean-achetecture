var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const mongoose=require('mongoose');
mongoose.Promise = Promise

const connectionManager=require('./dbConnectionManager');
const connection=connectionManager(mongoose);
 connection('mongodb://localhost:27017/bank')

const appDb=require('./appDb')(mongoose);
const httpRequestAdaptor=require('./adaptHttpRequest');
var accountService=require('./bank/accountAppService')(appDb);



var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post('/api/accounts', httpRequestAdaptor(accountService.createAccount));
app.get('/api/accounts', httpRequestAdaptor(accountService.getAccounts));


app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
   next(err);
});

module.exports = app;
