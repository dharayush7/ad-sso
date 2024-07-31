import { CookieDeleter } from "@/components/CookieDeleter";

export default async function LogoutPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const token = searchParams.token;

  if (token && token === "success") {
    return <CookieDeleter name="auth" />;
  }

  return <h1>Error...</h1>;
}
