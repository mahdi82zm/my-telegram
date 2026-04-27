"use client";
import Account from "./TAbSetting/Account";
import ChatSetting from "./TAbSetting/ChatSetting";
import Privacy from "./TAbSetting/Privacy";
import Notification from "./TAbSetting/Notification";
import Language from "./TAbSetting/Language";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function SettingIndex() {
  const params = useSearchParams();

  const [select, setSelect] = useState(0);

  const itemSetting = [
    {
      id: 1,
      name: "Account",
      content: <Account />,
    },
    {
      id: 2,
      name: "Chat Setting",
      content: <ChatSetting />,
    },
    {
      id: 3,
      name: "Privacy",
      content: <Privacy />,
    },
    {
      id: 4,
      name: "Notification",
      content: <Notification />,
    },
    {
      id: 5,
      name: "Language",
      content: <Language />,
    },
  ];

  const handleDisplay = (e) => {
    console.log(e.target.value);
  };

  console.log(select);
  return (
    <div className={cn("w-full h-full mt- grid grid-cols-12 gap-4")}>
      <div className={cn("col-span-2 border px-4 py-2 rounded-2xl ")}>
        <ul
          className={cn(
            "flex w-full h-full  flex-col  justify-start items-center  gap-5 ",
          )}
        >
          {itemSetting.map((item) => (
            <li
              onClick={() => setSelect(item.id)}
              className={cn(
                "flex  px-3 w-full  py-3 col-span-12 border rounded-2xl hover:bg-accent ",
              )}
              key={item.id}
            >
              <button className="cursor-pointer " value={item.name}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={cn("col-span-10 border rounded-2xl px-2 py-4 ")}>
        {itemSetting.map((item) =>
          item.id === select ? <div key={item.id}>{item.content}</div> : "",
        )}
      </div>
    </div>
  );
}
