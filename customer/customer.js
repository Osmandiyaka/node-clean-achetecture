function customerBuilder({ customerRepository}) {
    return Object.freeze({
        get: get,
    });

    function get(id) {
        const customer = await customerRepository.get(id);
        return Object.freeze({
            checkBalance,
            checkStatement,
            transferFunds,
            addPayee,
            deletePayee,
            requestCheckbook,
            payBill,
            getId: () => customer._id,
            getAccounts:getAccounts,
        });

        function checkBalance(params) {
          
        }

        function getAccounts() {
            
        }

        function checkStatement(params) {

        }

        function transferFunds(fromAccoutn, toAccount) {
          
        }

        function addPayee(params) {

        }

        function deletePayee(params) {

        }

        function requestCheckbook(params) {

        }

        function payBill(params) {

        }
    }
}