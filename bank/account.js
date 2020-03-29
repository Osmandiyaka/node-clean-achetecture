const mongoose=require('mongoose');
var Schema= mongoose.Schema;

var Account=new Schema({
  name:{
      type:String,
      required:true
  },
  holder:{
      type:String,
      required:true
  },
  accountNumber:{
      type:String,
      required:true
  },
  createdAt:{
      type:String,
      required:true,
      default:Date.now()
  }
});

module.exports= mongoose.model('banks',Account);
