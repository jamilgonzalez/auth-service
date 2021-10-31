export function makeExpressCallback(controller: any) {
  return async (req: any, res: any) => {
    const response = await controller(req);

    response?.url
      ? res.status(response.status).redirect(response.url)
      : res.status(response.status).json(response.body);
  };
}
