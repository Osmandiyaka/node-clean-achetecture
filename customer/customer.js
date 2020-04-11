function customerBuilder({customerRepository}) {

    return Object.freeze({
        get:get,
    });
    
    function get(id) {
        const customer=await customerRepository.get(id);
        return Object.freeze({
            checkBalance,
            checkHistory,
            transfereFunds,
            addPayee,
            deletePayee,
            requestCheckbook,
            payBill, 
            getId:()=>customer._id
        });

        function checkBalance(params) {
            
        }

        function checkHistory(params) {
            
        }

        function transfereFunds(params) {
            
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