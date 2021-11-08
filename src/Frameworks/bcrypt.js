const bcrypt = require("bcrypt");

const compare = (password, dbPassword) => {
  return bcrypt.compare(password, dbPassword);
};

const hash = async (password) => {
  return await bcrypt.hash(password, 10);
};

module.exports = crypt = Object.freeze({
  compare: (password, dbPassword) => compare(password, dbPassword),
  hash: async (password) => await hash(password),
});
