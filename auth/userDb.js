const userSchema = require("./user");

function UserDb() {
  return Object.freeze({
    findUser: findUser,
    save: save
  });

  function findUser(filter) {
    return userSchema.find(filter);
  }

  function save(user) {
    const userDb = new userSchema(user);
    return userDb.save();
  }
}

module.exports=UserDb;