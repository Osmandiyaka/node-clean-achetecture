const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const baseRepoBuilder = require("../core/baseRepo");
const fullyAuditedEntity=require('../core/fullyAuditedEntity');

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

const FullyAuditedAccountSchema=Object.assign({},fullyAuditedEntity,Account);
const AccountSchema = mongoose.model("accounts", new Schema(FullyAuditedAccountSchema));

function AccountRepo() {
  return Object.freeze(Object.assign({}, baseRepoBuilder(AccountSchema)));
}

module.exports = AccountDb;
