const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const baseModel = require("../baseModel");

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

const AccountSchema = new Schema(Account);

module.exports = mongoose.model("accounts", AccountSchema);
