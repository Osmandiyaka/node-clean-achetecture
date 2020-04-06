function signUpBuilder({ modelBuilder, userDb, userValidator, authService }) {
  return function signUp({ body, appSession }) {
    var userBuilder = modelBuilder({
      modelValidator: userValidator,
      appSession
    });
    const user = userBuilder(body);
    const passwordHash = authService.generateHash(user.password);
    const userToSave = { ...user, passwordHash };
    return userDb.save(userToSave);
  };
}

module.exports = signUpBuilder;
