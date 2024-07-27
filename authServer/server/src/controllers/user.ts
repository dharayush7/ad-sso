import { Request, Response } from "express";
import {
  authUser,
  verifyUserByTempToken,
  fetchAndVarifyUser,
} from "../service/firebase";
import { tempSalt, parmanentSalt } from "../service/salts";
import { getVerify } from "../service/jwt";

export async function handleAuth(req: Request, res: Response) {
  const kindeId = req.body.kindeId;
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  if (!kindeId || !email || !firstName || !lastName) {
    return;
  }

  const result = await authUser(kindeId, email, firstName, lastName);

  res.setHeader("Content-Type", "application/json");

  return res.send(
    JSON.stringify({
      kindeId,
      email,
      firstName,
      lastName,
      tempToken: result,
    })
  );
}

export async function handleFetchWithTempToken(req: Request, res: Response) {
  res.setHeader("Content-Type", "application/json");
  const tempToken = req.body.tempToken;
  const payload = getVerify(tempToken, tempSalt);
  if (!payload) return res.send(JSON.stringify({ error: true }));
  const result = await verifyUserByTempToken(payload.id, tempToken);
  if (!result.token) return res.send(JSON.stringify({ error: true }));
  return res.send(
    JSON.stringify({ error: false, parmanentToken: result.token })
  );
}

export async function handleFetchWithParmanentToken(
  req: Request,
  res: Response
) {
  res.setHeader("Content-Type", "application/json");
  const parmanentToken = req.body.parmanentToken;
  const payload = getVerify(parmanentToken, parmanentSalt);
  if (!payload) return res.send(JSON.stringify({ error: true }));
  const result = await fetchAndVarifyUser(payload.id, parmanentToken);
  if (!result.user) return res.send(JSON.stringify({ error: true }));
  return res.send(JSON.stringify({ error: false, user: result.user }));
}
