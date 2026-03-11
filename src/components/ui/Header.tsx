"use client";
import { LogoutButton } from "../logout-button";
import { cn } from "@/lib/utils";
import ThemeButton from "./themeButton";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/apiAuth";
import { LucideUser, LucideUserCircle, LucideUserSquare } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data, isPending } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  const router = useRouter();

  console.log(data);
  return (
    <div className={cn(" mb-20 ")}>
      <div
        className={cn(
          " fixed flex items-center mr-4 justify-between w-[83%] z-10   bg-primary-foreground border border-sidebar-ring shadow rounded-xl  py-4 px-2",
        )}
      >
        <div className={cn("flex items-center gap-4")}>
          <ThemeButton />
          <LogoutButton />
          <Button onClick={() => router.push("/home")}>Site Mega</Button>
        </div>
        <LucideUserCircle className="size-7 hover:text-primary" />
      </div>
    </div>
  );
}
