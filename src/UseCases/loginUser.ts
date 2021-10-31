import { BadRequest, NotFoundError } from "../ServiceResponse";

export default function makeLoginUser(db: any, jwt: any, crypt: any) {
  return async function loginUser(userData: any) {
    const { email, password } = userData;

    const result = await db.get(email);
    if (result?.Count === 0) throw new NotFoundError(`${email} not found.`);

    const user = result?.Items[0];

    if (!user.emailVerified) throw new BadRequest("please verify email.");

    const isCorrectPassword = await crypt.compare(password, user.password);
    if (!isCorrectPassword) throw new BadRequest("password incorrect.");

    return jwt.sign(user);
  };
}
