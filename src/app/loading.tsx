import { cn } from "@/lib/utils";
import { LucideLoaderCircle } from "lucide-react";
import React from "react";

export default function loading() {
  return <LucideLoaderCircle className={cn("animate-spin")} />;
}
