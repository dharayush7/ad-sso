import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <div className="container mt-3">
        <div className="d-flex justify-content-center align-items-center">
          <p className="text fs-2 fw-medium">Profile Information</p>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div style={{ width: "600px", marginTop: "30px" }}>
            <p className="text fs-3">
              <span className="fw-medium">Name: </span> {user.given_name}{" "}
              {user.family_name}
            </p>
            <p className="text fs-3">
              <span className="fw-medium">Email: </span> {user.email}{" "}
            </p>
            <div className="d-flex justify-content-center align-items-center">
              <a href="/logout?next=/message">
                <button className="btn btn-danger" type="button">
                  Log out
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
