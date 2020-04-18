const _AccountDb = require('../accountRepository');
const _modelBuilder = require('../../core/modelBuilder');
const _execute = require('../../core/execute');
const _createCustomer = require('../../customer/usecase/createCustomer');


module.exports = function makeAccountCreator({
  AccountDb,
  modelBuilder,
  createCustomer,
  execute,
  appEvent
} = {
  AccountDb: _AccountDb,
  modelBuilder: _modelBuilder,
  execute: _execute,
  createCustomer: _createCustomer
}) {
  const db = new AccountDb();
  buildModel = modelBuilder;
  createCustomer = createCustomer();

  return function openAccount({
    body,
    appSession
  } = {}) {
    const {
      account,
      customer
    } = body;
    return execute(async () => {
      const createdCustomer = await createCustomer(customer, appSession);

      const accountModel = buildModel({
        model: account,
        modelValidator: validateCreateAccountModel,
        appSession
      });
      accountModel.customerId = createdCustomer._id;
      const savedAccount = await db.insert(accountModel);

      appEvent.trigger('account-opened', {
        customerId: createdCustomer._id,
        accountId: savedAccount._id
      });

      return savedAccount;
    });

  };

  function validateCreateAccountModel(createAccountModel) {
    return {
      hasError: undefined,
      errorMessage: ''
    }
  }


};