module.exports = function makeAccountCreator({
  accountRepo,
  modelBuilder,
  accountValidator
}) {
  const db = accountRepo();
  return function createAccount({ body, appSession }) {
    const accountBuilder = modelBuilder({
      modelValidator: accountValidator,
      appSession
    });
    const account = accountBuilder(body);
    return db.save(account);
  };
};
