"use client";

import { useMutation } from "@tanstack/react-query";
import FormAuth from "../FormAuth";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterIndex() {
  const router = useRouter();
  const { error, isPending, mutate } = useMutation({
    mutationFn: async ({ password, email }) => {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        toast("شما  نمی  توانید  وارد شوید !", error);
        throw error;
      }
      return data;
    },

    onSuccess: () => {
      router.push("/");
      toast("با موفقیت ثبت نام شدید");
    },
  });

  return (
    <FormAuth
      error={error}
      loading={isPending}
      onSubmit={mutate}
      type="register"
    />
  );
}
