const { createAccount, findAccount } = require("./usecase/");

function AccountAppService({ accountRepo, modelBuilder, accountValidator }) {
  return Object.freeze({
    createAccount: createAccount({
      accountRepo,
      modelBuilder,
      accountValidator
    })
    // findById: findAccount(db)
  });
}

module.exports = AccountAppService;
