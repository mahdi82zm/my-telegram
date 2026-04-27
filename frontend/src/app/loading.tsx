import { cn } from "@/lib/utils";
import { LucideLoaderCircle } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className={cn("h-screen w-full flex items-center justify-center ")}>
      <LucideLoaderCircle className={cn("animate-spin size-11")} />
    </div>
  );
}
