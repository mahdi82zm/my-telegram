"use server";
import { createClient } from "@/lib/supabase/client";
import { cookies } from "next/headers";
import Image from "next/image";

import fs, { readFileSync } from 'fs'
import path from 'path'

export default async function FetchContact() {

  const filePath = path.join(process.cwd(), 'data', 'users.json')
  try {

    const fileContent = readFileSync(filePath, 'utf-8')
    const users = JSON.parse(fileContent)
    console.log('user fetching  is : ' , users)
    return users
  } catch (error) {
    console.error("error fetching  contact !..." , error)
    throw new Error('Failed  to  load contact ! ')
  }




  // const cookieStore = await cookies();

  // const supabase = createClient();

  // const { data: profile } = await supabase.from("Profile").select("*");
  // console.log(profile);
  // return profile;
}
