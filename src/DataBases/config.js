const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
  region: process.env.REGION,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  accessKeyId: process.env.ACCESS_KEY_ID,
});

module.exports = docClient = new AWS.DynamoDB.DocumentClient();
