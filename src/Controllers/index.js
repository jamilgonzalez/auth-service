const Format = require("../ServiceResponse");
const makeDeleteUser = require("./deleteUser");
const makeHealth = require("./health");
const makeLogin = require("./login");
const makeLogout = require("./logout");
const makeRegister = require("./registerUser");
const makeVerifyEmail = require("./verifyEmail");
const useCase = require("../UseCases");
const { validate } = require("../Frameworks");

module.exports = controller = Object.freeze({
  register: makeRegister(useCase.registerUser, validate, Format),
  login: makeLogin(useCase.loginUser, validate, Format),
  deleteUser: makeDeleteUser(useCase.deleteUser, validate, Format),
  logout: makeLogout(useCase.logoutUser, validate, Format),
  verify: makeVerifyEmail(useCase.verifyEmail),
  health: makeHealth(),
});
