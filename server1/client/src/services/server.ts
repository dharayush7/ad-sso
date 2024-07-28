import { UserInt, VerifyUserInt } from "@/types";

export async function getUser(parmanentToken: string): Promise<UserInt> {
  const header: Headers = new Headers();
  header.set("Content-Type", "application/json");
  const body = JSON.stringify({ parmanentToken: parmanentToken });

  const request: Request = new Request("http://localhost:8001/user/fetch", {
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

export async function getVerifyUser(tempToken: string): Promise<VerifyUserInt> {
  const header: Headers = new Headers();
  header.set("Content-Type", "application/json");
  const body = JSON.stringify({ tempToken: tempToken });
  const request: Request = new Request("http://localhost:8001/user/verify", {
    method: "POST",
    headers: header,
    body: body,
  });

  return fetch(request)
    .then((res) => res.json())
    .then((res) => {
      return res as VerifyUserInt;
    });
}
