import jwt from "jsonwebtoken";
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const sign = (userData: any): string => {
  const { email, isAdmin } = userData;
  return jwt.sign({ email: email, admin: isAdmin }, JWT_SECRET as string, {
    expiresIn: "2h",
  });
};

const verify = (token: string) => {
  return jwt.verify(token, JWT_SECRET as string);
};

export const jsonWebToken = Object.freeze({
  sign: (userData: any) => sign(userData),
  verify: (token: string) => verify(token),
});
