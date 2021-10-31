export default function makeDeleteUser(db: any) {
  return async function deleteUser(userData: any) {
    return await db.delete(userData.email);
  };
}
