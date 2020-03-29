const router=require('express').Router();
const bankSchema=require('./account');

router.get('/accounts',async function(req,res){
   var accounts= await bankSchema.find({});
   res.json(accounts);
});

router.post('/accounts',function(req,res){
   var bankDb=new bankSchema(req.body);
   bankDb.save()
   .then(x=>{
    res.json(x);
   });
});
module.exports=router;