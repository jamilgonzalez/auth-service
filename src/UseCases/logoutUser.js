const Format = require("../ServiceResponse");

module.exports = function makeLogoutUser(db, jwt) {
  return async function logoutUser(token) {
    try {
      const { exp } = jwt.verify(token);
      await db.put(token, exp);
    } catch (error) {
      throw Format.badRequest(error.message);
    }
  };
};
