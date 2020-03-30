
var Account={
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
};

module.exports=Account;
