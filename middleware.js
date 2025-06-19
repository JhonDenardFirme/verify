import authConfig from "./auth.config";
import NextAuth from "next-auth";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);


  //Allow every API Route
  if (isApiAuthRoute){
    return null;
  }
  //Check if you can access /api/auth/providers

  // Check Auth Routes, and Redirect after Log In
  if (isAuthRoute){
    if (isLoggedIn){
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));    //After logging via Auth Route, the user will be redirected to this. NextURL is required to create absolute URL
    }

    return null;
  }
  //Check if you can access Auth Form (Log In Page)


  if (!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL("/auth/login", nextUrl))   //If not Logged In and accessing protected routes, redirect to Auth Form
  }

  return null;  //Allow any other route (Dont do anything)
 
  // FINAL CHECK: Go to /settings (Inner Protected Page) and you should be redirected to Auth Form 

})


// Matcher config to apply auth on specific routes
export const config = {
  matcher: [
    // Skip Next.js internals and static files unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Apply middleware to API routes
    '/(api|trpc)(.*)',
  ],
};