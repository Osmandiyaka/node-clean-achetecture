const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const BaseRepository = require("../core/baseRepository");
const fullyAuditedEntity = require("../core/fullyAuditedEntity");

const Customer = {
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  accounts: [{
    type: objectId,
    ref: "accounts"
  }],
  payees:[{
    type:objectId,
    ref:'accounts'
  }]
};

const FullyAuditedCustomerSchema = Object.assign({},
  fullyAuditedEntity,
  Customer
);
const CustomerSchema = mongoose.model("customers", new Schema(FullyAuditedCustomerSchema));

function CustomerRepository() {
  BaseRepository.call(this, CustomerSchema);
}

CustomerRepository.prototype.addPayee=function addPayee(addPayeeInputDto) {
  
}

CustomerRepository.prototype.addAccount=function addAccount(addAccountInputDto) {
  
}

CustomerRepository.prototype = Object.create(BaseRepository.prototype);

module.exports = CustomerRepository;