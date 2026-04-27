"use client";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

export default function Account() {
  const [searchParams, setSearchParams] = useSearchParams();

  const router = useRouter();

  const handleSearchParams = (newSortVal: "noSelect" | string) => {
    const currentParams = new URLSearchParams(String(searchParams));
    currentParams.set("sort", newSortVal);
    console.log(currentParams.values);
    router.push(`?${currentParams.toString()}`);
  };

  return (
    <div>
      <Button onClick={() => handleSearchParams("newest")}>add params</Button>
    </div>
  );
}
