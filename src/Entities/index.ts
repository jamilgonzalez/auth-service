import { crypt } from "../Frameworks";
import makeCreateUser from "./user";

export const createUser = makeCreateUser(crypt);
