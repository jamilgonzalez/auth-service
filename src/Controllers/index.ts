import makeDeleteUser from "./deleteUser";
import makeHealth from "./health";
import makeLogin from "./login";
import makeLogout from "./logout";
import makeRegister from "./registerUser";
import makeVerifyEmail from "./verifyEmail";
import { useCase } from "../UseCases";
import { validate } from "../Frameworks";

export const controller = Object.freeze({
  register: makeRegister(useCase.registerUser, validate),
  login: makeLogin(useCase.loginUser, validate),
  deleteUser: makeDeleteUser(useCase.deleteUser, validate),
  logout: makeLogout(useCase.logoutUser, validate),
  verify: makeVerifyEmail(useCase.verifyEmail),
  health: makeHealth(),
});
