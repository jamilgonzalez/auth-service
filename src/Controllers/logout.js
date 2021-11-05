module.exports = function makeLogout(logoutUser, validate, Format) {
  return async function logout(request) {
    try {
      const token = validate.logout(request.headers);
      await logoutUser(token);
      return Format.success();
    } catch (error) {
      return error;
    }
  };
};
