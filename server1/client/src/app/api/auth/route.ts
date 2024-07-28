import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const type = await request.headers.get("type");
  const response = NextResponse.json({}, { status: 200 });
  if (type === "setter") {
    const name = await request.headers.get("name");
    const value = await request.headers.get("value");

    if (!name || !value) return response;
    response.cookies.set(name, value);
    return response;
  }
  const name = await request.headers.get("name");
  if (!name) return response;
  response.cookies.delete(name);
  return response;
}
