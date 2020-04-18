module.exports = function makeAccountCreator({accountRepository,modelBuilder,createCustomer,execute}) {
  const db = new accountRepository();
  
  return function openAccount({ body, appSession }) {
    const {account,customer}=body;
    const buildModel = modelBuilder(appSession);
    
    return execute(async ()=>{
      const customerModel=buildModel(customer,validateCustomerModel);
      const createdCustomer=await createCustomer(customerModel);
      const accountModel = buildModel(account,validateCreateAccountModel);
      accountModel.customerId=createdCustomer.id;
      const savedCustomer=await db.insert(accountModel);
      return savedCustomer;
    });
   
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
