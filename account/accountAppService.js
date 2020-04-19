const { createAccount, findAccount } = require("./usecase/");

function AccountAppService({ accountRepository, modelBuilder,execute,createCustomer,appEvent }) {
  return Object.freeze({
    createAccount: createAccount({accountRepository,createCustomer,modelBuilder,execute,appEvent})
  });
}

module.exports = AccountAppService;
