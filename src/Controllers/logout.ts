import { ServiceSuccess } from "../ServiceResponse";

export default function makeLogout(logoutUser: any, validate: any) {
  return async function logout(request: any) {
    try {
      const token = validate.logout(request.headers);
      await logoutUser(token);
      return ServiceSuccess.OK();
    } catch (error: any) {
      return error.format();
    }
  };
}
