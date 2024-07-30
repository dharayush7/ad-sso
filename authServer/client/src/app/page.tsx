import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    return redirect("/callback?next=/");
  }

  const user = await getUser();

  if (!user) {
    return redirect("/callback?next=/");
  }

  return (
    <main>
      <pre>
        <code>{JSON.stringify(user)}</code>
      </pre>
      <a href="/logout?next=/message">Log Out</a>
    </main>
  );
}
