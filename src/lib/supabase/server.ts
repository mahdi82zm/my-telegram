import { createClient } from "@supabase/supabase-js";

const Url = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const UnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseServer = createClient(Url, UnonKey);
