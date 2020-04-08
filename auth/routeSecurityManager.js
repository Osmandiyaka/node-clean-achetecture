const passport = require("passport");
const passportJwt = require("passport-jwt");

const { Strategy, ExtractJwt } = passportJwt;

var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
opts.secretOrKey = "secret";
// opts.issuer = "accounts.examplesoft.com";
// opts.audience = "yoursite.net";

function securityManager(findUser) {
  passport.use(
    new Strategy(opts, async function (jwt_payload, done) {
      try {
        const user = await findUser({ _id: jwt_payload.id });
        return user ? done(null, user) : done(null, false);
      } catch (err) {
        return done(err, false);
      }
    })
  );

  return function secure(path, app) {
    app.use(passport.initialize());
    app.use( path, authenticateRequest(), handleAuthErrors());
  };

  function handleAuthErrors() {
    return function (err, req, res, next) {
      return res.send({ status: "err", message: err.message });
    };
  }

  function authenticateRequest() {
    return function (req, res, next) {
      passport.authenticate("jwt", handleAuth(res, next))(req, res, next);
      // next();
    };
  }

  function handleAuth(res, next) {
    return (err,user)=>(err || !user)?res.sendStatus(401):next()
    // return function (err, user) {
    //   return (err || !user)?res.sendStatus(401):next()
      
    // };
  }
}

module.exports = securityManager;
