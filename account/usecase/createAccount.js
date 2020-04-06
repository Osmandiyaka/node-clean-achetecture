module.exports = function makeAccountCreator({accountDb, modelBuilder, accountValidator}) {
  const db=accountDb();
  return function createAccount({ body, appSession }) {
    const accountBuilder = modelBuilder({ modelValidator: accountValidator,appSession });
    const account = accountBuilder(body);
    return db.save(account);
  };
};
