function makeAuditLogger(auditLogDb) {
    const db = new auditLogDb();
    const that = this;

    return (func, params)=>  new Promise(handleLogging(func, params)).finally(performLoging(func,params));

     function performLoging(func, params) {
        return async () => {
            try {
                const loggerInput = buildAuditLog(func, params);
                await db.insert(loggerInput);
            } catch (err) {
              console.log(err)
            }
        };
    }

    function buildAuditLog(func, params) {
        const funcName = getFuncName(func);
        const loggerInput = {
            methodName: funcName,
            clientIpAddress: params.ip,
            browserInfo: '',
            executionDuration: that.elapse,
            exception: that.error,
            parameters: params,
            returnValues: that.result,
            requestUrl: params.path,
        };
        return loggerInput;
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
                console.log(err)
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