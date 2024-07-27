import { getUser } from "@/services/server";

export async function fetchAndValidedUser(cookie: string) {
  const result = await getUser(cookie);
  return {
    valided: result.valided,
    firstName: result.firstName,
    lastName: result.lastName,
  };
}
