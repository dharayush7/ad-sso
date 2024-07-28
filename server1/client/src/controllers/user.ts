import { getUser, getVerifyUser } from "@/services/server";

export async function fetchAndValidedUser(cookie: string) {
  const result = await getUser(cookie);
  return {
    valided: result.valided,
    firstName: result.firstName,
    lastName: result.lastName,
  };
}

export async function getParamentToken(query: string) {
  const result = await getVerifyUser(query);
  return result;
}
