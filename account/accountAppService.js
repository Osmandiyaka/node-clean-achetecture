const { createAccount, findAccount } = require("./usecase/");

function AccountAppService({ accountRepository, modelBuilder,execute,customerDb }) {
  return Object.freeze({
    createAccount: createAccount({accountRepository,createCustomer:customerDb.insert,modelBuilder,execute})
  });
}

module.exports = AccountAppService;
