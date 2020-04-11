const makeAuditLogger=require('../auditLogs/auditLog');
const auditLogDb=require('../auditLogs/auditLogRepository');

function httpRequestAdaptor(controller) {
  return (req, res,next) => {
    const httpRequest = {
      body: req.body,
      query: req.query,
      params: req.params,
      ip: req.ip,
      method: req.method,
      path: req.path,
      appSession: {
        userId: 1
      },
      headers: {
        "Content-Type": req.get("Content-Type"),
        Referer: req.get("referer"),
        "User-Agent": req.get("User-Agent")
      }
    };

    const auditDb=makeAuditLogger(auditLogDb);
    controller(httpRequest)
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ error: err.message });
      });
  };
}

module.exports = httpRequestAdaptor;
