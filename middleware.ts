import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token");

  if (pathname.startsWith("/admin") && !token?.value) {
    return NextResponse.redirect(new URL("/forbidden", request.nextUrl));
  }
}
