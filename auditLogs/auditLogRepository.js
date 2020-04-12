const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BaseRepository=require('../core/baseRepository');

const AppAuditLog={
    methodName:{
        type:String
    },
    clientIpAddress:{
        type:String
    },
    browserInfo:{
        type:String
    },
    executionDuration:{
        type:Number
    },
    exception:{
        type:String
    },
    parameters:{
        type:String
    },
    returnValues:{
        type:String
    },
    requestUrl:{
        type:String
    },

}

const AppAuditLogModel=mongoose.model('auditLogs',new Schema(AppAuditLog));

function AuditLogRepository() {
    BaseRepository.call(this,AppAuditLogModel);
}

AuditLogRepository.prototype=Object.create(BaseRepository.prototype);
module.exports=AuditLogRepository;