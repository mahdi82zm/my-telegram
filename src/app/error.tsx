"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Error(e) {
  console.log(e );
  return (
    <div className="h-screen w-full flex gap-10 flex-col  items-center justify-center bg-accent">
      <p className={cn("text-5xl")}> 🤒Somthing is wrong please try again ! </p>

      <p className="text-orange-700 text-4xl">{}</p>

      <Button
        className={cn(
          "bg-amber-400 text-3xl px-6  py-5 flex  items-center justify-center pb-7 rounded ",
        )}
      >
        try again{" "}
      </Button>
    </div>
  );
}
