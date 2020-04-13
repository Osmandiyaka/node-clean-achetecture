function eventPersistenceService(params) {
    return {
        registerEvent,
        eventTriggered,
        callBackExecuted
    }

    function registerEvent(event) {
        //save registered event in storage
    }

    function registerCallback(...args) {

    }

    function eventTriggered(eventName) {
        //save trigered event and callbacks
    }


    function callBackExecuted(params) {
        // find callback and update executed 
    }
}