import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedin = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/login");
  const isAdminPage = req.nextUrl.pathname.startsWith("/admin");

  if (isAdminPage && !isLoggedin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (isAuthPage && isLoggedin) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
