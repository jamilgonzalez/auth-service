import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { UnexpectedError } from "../ServiceResponse";
import { docClient } from "./config";

require("dotenv").config();

const USER_TABLE = process.env.USER_TABLE;

const searchUser = async (email: string) => {
  const params = {
    TableName: USER_TABLE as string,
    KeyConditionExpression: `#email = :email`,
    ExpressionAttributeNames: {
      "#email": "email",
    },
    ExpressionAttributeValues: { ":email": email },
  };

  try {
    return await docClient.query(params).promise();
  } catch (error) {
    console.log(`error searching user in divieDB: ${error}`);
    throw new UnexpectedError("unexpected error searching user.");
  }
};

const addUser = async (user: any) => {
  const { email, password, isAdmin, emailVerified, ttl } = user;
  const params = {
    TableName: USER_TABLE as string,
    Item: {
      email: email,
      password: password,
      isAdmin: isAdmin,
      emailVerified: emailVerified,
      ttl: ttl,
    },
  };

  try {
    return await docClient.put(params).promise();
  } catch (error) {
    console.log(`error adding user in divieDB: ${error}`);
    throw new UnexpectedError("unexpected error adding user.");
  }
};

const update = async (email: string, userUpdate: any) => {
  const { field, value } = userUpdate;

  const baseParams = {
    TableName: USER_TABLE as string,
    Key: {
      email: email,
    },
  };

  let params;

  switch (field) {
    case "email":
      params = {
        ...baseParams,
        UpdateExpression: "set email = :email",
        ExpressionAttributeValues: {
          ":email": value,
        },
      };
      break;
    case "emailVerified":
      params = {
        ...baseParams,
        UpdateExpression: "set emailVerified = :emailVerified",
        ExpressionAttributeValues: {
          ":emailVerified": value,
        },
      };
      break;
    case "password":
      params = {
        ...baseParams,
        UpdateExpression: "set password = :password",
        ExpressionAttributeValues: {
          ":password": value,
        },
      };
      break;
    case "ttl":
      params = {
        ...baseParams,
        UpdateExpression: "remove #ttl",
        ExpressionAttributeNames: {
          "#ttl": "ttl",
        },
      };
      break;
  }

  try {
    return await docClient
      .update(params as DocumentClient.UpdateItemInput)
      .promise();
  } catch (error) {
    console.log(`error updating user in divieDB: ${error}`);
    throw new UnexpectedError("error updating user.");
  }
};

const deleteUser = async (email: string) => {
  const params = {
    TableName: USER_TABLE as string,
    Key: {
      email: email,
    },
  };

  try {
    return await docClient.delete(params).promise();
  } catch (error) {
    console.log(`error deleting from diviedb: ${error}`);
    throw new UnexpectedError("unexpected error deleting user.");
  }
};

export const divieDB = Object.freeze({
  get: (email: string) => searchUser(email),
  put: (user: any) => addUser(user),
  update: (email: string, userUpdate: any) => update(email, userUpdate),
  delete: (params: any) => deleteUser(params),
});
