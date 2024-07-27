"use client";
import { useSearchParams, redirect } from "next/navigation";

export default function SendBack({ token }: { token: string }) {
  const searchParams = useSearchParams();
  const params = searchParams.get("next");
  if (!params) return <h1>Error</h1>;
  return redirect(`${params}?token=${token}`);
}
