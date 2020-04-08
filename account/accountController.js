const makeService = require("./accountAppService");
const accountValidator = require("./accountValidator");
const accountDb = require("./accountDb");
const modelBuilder = require("../core/modelBuilder");

module.exports = function accountModule({ app, httpRequestAdaptor }) {
  accountService = makeService({ accountDb, modelBuilder, accountValidator });

  app.post("/api/accounts", httpRequestAdaptor(accountService.createAccount));
  //   app.get("/api/accounts", httpRequestAdaptor(accountService.getAccounts));
};
