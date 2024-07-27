import { AuthUser, User } from "../types";

export async function userAuth(user: User): Promise<AuthUser> {
  const header: Headers = new Headers();
  header.set("Content-Type", "application/json");
  const body = JSON.stringify({ ...user });
  const request: Request = new Request("http://localhost:8000/user/auth", {
    method: "POST",
    headers: header,
    body: body,
  });
  const res = await fetch(request);
  const res_1 = await res.json();
  return res_1 as AuthUser;
}