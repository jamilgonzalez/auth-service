export default function makeVerifyEmail(verify: any) {
  return async function verifyEmail(request: any) {
    const { token } = request.params;

    try {
      await verify(token);
      return {
        status: 307,
        url: "http://www.google.com", // TODO: change url to client app /home
      };
    } catch (error: any) {
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
}
