import jwt from "jsonwebtoken";

export function getToken(payload: object, salt: string) {
  const token = jwt.sign(payload, salt);

  return token;
}

export function getVerify(token: string, salt: string) {
  const payload = jwt.verify(token, salt);
  const res = JSON.parse(payload.toString());
  return res;
}
