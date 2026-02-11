import { createServerClient } from "@supabase/ssr";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { Database } from "../../../database.types";

const Url = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const UnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseServer = (cookies: ReadonlyRequestCookies) => {
  return createServerClient<Database>(Url, UnonKey, {
    cookies: {
      get: (name: string) => {
        return cookies.get(name)?.value;
      },
    },
  });
};
