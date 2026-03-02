"use client";
import Account from "./TAbSetting/Account";
import ChatSetting from "./TAbSetting/ChatSetting";
import Privacy from "./TAbSetting/Privacy";
import Notification from "./TAbSetting/Notification";
import Language from "./TAbSetting/Language";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function SettingIndex() {
  const params = useSearchParams();

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

    console.log(e.target.value)
    params.set('tab' , e.target.value);
  };

  return (
    <div>
      <ul>
        {itemSetting.map((item) => (
          <li key={item.id}>
            <button
              className="cursor-pointer "
              onClick={(e) => handleDisplay(e)}
              value={item.name}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
