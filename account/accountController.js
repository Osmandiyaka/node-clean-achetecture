const makeService = require("./accountAppService");
const accountValidator = require("./accountValidator");
const accountRepository = require("./accountRepository");
const modelBuilder = require("../core/modelBuilder");

function AccounController() {
  
}

module.exports = function accountModule({ app, appConfig,appAuditLog, httpRequestAdaptor }) {
  accountService = makeService({accountRepository, modelBuilder,accountValidator});

  app.post("/api/accounts", httpRequestAdaptor(accountService.createAccount));
  //   app.get("/api/accounts", httpRequestAdaptor(accountService.getAccounts));
};
