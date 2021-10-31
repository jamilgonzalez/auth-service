import { UnexpectedError } from "../ServiceResponse";
import { docClient } from "./config";
require("dotenv").config();

const JWT_TABLE = process.env.JWT_TABLE;

const addExpiredToken = async (token: string, exp: number) => {
  const params = {
    TableName: JWT_TABLE as string,
    Item: {
      token: token,
      ttl: exp,
    },
  };
  try {
    return await docClient.put(params).promise();
  } catch (error) {
    console.log(`error adding token in expired_jwt: ${error}`);
    throw new UnexpectedError("unexpected error in logout.");
  }
};

export const expiredJWT = {
  put: (token: string, exp: number) => addExpiredToken(token, exp),
};
