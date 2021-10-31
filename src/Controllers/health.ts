import { ServiceSuccess } from "../ServiceResponse";

export default function makeHealth() {
  return async function health() {
    return ServiceSuccess.OK();
  };
}
