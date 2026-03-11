import HomeIndex from "@/components/pages/(Landing)/Home/HomeIndex";
import React from "react";

export const revalidate = 10;

export default function Home() {
  return (
    <div className="w-full  h-full">
      <HomeIndex />
    </div>
  );
}
