const Format = require("../ServiceResponse");
const createUser = require("../Entities/index");

module.exports = function makeRegisterUser(db, jwt, mailer) {
  return async function registerUser(userData) {
    const newUser = await createUser(userData);

    const queryResult = await db.get(newUser.getEmail());

    if (queryResult !== undefined)
      throw Format.conflict("user already exists.");

    await db.put({
      email: newUser.getEmail(),
      password: newUser.getPassword(),
      isAdmin: newUser.getIsAdmin(),
      emailVerified: newUser.getEmailVerified(),
      ttl: newUser.getTTL(),
    });

    const token = jwt.sign({
      email: newUser.getEmail(),
      isAdmin: newUser.getIsAdmin(),
    });

    mailer.send(userData.email, token);
  };
};
