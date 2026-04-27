import React from "react";

export const metadata = {
  title: "Saved Message",
};

export default function page() {
  return (
    <div className="w-full h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="border rounded-xl px-8 py-4 bg-accent flex  items-center justify-center ">
        <h3 className="text-3xl ">⚠️You don`t have any saved message yet!</h3>
      </div>  
    </div>
  );
}
