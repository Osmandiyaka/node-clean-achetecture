function AccountAppService(accountDb) {
    const db=accountDb('banks');

    return Object.freeze({
      createAccount,
    //   deleteAccount,
    //   blockAccount,
    //   transfereMoney,
    //   getAccount,
      getAccounts
    });

   async function createAccount({body}) {
      console.log(body)
       var result=await db.insert(body);
       return result;
        
    }

    async function getAccounts() {
      return db.findAll();
    }
}

module.exports=AccountAppService;