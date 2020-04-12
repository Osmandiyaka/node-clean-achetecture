function makeAuditLogger(auditLogDb) {
    const db = auditLogDb();
    const that = this;

    return function log(func, params) {
        return new Promise(handleLogging(func, params)).finally(performLoging());
    }


     function performLoging(func, params) {
        return async () => {
            try {
                const funcName = getFuncName(func)
                const loggerInput = {
                    methodName:funcName,
                    clientIpAddress:params.ip,
                    browserInfo:'',
                    executionDuration:that.elapse,
                    exception:that.error,
                    parameters:params,
                    returnValues:that.result,
                    requestUrl:params.path,
                }
                await db.insert(loggerInput);
            } catch (err) {

            }
        };
    }

     function handleLogging(func, params) {
        return async (resolve, reject) => {
            try {
                const funcStart = new Date();
                const result = await func(params);
                const funcEnd = new Date();
                that.result = result;
                that.elapse = funcEnd - funcStart;
                return resolve(result);
            } catch (err) {
                that.error=err;
                return reject(err);
            }
        };
    }

    function getFuncName(func) {
        return func.name;
    }
}

module.exports=makeAuditLogger;