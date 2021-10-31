import { Conflict } from "../ServiceResponse";
import { createUser } from "../Entities/index";

export default function makeRegisterUser(db: any, jwt: any, mailer: any) {
  return async function registerUser(userData: any) {
    const newUser = await createUser(userData);

    const queryResult = await db.get(newUser.getEmail());

    if (queryResult?.Count > 0) throw new Conflict("user already exists.");

    await db.put({
      email: newUser.getEmail(),
      password: newUser.getPassword(),
      isAdmin: newUser.getIsAdmin(),
      emailVerified: newUser.getEmailVerified(),
      ttl: newUser.getTTL(),
    });

    const token = jwt.sign({
      email: newUser.getEmail(),
      isAdmin: newUser.getIsAdmin(),
    });

    mailer.send(userData.email, token);
  };
}
