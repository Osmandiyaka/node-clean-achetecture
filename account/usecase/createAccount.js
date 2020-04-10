module.exports = function makeAccountCreator({
  accountRepository,
  modelBuilder,
  accountValidator
}) {
  const db = accountRepository();
  return function createAccount({ body, appSession }) {
    const accountBuilder = modelBuilder({
      modelValidator: accountValidator,
      appSession
    });
    const account = accountBuilder(body);
    return db.save(account);
  };
};
