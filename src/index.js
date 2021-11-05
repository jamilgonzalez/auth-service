const app = require("./app");
const awsServerlessExpress = require("aws-serverless-express");

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  return awsServerlessExpress.proxy(server, event, context);
};
