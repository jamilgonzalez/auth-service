const { addUser, deleteUser, searchUser, update } = require("./local/divie_db");

const addExpiredToken = require("./AWS/expired_jwt");

const userDB = Object.freeze({
  get: (email) => searchUser(email),
  put: (user) => addUser(user),
  update: (email, userUpdate) => update(email, userUpdate),
  delete: (email) => deleteUser(email),
});

const expiredJWT = Object.freeze({
  put: (token, exp) => addExpiredToken(token, exp),
});

module.exports = { userDB, expiredJWT };
