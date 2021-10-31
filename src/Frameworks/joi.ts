import { BadRequest } from "../ServiceResponse";
import Joi from "joi";

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().alphanum().min(8).max(20).required(),
  isAdmin: Joi.boolean(),
});

const registration = (data: any) => {
  const response = schema.validate(data);

  if (response.error) {
    const { message, type } = response.error.details[0];
    throw new BadRequest(message, type);
  } else {
    return response.value;
  }
};

// ---

const login = (body: any) => {
  const { email, password } = body;

  if (email && password) {
    return body;
  } else if (!email) {
    throw new BadRequest("email is a required field.");
  } else {
    throw new BadRequest("password is a required field.");
  }
};

const remove = (body: any) => {
  const { email } = body;
  if (email) {
    return body;
  } else {
    throw new BadRequest("email is a required field.");
  }
};

const logout = (headers: any) => {
  const token = headers?.authorization;
  if (token) {
    return token;
  } else {
    throw new BadRequest("missing authorization header.");
  }
};

export const validate = Object.freeze({
  registration: (body: any) => registration(body),
  login: (body: any) => login(body),
  logout: (headers: any) => logout(headers),
  delete: (body: any) => remove(body),
});
