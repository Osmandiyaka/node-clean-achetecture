const { createAccount, findAccount } = require("./usecase/");

function AccountAppService({ accountDb, modelBuilder, accountValidator }) {
  return Object.freeze({
    createAccount: createAccount({
      accountDb,
      modelBuilder,
      accountValidator
    })
    // findById: findAccount(db)
  });
}

module.exports = AccountAppService;
