module.exports=function accountBuilder(accountRepository) {
  
  return Object.freeze({
     create:create,
     get:get
  });

  function create(accountEntity) {
    
  }

  function get(id) {
    const account=accountRepository.get(id);
    return Object.freeze({
      checkBalance:()=>account.balance,
      getAccountNumber:()=>account.accountNumber,
      getAccountName:()=>account.accountName,
      debit:debit,
      credit:credit,
      close:close,
      block:block,
      equal:accountObj=>this.getAccountNumber()===accountObj.getAccountNumber(),
      getId:()=>account._id3

    });

   async function debit(amount) {
      account.balance-=amount;
      await accountRepository.update(account);
    }

   async function credit(amount) {
      account.balance+=amount;
      await accountRepository.update(account);
    }

    function close() {
      
    }

    function block() {
      
    }
        
  }

  async function generateAccountNumber() {
    const totalAccount=await accountRepository.count();

    const today=new Date();
    const createdAt=`${today.getFullYear}${today.getMonth} ${today.getDay}`;
    
    return `${createdAt}${totalAccount+1}`;
  }
  
}