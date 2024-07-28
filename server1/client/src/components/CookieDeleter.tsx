"use client";

export function CookieDeleter({ name }: { name: string }) {
  const header: Headers = new Headers();
  header.set("type", "deleter");
  header.set("name", name);

  const request: Request = new Request("http://localhost:3001/api/auth", {
    method: "POST",
    headers: header,
  });

  return fetch(request)
    .then((res) => res.json())
    .then((res) => {
      return <></>;
    });
}
