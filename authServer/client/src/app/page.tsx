import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/api/auth/login?post_login_redirect_url=/callback?next=/");
  }

  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/login?post_login_redirect_url=/callback?next=/");
  }
  return (
    <main>
      <pre>
        <code>{JSON.stringify(user)}</code>
      </pre>
      <LogoutLink>LogOut</LogoutLink>
    </main>
  );
}
