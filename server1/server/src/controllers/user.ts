import { Request, Response } from "express";
import { fetchUserToServer } from "../services/authServer";

export async function handleGetUser(req: Request, res: Response) {
  res.setHeader("Content-Type", "application/json");
  const parmanentToken = req.body.parmanentToken;

  if (!parmanentToken) return res.send(JSON.stringify({ error: true }));
  const result = await fetchUserToServer(parmanentToken);
  if (!result.error) {
    const response = {
      valided: result.error,
      firstName: "",
      lastName: "",
      email: "",
    };

    return res.send(JSON.stringify({ ...response }));
  }

  const response = {
    valided: result.error,
    firstName: result.firstName,
    lastName: result.lastName,
    email: result.email,
  };
  return res.send(JSON.stringify({ ...response }));
}
