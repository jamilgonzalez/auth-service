const Format = require("../ServiceResponse");

module.exports = function makeHealth() {
  return async function health() {
    return Format.success();
  };
};
