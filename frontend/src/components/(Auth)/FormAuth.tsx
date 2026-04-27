"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { Loader, SplinePointer } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropAuth {
  onSubmit: (data: { email: string; password: string }) => void;
  error?: any;
  loading: boolean;
  type: "login" | "register" | "forget";
}

export default function FormAuth({ onSubmit, error, loading, type }: PropAuth) {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  if (error) {
    toast.error("خطا  در ورود به سایت " + error, {
      style: {
        color: "red",
      },

      className: "bg-warning",
    });
  }

  return (
    <form
      dir="rtl"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ email, password });
      }}
      className={cn(
        "flex flex-col gap-5 border rounded  px-4 py-12 text-2xl w-1/4",
      )}
    >
      <h2>
        {type === "login"
          ? "ورود"
          : type === "register"
            ? "ثبت نام"
            : "فراموشی  رمز  عبور"}
      </h2>
      <Input
        placeholder="ایمیل  را  وارد کنید . .."
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        type="password"
        placeholder="رمز  خودرا وارد کنید..."
        onChange={(e) => setPassword(e.target.value)}
      />

      {!email && !password ? (
        ""
      ) : (
        <Button disabled={loading}>
          {loading ? <Loader className="animate-spin size-5" /> : "تایید"}
        </Button>
      )}
    </form>
  );
}
