"use client";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { SignUpForm } from "./sign-up-form";
import { useState } from "react";
import { LoginForm } from "./login-form";

export default function HeaderModal() {
  const handleModalAction = () => {
    setModalItems("Register");
  };

  const [modalItems, setModalItems] = useState<"Login" | "Register">(
    "Register",
  );

  return (
    <div className="">
      {modalItems == "Login" ? <LoginForm /> : <SignUpForm />}
      <div className={cn('flex items-center justify-center gap-3 mx-4 my-2')}>
        <Button onClick={() => setModalItems("Login")}>Login</Button>
        <Button onClick={() => setModalItems("Register")}>Register</Button>
      </div>
    </div>
  );
}
