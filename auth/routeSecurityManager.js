const passport=require('passport');
const passportJwt = require("passport-jwt");

const {Strategy,ExtractJwt}=passportJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";

function securityManager(findUser) {
    passport.use(new Strategy(opts,async function(jwt_payload, done) {
       try {
           const user=await findUser({id: jwt_payload.sub});
           return user ?done(null,user):done(null,false);
       } catch (err) {
          return done(err,false);
       }
    }));

  return function secure(path, app) {
    app.use(path,passport.authenticate('jwt'),(req,res,next)=>{
        next();
    })
  };
}

module.exports=securityManager;