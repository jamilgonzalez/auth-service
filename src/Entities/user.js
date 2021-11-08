const today = Date.now() / 1000;
const oneDay = 24 * 60 * 60;
const tomorrow = Math.floor(today + oneDay);

function makeCreateUser(encrypt) {
  return async function createUser(userData) {
    const hashedPassword = await encrypt.hash(userData.password);

    return Object.freeze({
      getEmail: () => userData.email,
      getPassword: () => hashedPassword,
      getIsAdmin: () => userData.isAdmin ?? false,
      getEmailVerified: () => false,
      getTTL: () => tomorrow,
    });
  };
}

module.exports = makeCreateUser;
