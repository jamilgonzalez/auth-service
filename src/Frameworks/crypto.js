const crypto = require("crypto");

const salt = crypto.randomBytes(16).toString("hex");

const compare = (password, dbPassword) => {
  const [salt, key] = dbPassword.toString("base64").split(":");
  const derivedKey = crypto.scryptSync(password, salt, 64).toString("hex");
  return derivedKey === key;
};

const hash = (p) => {
  return salt + ":" + crypto.scryptSync(p, salt, 64).toString("hex");
};

module.exports = crypt = Object.freeze({
  compare: (p, dbP) => compare(p, dbP),
  hash: (p) => hash(p),
});
