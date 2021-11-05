module.exports = function makeRegister(registerUser, validate, Format) {
  return async function register(req) {
    try {
      const body = await validate.registration(req.body);
      await registerUser(body);
      return Format.created("account successfully created.");
    } catch (error) {
      return error;
    }
  };
};
