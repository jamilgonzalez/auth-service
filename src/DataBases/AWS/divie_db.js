const Format = require("../../ServiceResponse");
const docClient = require("../config");

require("dotenv").config();

const USER_TABLE = process.env.USER_TABLE;

const searchUser = async (email) => {
  const params = {
    TableName: USER_TABLE,
    KeyConditionExpression: `#email = :email`,
    ExpressionAttributeNames: {
      "#email": "email",
    },
    ExpressionAttributeValues: { ":email": email },
  };

  try {
    const result = await docClient.query(params).promise();
    return result?.Items[0];
  } catch (error) {
    console.log(`error searching user in divieDB: ${error}`);
    throw Format.unexpectedError("unexpected error searching user.");
  }
};

const addUser = async (user) => {
  const { email, password, isAdmin, emailVerified, ttl } = user;
  const params = {
    TableName: USER_TABLE,
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
    throw Format.unexpectedError("unexpected error adding user.");
  }
};

const update = async (email, userUpdate) => {
  const { field, value } = userUpdate;

  const baseParams = {
    TableName: USER_TABLE,
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
    return await docClient.update(params).promise();
  } catch (error) {
    console.log(`error updating user in divieDB: ${error}`);
    throw Format.unexpectedError("error updating user.");
  }
};

const deleteUser = async (email) => {
  const params = {
    TableName: USER_TABLE,
    Key: {
      email: email,
    },
  };

  try {
    return await docClient.delete(params).promise();
  } catch (error) {
    console.log(`error deleting  = require(diviedb: ${error}`);
    throw Format.unexpectedError("unexpected error deleting user.");
  }
};

module.exports = { addUser, deleteUser, update, searchUser };
