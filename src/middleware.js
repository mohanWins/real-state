import { NextResponse } from "next/server";

const privateRoutes = ["/api/:path*", "/about", "/"];

const publicRoutes = ["/signUp", "/login"];

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // Public Route  -
  // 1. Token Exists - REDIRECT Home
  // 2. Token Does Not Exist - Let it go

  // Private Route -
  // 1. Token Exists - Let it go
  // 2. Token Does Not Exist - REDIRECT Login
  const isPublucRoute = publicRoutes.indexOf(request.nextUrl?.pathname) !== -1;
  const isPrivateRoute =
    privateRoutes.indexOf(request.nextUrl?.pathname) !== -1;
  const veryfiedAccount = request.cookies?.get("token")?.value; // token

  console.log("Running: ", request.nextUrl?.pathname);
  if (isPublucRoute) {
    console.log("IN PUBLIC - ", veryfiedAccount);
    // publlic  thn do this
    if (veryfiedAccount) {
      // token exists
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  if (isPrivateRoute) {
    console.log("PRIVATE - ", veryfiedAccount);
    if (!veryfiedAccount) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [...privateRoutes, ...publicRoutes],
};
