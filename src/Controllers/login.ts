import { ServiceSuccess } from "../ServiceResponse";

export default function makeLogin(loginUser: any, validate: any) {
  return async function login(request: any) {
    try {
      const requestData = validate.login(request.body);
      const token = await loginUser(requestData);
      return ServiceSuccess.OK({ token });
    } catch (error: any) {
      return error.format();
    }
  };
}
