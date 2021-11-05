const users = new Map();

const searchUser = (email) => {
  return users.get(email);
};

const addUser = (user) => {
  users.set(user.email, user);
};

const update = (email, userUpdate) => {
  const { field, value } = userUpdate;
  console.log("here", field, value);
  const oldInfo = users.get(email);

  let update;

  switch (field) {
    case "email":
      update = { ...oldInfo, email: value };
      break;
    case "emailVerified":
      update = { ...oldInfo, emailVerified: value };
      break;
    case "password":
      update = { ...oldInfo, password: value };
      break;
    case "ttl":
      const { email, password, isAdmin } = oldInfo;
      update = { email, password, emailVerified: true, isAdmin };
      break;
  }
  users.delete(email);
  users.set(email, update);
};

const deleteUser = (email) => {
  users.delete(email);
};

module.exports = { addUser, deleteUser, update, searchUser };
