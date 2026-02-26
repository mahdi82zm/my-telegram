"use client";

import FormAuth from "../FormAuth";
import { useMutation } from "@tanstack/react-query";
import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginIndex() {
  const router = useRouter();

  const supabase = createClient();

  const { error, isPending, mutate } = useMutation<
    unknown,
    Error,
    { email: string; password: string }
  >({
    mutationFn: async ({ email, password }) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return data;
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
    onError: (error: Error) => {
      toast.error(`خطا در  وود  ${error.message || "خطای ناشناخته "} `);
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
