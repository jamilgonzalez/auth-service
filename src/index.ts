import { APIGatewayProxyEvent, Context } from "aws-lambda";

import app from "./app";
import awsServerlessExpress from "aws-serverless-express";

const server = awsServerlessExpress.createServer(app);

export const handler = (event: APIGatewayProxyEvent, context: Context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context);
};
