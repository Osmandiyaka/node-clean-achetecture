module.exports = function makeAccountCreator({accountRepository,modelBuilder,}) {
  const db = new accountRepository();
  
  return function openAccount({ body, appSession }) {
    const {account,customer}=body;
    const buildModel = modelBuilder(appSession);

    const customerModel=buildModel(customer,validateCustomerModel);
    const accountModel = buildModel(account,validateCreateAccountModel);

    return db.insert(accountModel);
  };

  function validateCreateAccountModel(createAccountModel) {
    return {
      hasError:undefined,
      errorMessage:''
    }
  }

  function validateCustomerModel(customerModel) {
    return {
      hasError:undefined,
      errorMessage:''
    }
  }
};
