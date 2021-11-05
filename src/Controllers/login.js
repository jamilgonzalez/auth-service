module.exports = function makeLogin(loginUser, validate, Format) {
  return async function login(request) {
    try {
      const requestData = validate.login(request.body);
      const token = await loginUser(requestData);
      return Format.success("login success.", { token });
    } catch (error) {
      return error;
    }
  };
};
