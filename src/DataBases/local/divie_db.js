module.exports = searchUser = (email) => {
  const user = localStorage.getItem(email);
  console.log("LOCAL SEARCH", user);
};

module.exports = addUser = (user) => {
  localStorage.setItem(user.email, JSON.stringify(user));
  console.log(localStorage.getItem(user.email));
};

module.exports = update = (email, userUpdate) => {
  console.log("TODO");
};

module.exports = deleteUser = (email) => {
  localStorage.removeItem(email);
};
