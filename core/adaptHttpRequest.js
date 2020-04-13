const makeAuditLogger = require('../auditLogs/auditLog');
const auditLogDb = require('../auditLogs/auditLogRepository');
const withLogger = makeAuditLogger(auditLogDb);

function httpRequestAdaptor(controller) {
  return (req, res, next) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      appSession: {
        userId: req.user.id
      },
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent")
      }
    };

    withLogger(controller, httpRequest)
      .then(ok(res))
      .catch(_500(res));
  };

  function _500(res) {
    return err =>  res.status(500).send({error: err.message});
  }

  function ok(res) {
    return result => res.json(result);
  }
}

module.exports = httpRequestAdaptor;