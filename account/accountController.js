const makeService = require("./accountAppService");
const accountValidator = require("./accountValidator");
const accountRepo = require("./accountRepo");
const modelBuilder = require("../core/modelBuilder");

module.exports = function accountModule({ app, httpRequestAdaptor }) {
  accountService = makeService({ accountRepo, modelBuilder, accountValidator });

  app.post("/api/accounts", httpRequestAdaptor(accountService.createAccount));
  //   app.get("/api/accounts", httpRequestAdaptor(accountService.getAccounts));
};
