import { createServerClient } from "@supabase/ssr";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const Url = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const UnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseServer = (cookies: ReadonlyRequestCookies) => {
  createServerClient(Url, UnonKey, {
    cookies: {
      get: (name: string) => {
        cookies.get(name)?.value;
      },
    },
  });
};
