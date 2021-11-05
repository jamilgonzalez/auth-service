module.exports = function makeVerifyEmail(verify) {
  return async function verifyEmail(request) {
    const { token } = request.params;

    try {
      await verify(token);
      return {
        status: 307,
        url: "http://www.google.com", // TODO: change url to client app /home
      };
    } catch (error) {
      return {
        status: error.status ?? 500,
        body: {
          error: {
            message: error.message,
          },
        },
      };
    }
  };
};
