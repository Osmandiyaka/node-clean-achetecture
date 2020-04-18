module.exports=function accountBuilder({accountRepository}) {
  
  return Object.freeze({
     create:create,
     get:get
  });

  function create(accountEntity) {
    if(validateAccount(accountEntity)==true){
     return  accountRepository.create(accountEntity)
    }
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
      getId:()=>account._id,
      equals:equals

    });

    function equals(obj) {
      return (obj) => getId() === obj.getId() && getAccountNumber();
    }

    function debit(amount) {
      account.balance-=amount;
      await accountRepository.update(account);
    }

    function credit(amount) {
      account.balance+=amount;
      await accountRepository.update(account);
    }

    function close() {
      
    }

    function block() {
      
    }
  }

  function validateAccount(accountEntity){
    return true;
  }
  
}