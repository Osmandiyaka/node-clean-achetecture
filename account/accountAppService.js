const { createAccount, findAccount } = require("./usecase/");

function AccountAppService({ accountRepository, modelBuilder,execute }) {
  return Object.freeze({
    createAccount: createAccount({accountRepository,modelBuilder,execute})
  });
}

module.exports = AccountAppService;
