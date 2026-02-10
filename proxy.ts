import { NextRequest, NextResponse } from "next/server";

import { createServerClient } from "@supabase/ssr";

const UrlSupa = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const AnonSupa = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export async function proxy(request: NextRequest) {
  const res = NextResponse.next();

  const supabase = createServerClient(UrlSupa, AnonSupa, {
    cookies: {
      get: (key) => request.cookies.get(key)?.value,

      set: (key, value, options) => res.cookies.set(key, value, options),
      remove: (key, options) => res.cookies.delete(key),
    },
  });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    const protectedRoute = ["/chat", " /profile"];

    const path = request.nextUrl.pathname;

    const shoudRedirect = protectedRoute.some(
      (route) =>
        path.startsWith(route) &&
        !path.startsWith("/login") &&
        !path.startsWith("/register")
    );

    if (shoudRedirect) {
      const redirectUrl = new URL("/login", request.url);
    }
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isprotected = protectedRoute.some((path) => {
    request.nextUrl.pathname.startsWith(path.trim());
  });

  if ((!user && isprotected) || !session) {
    const redirect = new URL("/login", request.url);
    return NextResponse.redirect(redirect);
  }
  return res;
}

export const config = {
  matcher: ["/chat/:path*", "/profile/:path*", "/login", "/register"],
};
