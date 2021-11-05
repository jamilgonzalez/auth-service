const Format = require("../../ServiceResponse");
const docClient = require("../config");
require("dotenv").config();

const JWT_TABLE = process.env.JWT_TABLE;

const addExpiredToken = async (token, exp) => {
  const params = {
    TableName: JWT_TABLE,
    Item: {
      token: token,
      ttl: exp,
    },
  };
  try {
    return await docClient.put(params).promise();
  } catch (error) {
    console.log(`error adding token in expired_jwt: ${error}`);
    throw Format.unexpectedError("unexpected error in logout.");
  }
};

module.exports = addExpiredToken;
