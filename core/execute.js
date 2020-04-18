
async function execute(func) {
    try {
        const resulte=await func();
        return Promise.resolve(resulte);
    } catch (err) {
        return Promise.resolve(err);
    }
}

module.exports=execute;