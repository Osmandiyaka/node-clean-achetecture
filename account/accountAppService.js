const { createAccount, findAccount } = require("./usecase/");

function AccountAppService({ accountRepository, modelBuilder,execute,customerDb }) {
  const _customerDb=customerDb();
  
  return Object.freeze({
    createAccount: createAccount({accountRepository,createCustomer:_customerDb.insert,modelBuilder,execute})
  });
}

module.exports = AccountAppService;
