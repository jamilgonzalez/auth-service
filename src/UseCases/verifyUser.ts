export default function makeVerifyEmail(db: any, jwt: any) {
  return async function verifyEmail(token: string) {
    const { email } = jwt.verify(token);

    await db.update(email, { field: "emailVerified", value: true });
    await db.update(email, { field: "ttl" });
  };
}
