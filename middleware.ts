import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("pcys")?.value || "";
  const refreshToken = req.cookies.get("pcys_refresh")?.value || "";
  const path = req.nextUrl.pathname;

  const isAuthPage = path.startsWith("/auth/login");
  const isRegisterPage = path.startsWith("/auth/register");

  if (isRegisterPage) {
    return NextResponse.next();
  }
  
  if (accessToken && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!accessToken && refreshToken) {
    return NextResponse.next();
  }
  if (!accessToken && !refreshToken && !isAuthPage) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|public).*)"],
};
