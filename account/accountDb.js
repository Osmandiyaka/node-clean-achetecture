const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  

function AccountDb() {
    
    return Object.freeze({
       save 
    });

    function save(account) {
        var db=new AccountSchema(account)
        return db.save();
    }
}

module.exports=AccountDb;