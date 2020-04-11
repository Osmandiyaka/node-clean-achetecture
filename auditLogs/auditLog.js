function makeAuditLogger(db) {
    return async function log(message) {
        db.insert(message);
    }
}