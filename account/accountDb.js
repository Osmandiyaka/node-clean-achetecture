const AccountSchema=require('./account');

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