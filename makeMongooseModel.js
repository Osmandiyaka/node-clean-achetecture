const mongoose=require('mongoose');
const Schema=mongoose.Schema;

function makeMongooseModel(name,entity) {
   const entitySchema=new Schema(entity);
   return mongoose.model(name,entitySchema);
}

module.exports=makeMongooseModel;