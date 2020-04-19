const execute = require("../../core/execute");
const _CustomerDb = require("../customerRepository");
const _modelBuilder = require("../../core/modelBuilder");

function makeCustomerCreator({CustomerDb, modelBuilder }={}) {
  const db = CustomerDb == undefined ? new _CustomerDb() : new CustomerDb();
  const buildModel = modelBuilder || _modelBuilder;

  return function createCustomer(model, appSession) {
    return execute(async () => {
      const customerModel = buildModel({ model, modelValidator: validateCustomerModel,appSession});
      const result = await db.insert(customerModel);
      return result;
    });
  };

  function validateCustomerModel(customerModel) {
    return {
      hasError: undefined,
      errorMessage: "",
    };
  }
}

module.exports = makeCustomerCreator;
