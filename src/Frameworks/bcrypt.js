const bcrypt = require("bcrypt");

const compare = (password, dbPassword) => {
  return bcrypt.compare(password, dbPassword);
};

const hash = (password) => {
  return bcrypt.hashSync(password, 10);
};

module.exports = crypt = Object.freeze({
  compare: (password, dbPassword) => compare(password, dbPassword),
  hash: (password) => hash(password),
});
