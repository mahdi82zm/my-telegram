  "use client";

  import { createClient } from "@supabase/supabase-js";

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;


  if (!supabaseUrl || !anonKey) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY is missing.");
}

  export const supabase = createClient(supabaseUrl, anonKey);
