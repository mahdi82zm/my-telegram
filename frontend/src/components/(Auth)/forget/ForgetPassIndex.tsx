"use client";

import { useMutation } from "@tanstack/react-query";
import FormAuth from "../FormAuth";
import { supabase } from "@/lib/supabase/client";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ForgetPassIndex() {
  const router = useRouter();
  const { error, isPending, mutate, isError, isSuccess } = useMutation({
    mutationFn: async ({ email }) => {
      const {} = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
    },
    onSuccess: () => {
      console.log("با موقفیت رمز  شما  بازیابی شد .");
      router.push("/");
      toast("با موقفیت رمز  شما  بازیابی شد .");
    },
  });

  return (
    <motion.div className={cn("flex items-center justify-center h-full")}>
      <FormAuth
        error={error}
        loading={isPending}
        onSubmit={mutate}
        type="forget"
      />
    </motion.div>
  );
}
