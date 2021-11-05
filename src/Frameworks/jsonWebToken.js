const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const sign = (userData) => {
  const { email, isAdmin } = userData;
  return jwt.sign({ email: email, admin: isAdmin }, JWT_SECRET, {
    expiresIn: "2h",
  });
};

const verify = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

module.exports = jsonWebToken = Object.freeze({
  sign: (userData) => sign(userData),
  verify: (token) => verify(token),
});
