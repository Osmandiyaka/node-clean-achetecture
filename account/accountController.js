const makeService = require("./accountAppService");
const accountRepository = require("./accountRepository");
const modelBuilder = require("../core/modelBuilder");
const execute=require('../core/execute');

module.exports = function accountController({ app, appConfig, httpRequestAdaptor }) {
  accountService = makeService({accountRepository, modelBuilder,execute});

  app.post("/api/accounts", httpRequestAdaptor(accountService.createAccount));

};
