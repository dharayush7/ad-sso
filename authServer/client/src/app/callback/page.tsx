import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import GetLocalStorage from "@/components/GetLocalStorage";
import SetLocalStorage from "@/components/SetLocalStorage";
import { userAuth } from "@/service/server";
import { User } from "@/types";

export default async function CallbackPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { getUser, isAuthenticated } = getKindeServerSession();
  const path = searchParams.next;
  if (path) {
    return <SetLocalStorage path={path.toString()} url="/callback" />;
  }

  const user = await getUser();

  if (!user || !(await isAuthenticated())) {
    return redirect("/api/auth/login?post_login_redirect_url=/callback");
  }

  const destacturedUser: User = {
    email: user.email ? user.email : "",
    firstName: user.given_name ? user.given_name : "",
    lastName: user.family_name ? user.family_name : "",
    kindeId: user.id ? user.id : "",
  };

  const result = await userAuth(destacturedUser);

  return <GetLocalStorage token={result.tempToken} />;
}
