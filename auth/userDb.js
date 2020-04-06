const userSchema = require("./user");

function UserDb() {
  return Object.freeze({
    findUser: findUser,
    createUser: saveUser
  });

  function findUser(filter) {
    return userSchema.find(filter);
  }

  function saveUser(user) {
    const userDb = new userSchema(user);
    return userDb.save();
  }
}

module.exports=UserDb;