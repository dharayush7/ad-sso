import AuthReadirect from "@/components/AuthRedirect";
import SendBack from "@/components/SendBack";
import { userAuth } from "@/service/server";
import { User } from "@/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function CallbackPage() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    return <AuthReadirect />;
  }

  const user = await getUser();

  if (!user) {
    return <AuthReadirect />;
  }

  const destacturedUser: User = {
    email: user.email ? user.email : "",
    firstName: user.given_name ? user.given_name : "",
    lastName: user.family_name ? user.family_name : "",
    kindeId: user.id ? user.id : "",
  };

  const result = await userAuth(destacturedUser);
  return <SendBack token={result.tempToken} />;
}
