"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function SetLocalStorage({ path }: { path: string }) {
  const [count, setCount] = useState<number>(0);
  useEffect(() => {
    localStorage.setItem("next", path);
    setCount(count + 1);
  }, [count, path]);

  return <h1>{count == 1 ? redirect("/callback") : <>loading...</>}</h1>;
}
