import { BadRequest } from "../ServiceResponse";

export default function makeLogoutUser(db: any, jwt: any) {
  return async function logoutUser(token: string) {
    try {
      const { exp } = jwt.verify(token);
      await db.put(token, exp);
    } catch (error: any) {
      throw new BadRequest(error.message);
    }
  };
}
