"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function GetLocalStorage({ token }: { token: string }) {
  const [path, setPath] = useState<string | null>();
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    const result = localStorage.getItem("next");
    if (result) {
      setPath(result);
      localStorage.removeItem("next");
    }

    setCount(count + 1);
  }, []);

  // if (!path) return <h1>Error</h1>;

  return (
    <h1>
      {path == null ? (
        <>loading ...</>
      ) : count == 1 ? (
        redirect(`${path}?token=${token}`)
      ) : (
        <>loading...</>
      )}
    </h1>
  );

  // redirect(`${path}?token=${token}`);
}
