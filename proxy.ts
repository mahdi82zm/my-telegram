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
    data: { user },
  } = await supabase.auth.getUser();

  const protectedRoute = ["/chat", " /profile"];

  const isprotected = protectedRoute.some((path) => {
    request.nextUrl.pathname.startsWith(path.trim());
  });

  if (!user && isprotected) {
    const redirect = new URL("/login", request.url);
    return NextResponse.redirect(redirect);
  }
  return res;
}

export const config = {
  matcher: ["/chat/:path*", "/profile/:path*", "/login", "/register"],
};
