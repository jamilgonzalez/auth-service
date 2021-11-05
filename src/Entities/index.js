const { crypt } = require("../Frameworks");
const makeCreateUser = require("./user");

const createUser = makeCreateUser(crypt);
module.exports = createUser;
