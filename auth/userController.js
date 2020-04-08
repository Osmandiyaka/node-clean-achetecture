const {signIn,signup} =require('./usecase');

const userDb=require('./userDb')();
const modelBuilder = require("../modelBuilder");
const userValidator=require('./userValidator');
const authService=require('./authAppService')();


function UserController({ app, httpRequestAdaptor }) {
    app.post('/auth/signup',httpRequestAdaptor(signup({modelBuilder,userDb,userValidator,authService})))
    app.post('/auth/signin',httpRequestAdaptor(signIn({userDb,authService})))
}

module.exports=UserController;