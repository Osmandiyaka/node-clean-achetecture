const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BaseRepository=require('../core/baseRepository');

const AppAuditLog={
    methodName,
    clientIpAddress,
    browserInfo,
    executionDuration:{
        type:Number
    },
    exception,
    parameters,
    returnValues,
    requestUrl,

}

const AppAuditLogModel=mongoose.model('auditLogs',new Schema(AppAuditLog));

function AuditLogRepository() {
    BaseRepository.call(this.AppAuditLogModel);
}

AuditLogRepository.prototype=Object.create(BaseRepository.prototype);
module.exports=AuditLogRepository;