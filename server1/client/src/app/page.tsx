import { fetchAndValidedUser } from "@/controllers/user";
import "bootstrap/dist/css/bootstrap.min.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  let result;
  const cookieStore = cookies();
  const auth = cookieStore.get("auth");
  if (auth) {
    result = await fetchAndValidedUser(auth.toString());
    if (!result.valided) {
      cookieStore.delete("auth");
      redirect("/");
    }
  }

  return (
    <main>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="container-fluid d-flex align-items-center">
            <a className="navbar-brand" href="/">
              App1
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            {auth ? (
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Hi {result?.firstName} {result?.lastName}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Log Out
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            ) : (
              <>
                <a href="http://localhost:3000/callback?next=http://localhost:3000/indentify">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{ width: "150px", borderRadius: "30px" }}
                  >
                    Sign Up / Log In
                  </button>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
}
