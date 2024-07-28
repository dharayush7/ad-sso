import { cookies } from "next/headers";
import { getParamentToken } from "@/controllers/user";
import { redirect } from "next/navigation";
import { CookieSetter } from "@/components/CookieSetter";
// import { setCookie } from "../api/route";

export default async function Identify({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const tempToken = searchParams.token;
  if (!tempToken) return <h1>Error</h1>;

  const result = await getParamentToken(tempToken.toString());
  if (result.error) return <h1>Error1</h1>;

  return <CookieSetter name="auth" value={result.parmanentToken} />;
}
