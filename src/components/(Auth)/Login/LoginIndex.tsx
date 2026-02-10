"use client";

import FormAuth from "../FormAuth";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginIndex() {
  const router = useRouter();

  const { error, isPending, mutate } = useMutation({
    mutationFn: async ({ email, password }) => {
      const {} = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    },
    onSuccess: () => {
      console.log("با موفقیت وارد شدید .");
      toast("با موفقت  وارد شدید ", {
        style: {
          color: "green",
        },
      });
      router.push("/");
    },
  });

  return (
    <div className=" flex items-center justify-center h-full   ">
      <FormAuth
        error={error}
        onSubmit={mutate}
        loading={isPending}
        type="login"
      />
    </div>
  );
}
