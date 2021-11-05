module.exports = function makeExpressCallback(controller) {
  return async (req, res) => {
    const response = await controller(req);

    response?.url
      ? res.status(response.status).redirect(response.url)
      : res.status(response.status).json({
          body: response?.body,
          message: response?.message,
          error: response.error,
        });
  };
};
