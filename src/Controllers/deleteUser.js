module.exports = function makeDeleteUser(removeUser, validate, Format) {
  return async function deleteUser(request) {
    try {
      const body = validate.delete(request.body);
      await removeUser(body);
      return Format.success();
    } catch (error) {
      console.log(error);
      return error;
    }
  };
};
