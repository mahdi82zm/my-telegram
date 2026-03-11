"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error({ reset, error }) {
  return (
    <div className="h-screen w-full flex gap-10 flex-col px-8 py-4 items-center justify-center bg-accent">
      <p className={cn("text-4xl")}> 🤒Somthing is wrong please try again ! </p>

      <p className="text-orange-700 text-2xl">{error.message}</p>

      <Button
        onClick={reset}
        className={cn(
          "bg-amber-400 text-3xl px-6  py-5 flex  items-center justify-center pb-7 rounded ",
        )}
      >
        try again{" "}
      </Button>
    </div>
  );
}
