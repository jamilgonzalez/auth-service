const today = Date.now() / 1000;
const oneDay = 24 * 60 * 60;
const tomorrow = Math.floor(today + oneDay);

function makeCreateUser(encrypt) {
  return async function createUser(userData) {
    return Object.freeze({
      getEmail: () => userData.email,
      getPassword: () => encrypt.hash(userData.password),
      getIsAdmin: () => userData.isAdmin,
      getEmailVerified: () => false,
      getTTL: () => tomorrow,
    });
  };
}

module.exports = makeCreateUser;
