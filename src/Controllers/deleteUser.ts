import { ServiceSuccess } from "../ServiceResponse";

export default function makeDeleteUser(removeUser: any, validate: any) {
  return async function deleteUser(request: any) {
    try {
      const body = validate.delete(request.body);
      await removeUser(body);
      return ServiceSuccess.OK();
    } catch (error: any) {
      return error.format();
    }
  };
}
