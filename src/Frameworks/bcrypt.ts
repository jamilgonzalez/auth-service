import bcrypt from "bcrypt";

const compare = (password: string, dbPassword: any) => {
  return bcrypt.compare(password, dbPassword);
};

const hash = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const crypt = Object.freeze({
  compare: (password: string, dbPassword: string) =>
    compare(password, dbPassword),
  hash: (password: string) => hash(password),
});
