
function MockAccountRepository() {
    const accounts=[];

    return Object.freeze({
        insert:account=>{
            accounts.push(account);
            return Promise.resolve(accounts.indexOf(account))
        }
    })
}

module.exports=MockAccountRepository;