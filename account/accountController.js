const makeService = require("./accountAppService");
const accountRepository = require("./accountRepository");

const modelBuilder = require("../core/modelBuilder");
const execute=require('../core/execute');
const appEvent=require('../core/appEvent');
const accountEvent=require('./events/accountOpenedEvent');

module.exports = function accountController({ app, appConfig, httpRequestAdaptor }) {
  appEvent.on('account-opened',accountEvent);

  accountService = makeService({accountRepository, modelBuilder,execute,appEvent});

  app.post("/api/accounts", httpRequestAdaptor(accountService.createAccount));

};
