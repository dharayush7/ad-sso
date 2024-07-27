import { UserInt } from "../types";

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
