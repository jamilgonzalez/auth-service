const { crypt, jsonWebToken, mailer } = require("../Frameworks");
const { expiredJWT, userDB } = require("../DataBases");

const makeDeleteUser = require("./deleteUser");
const makeLoginUser = require("./loginUser");
const makeLogoutUser = require("./logoutUser");
const makeRegisterUser = require("./registerUser");
const makeVerifyEmail = require("./verifyUser");

module.exports = useCase = Object.freeze({
  registerUser: makeRegisterUser(userDB, jsonWebToken, mailer),
  loginUser: makeLoginUser(userDB, jsonWebToken, crypt),
  deleteUser: makeDeleteUser(userDB),
  logoutUser: makeLogoutUser(expiredJWT, jsonWebToken),
  verifyEmail: makeVerifyEmail(userDB, jsonWebToken),
});
