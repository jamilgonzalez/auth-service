import { crypt, jsonWebToken, mailer } from "../Frameworks";
import { divieDB, expiredJWT } from "../DataBases";

import makeDeleteUser from "./deleteUser";
import makeLoginUser from "./loginUser";
import makeLogoutUser from "./logoutUser";
import makeRegisterUser from "./registerUser";
import makeVerifyEmail from "./verifyUser";

export const useCase = Object.freeze({
  registerUser: makeRegisterUser(divieDB, jsonWebToken, mailer),
  loginUser: makeLoginUser(divieDB, jsonWebToken, crypt),
  deleteUser: makeDeleteUser(divieDB),
  logoutUser: makeLogoutUser(expiredJWT, jsonWebToken),
  verifyEmail: makeVerifyEmail(divieDB, jsonWebToken),
});
