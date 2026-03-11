import { cn } from "@/lib/utils";
import { LoaderIcon, LucideLoaderPinwheel } from "lucide-react";
import React from "react";

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LoaderIcon className={cn("animate-spin size-40 text-primary")} />
    </div>
  );
}
