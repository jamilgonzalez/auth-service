import { ServiceSuccess } from "../ServiceResponse";

export default function makeRegister(registerUser: any, validate: any) {
  return async function register(req: any) {
    try {
      const body = await validate.registration(req.body);
      await registerUser(body);
      return ServiceSuccess.Created("account successfully created.");
    } catch (error: any) {
      return error.format();
    }
  };
}
