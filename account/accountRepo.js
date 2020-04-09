const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const baseRepoBuilder = require("../core/baseRepo");

var Account = {
  name: {
    type: String,
    required: true
  },
  balance: {
    type: Number,
    required: true
  },
  accountNumber: {
    type: String,
    required: true
  }
};

const AccountSchema = mongoose.model("accounts", new Schema(Account));

function AccountRepo() {
  return Object.freeze(Object.assign({}, baseRepoBuilder(AccountSchema)));
}

module.exports = AccountDb;
