import SettingIndex from "@/components/pages/setting/SettingIndex";
import React from "react";

export const metadata = {
  title: "Setting",
};

export default function page() {
  return (
    <div className="h-full  w-full">
      <SettingIndex />
    </div>
  );
}
