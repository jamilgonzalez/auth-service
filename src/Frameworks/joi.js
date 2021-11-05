const Format = require("../ServiceResponse");
const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).max(20).required(),
  isAdmin: Joi.boolean(),
});

const registration = (data) => {
  const response = schema.validate(data);

  if (response.error) {
    const { message } = response.error.details[0];
    throw Format.badRequest(message);
  } else {
    return response.value;
  }
};

// ---

const login = (body) => {
  const { email, password } = body;

  if (email && password) {
    return body;
  } else if (!email) {
    throw Format.badRequest("email is a required field.");
  } else {
    throw Format.badRequest("password is a required field.");
  }
};

const remove = (body) => {
  const { email } = body;
  if (email) {
    return body;
  } else {
    throw Format.badRequest("email is a required field.");
  }
};

const logout = (headers) => {
  const token = headers?.authorization;
  if (token) {
    return token;
  } else {
    throw Format.badRequest("missing authorization header.");
  }
};

module.exports = validate = Object.freeze({
  registration: (body) => registration(body),
  login: (body) => login(body),
  logout: (headers) => logout(headers),
  delete: (body) => remove(body),
});
