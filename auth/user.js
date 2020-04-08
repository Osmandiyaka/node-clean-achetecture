const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = {
  emailAddress: String,
  passwordHash: String,
  fullName: String,
  phoneNumber: String
};

const UserSchema = new Schema(user);

module.exports = mongoose.model("users", UserSchema);
