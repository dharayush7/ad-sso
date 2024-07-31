import { UserInt, VerifyAndAuthUserInt } from "../types";

export async function fetchUserToServer(
  parmanentToken: string
): Promise<UserInt> {
  const header: Headers = new Headers();
  header.set("Content-Type", "application/json");

  const body = JSON.stringify({ parmanentToken: parmanentToken });

  const request: Request = new Request("http://localhost:8000/user/fetch", {
    method: "POST",
    headers: header,
    body: body,
  });

  return fetch(request)
    .then((res) => res.json())
    .then((res) => {
      return res as UserInt;
    });
}

export async function verifyAndAuthUser(
  tempToken: string
): Promise<VerifyAndAuthUserInt> {
  const header: Headers = new Headers();
  header.set("Content-Type", "application/json");

  const body = JSON.stringify({ tempToken: tempToken });

  const request: Request = new Request(
    "http://localhost:8000/user/temp-token",
    {
      method: "POST",
      headers: header,
      body: body,
    }
  );

  return fetch(request)
    .then((res) => res.json())
    .then((res) => {
      return res as VerifyAndAuthUserInt;
    });
}
