"use client";

import "bootstrap/dist/css/bootstrap.min.css";

export function CookieSetter({ name, value }: { name: string; value: string }) {
  const header: Headers = new Headers();
  header.set("type", "setter");
  header.set("name", name);
  header.set("value", value);

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
          <h1 className="text">Log In Success</h1>
          <a href="/">
            <button
              className="btn btn-success"
              type="button"
              style={{ width: "130px", borderRadius: "30px" }}
            >
              Go To Home
            </button>
          </a>
        </div>
      );
    });
}
