"use client";

import { supabase } from "@/lib/supabase/client";
import { supabaseServer } from "@/lib/supabase/server";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Suspense, useId } from "react";
import toast from "react-hot-toast";

const fetchCaonatact = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  const userId = user?.id;

  if (!useId) {
    toast("کاربری با این id وجود ندارد ");
  }

  if (error) {
    toast("خطا در دریافت اطلاهات : " + error.message);
    return null;
  }

  const { data: Profile } = await supabaseServer.from("Profile").select();

  console.log(Profile);
  return Profile;
};

export default function Contact() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["contact"],
    queryFn: fetchCaonatact,
  });

  console.log(data);

  return (
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-2xl rounded-xl m-4 flex flex-col w-full col-span-4 border"
    >
      <div className=" ">
        <div className="border-b bg-blue-50">
          <h3 className="text-lg font-semibold text-blue-700 p-4">Contact </h3>
          <Suspense>{data}</Suspense>
        </div>
      </div>
    </motion.div>
  );
}
