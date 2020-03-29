const mongoose=require('mongoose')

function makeAppDb(dbProtocol) {

    return function makeDb(table) {
        var db= dbProtocol.model(table);
        
        return Object.freeze({
           insert,
        //    find,
           findAll,
        //    findById,
        //    remove,
        //    update,
        });

        function insert(entity) {
            return db.insertMany([entity]);
        }

        function findAll() {
            return db.model(table).find({});
        }
    }
}

module.exports=makeAppDb;