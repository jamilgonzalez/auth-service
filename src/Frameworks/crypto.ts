import crypto from "crypto";

const salt = crypto.randomBytes(16).toString("hex");

const compare = (password: string, dbPassword: Buffer) => {
  const [salt, key] = dbPassword.toString("base64").split(":");
  const derivedKey = crypto.scryptSync(password, salt, 64).toString("hex");
  return derivedKey === key;
};

const hash = (p: string) => {
  return salt + ":" + crypto.scryptSync(p, salt, 64).toString("hex");
};

export const crypt = Object.freeze({
  compare: (p: string, dbP: Buffer) => compare(p, dbP),
  hash: (p: string) => hash(p),
});
