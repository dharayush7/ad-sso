"use client";

import "bootstrap/dist/css/bootstrap.min.css";

export function CookieDeleter({ name }: { name: string }) {
  const header: Headers = new Headers();
  header.set("type", "deleter");
  header.set("name", name);

  const request: Request = new Request("http://localhost:3002/api/auth", {
    method: "POST",
    headers: header,
  });

  return fetch(request)
    .then((res) => res.json())
    .then((res) => {
      return (
        <div
          className="container"
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 className="text">LogOut success</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <a href="/" style={{ marginRight: "25px" }}>
              <button
                className="btn btn-success"
                type="button"
                style={{ width: "130px", borderRadius: "30px" }}
              >
                Go To Home
              </button>
            </a>
            <a
              href="http://localhost:3000/callback?next=http://localhost:3002/identify"
              style={{ marginLeft: "0px" }}
            >
              <button
                className="btn btn-success"
                type="button"
                style={{ width: "130px", borderRadius: "30px" }}
              >
                Sign In Again
              </button>
            </a>
          </div>
        </div>
      );
    });
}
