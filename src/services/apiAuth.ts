import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";

export async function getUser() {
  const supabase = createClient();

  const {
    data: { user },
    error
  } = await supabase.auth.getUser();

  if  (error) { 
    toast.error(error.message)
  }

  console.log("the  user  is  :", user);

  return user;
}
