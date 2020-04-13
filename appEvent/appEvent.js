var events = require('events');
var eventEmitter = new events.EventEmitter();

function appEvent(eventPersistenceService) {
    return Object.freeze({
        on:on(),
        trigger:trigger()
    })

    function trigger() {
        return function name(eventName, data) {
            eventEmitter.emit(eventName,data);
        };
    }

    function on() {
        return function on(eventName, callback) {
            eventEmitter.on(eventName,callback);
        };
    }
}

module.exports=appEvent;