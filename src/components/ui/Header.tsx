import React from "react";

import { LogoutButton } from "../logout-button";
import { cn } from "@/lib/utils";
import ThemeButton from "./themeButton";

export default function Header() {
  return (
    <div
      className={cn(
        "bg-primary-foreground border border-sidebar-accent shadow rounded-xl mr-4 py-4 px-2",
      )}
    >
      <LogoutButton />
      <ThemeButton />
    </div>
  );
}
