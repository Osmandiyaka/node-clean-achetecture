const bcrypt = require("bcrypt-nodejs");
const jwt=require('jsonwebtoken');

const saltRounds = 10;

function AuthAppService() {
  return Object.freeze({
    generateHash,
    compare,
    generateJWT
  });

  function generateHash(password) {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }

  function compare(plainPassword, hash) {
    var isValid = bcrypt.compareSync(plainPassword, hash);
    return isValid;
  }

  function generateJWT(user, secrete) {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign(
      {
        email: user.emailAddress,
        id: user._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10)
      },
      secrete
    );
  }
}

module.exports = AuthAppService;
