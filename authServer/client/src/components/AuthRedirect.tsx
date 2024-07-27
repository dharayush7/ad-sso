"use client";
import React from "react";
import { useSearchParams, redirect } from "next/navigation";

export default function AuthReadirect() {
  const searchParams = useSearchParams();
  const parameter = searchParams.get("next");
  if (!parameter) return <h3>Error </h3>;
  return redirect(
    `/api/auth/login?post_login_redirect_url=/callback+next=${parameter}`
  );
}
