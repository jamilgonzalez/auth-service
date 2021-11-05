const Format = require("../ServiceResponse");

module.exports = function makeLoginUser(db, jwt, crypt) {
  return async function loginUser(userData) {
    const { email, password } = userData;

    const result = await db.get(email);
    if (result?.Count === 0) throw Format.notFound(`${email} not found.`);

    const user = result?.Items[0];

    if (!user.emailVerified) throw Format.badRequest("please verify email.");

    const isCorrectPassword = await crypt.compare(password, user.password);
    if (!isCorrectPassword) throw Format.badRequest("password incorrect.");

    return jwt.sign(user);
  };
};
