"use server";
import { createClient } from "@/lib/supabase/client";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function FetchContact() {
  const cookieStore = await cookies();

  const supabase = createClient();

  const { data: profile } = await supabase.from("Profile").select("*");
  console.log(profile);
  return profile;
}
