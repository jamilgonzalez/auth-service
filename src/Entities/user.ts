const today = Date.now() / 1000;
const oneDay = 24 * 60 * 60;
const tomorrow = Math.floor(today + oneDay);

export default function makeCreateUser(encrypt: any) {
  return async function createUser(userData: any) {
    return Object.freeze({
      getEmail: () => userData.email,
      getPassword: () => encrypt.hash(userData.password),
      getIsAdmin: () => userData.isAdmin,
      getEmailVerified: () => false,
      getTTL: () => tomorrow,
    });
  };
}
