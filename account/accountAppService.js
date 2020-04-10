const { createAccount, findAccount } = require("./usecase/");

function AccountAppService({ accountRepository, modelBuilder, accountValidator }) {
  return Object.freeze({
    createAccount: createAccount({
      accountRepository,
      modelBuilder,
      accountValidator
    })
    // findById: findAccount(db)
  });
}

module.exports = AccountAppService;
