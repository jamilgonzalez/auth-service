const Format = require("../ServiceResponse");

module.exports = function makeVerifyEmail(verify) {
  return async function verifyEmail(request) {
    const { token } = request.params;
    const jwtMalformed =
      token === undefined || token === null || token === "null";

    try {
      if (jwtMalformed) throw Format.badRequest("jwt malformed.");
      await verify(token);
      return {
        status: 307,
        url: "http://www.google.com", // TODO: change url to client app /home
      };
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};
