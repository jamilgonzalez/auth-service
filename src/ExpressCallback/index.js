module.exports = function makeExpressCallback(controller) {
  return async (req, res) => {
    const response = await controller(req);

    response?.url
      ? res.status(response.status).redirect(response.url)
      : res.status(response.status).json({
          token: response?.token,
          message: response?.message,
          error: response.error,
        });
  };
};
