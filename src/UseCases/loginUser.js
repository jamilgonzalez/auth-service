const Format = require("../ServiceResponse");

module.exports = function makeLoginUser(db, jwt, crypt) {
  return async function loginUser(userData) {
    const { email, password } = userData;

    const user = await db.get(email);
    if (user === undefined) throw Format.notFound(`${email} not found.`);

    if (!user.emailVerified) throw Format.badRequest("please verify email.");

    const isCorrectPassword = await crypt.compare(password, user.password);
    if (!isCorrectPassword) throw Format.badRequest("password incorrect.");

    return jwt.sign(user);
  };
};
