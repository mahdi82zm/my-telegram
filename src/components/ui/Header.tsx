"use client";
import { LogoutButton } from "../logout-button";
import { cn } from "@/lib/utils";
import ThemeButton from "./themeButton";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/apiAuth";
import { LucideUser } from "lucide-react";

export default function Header() {
  const { data, isPending } = useQuery({
    queryKey: ["getUser"],
    queryFn: getUser,
  });

  console.log(data);
  return (
    <div className={cn("mr-2 mb-20 ")}>
      <div
        className={cn(
          " fixed flex items-center  justify-between w-10/12 z-10   bg-primary-foreground border border-sidebar-ring shadow rounded-xl  py-4 px-2",
        )}
      >
        <div className={cn('flex items-center gap-4')}>
          <LogoutButton />
          <ThemeButton />
        </div>
        <LucideUser />
      </div>
    </div>
  );
}
