module.exports = function makeDeleteUser(db) {
  return async function deleteUser(userData) {
    return await db.delete(userData.email);
  };
};
