import SetLocalStorage from "@/components/SetLocalStorage";
import { redirect } from "next/navigation";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import GetLocalStorage from "@/components/GetLocalStorage";
import { invalidParmanetToken } from "@/service/server";

export default async function LogOutPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const next = searchParams.next;
  const { getUser, isAuthenticated } = getKindeServerSession();
  if (next) {
    return <SetLocalStorage path={next.toString()} url="/logout" />;
  }

  const user = await getUser();
  if (user != null && (await isAuthenticated())) {
    const result = await invalidParmanetToken(user.id);
    if (result.action) redirect("/api/auth/logout");
    return <h1>Error</h1>;
  }

  return <GetLocalStorage token="success" />;
}
