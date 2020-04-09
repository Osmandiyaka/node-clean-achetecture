module.exports=function accountBuilder({accountRepository}) {
  
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
      block:block

    });

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
  
}