const userSchema = require("./user");

function UserDb() {
  return Object.freeze({
    find: find,
    findOne:findOne,
    save: save
  });

  function find(filter) {
    return userSchema.find(filter);
  }

  function save(user) {
    const userDb = new userSchema(user);
    return userDb.save();
  }

  function findOne(filter) {
    console.log(filter,'filter')
    return userSchema.findOne(filter);
  }
}

module.exports=UserDb;