module.exports = function makeVerifyEmail(db, jwt) {
  return async function verifyEmail(token) {
    const { email } = jwt.verify(token);

    await db.update(email, { field: "emailVerified", value: true });
    await db.update(email, { field: "ttl" });
  };
};
