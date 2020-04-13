const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BaseRepository = require('../core/baseRepository');

const Event = {
    eventName: {
        type: String
    },
    callBacks: []
};

const CallBack = {
    serializedFunc: {
        type: String
    }
};

const Trigger = {
    params: {
        type: String
    },
    event: {
        type: String
    },
    isCompleted: {
        type: String
    },
    executionStack: [{
        callBack: {
            type: String
        },
        executed: {
            type: Boolean
        }
    }]
};