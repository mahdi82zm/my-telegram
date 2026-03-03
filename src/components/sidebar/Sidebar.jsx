"use client";

import Link from "next/link";
import { motion, scale } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import iconSite from "@/app/icon.png";
import {
  Bookmark,
  Group,
  LucidePersonStanding,
  Megaphone,
  MessageCircle,
  Save,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";

const item = [
  {
    id: 1,
    icon: <User />,
    name: "Profile",
    ref: "/profile",
  },
  {
    id: 2,
    icon: <Settings />,
    name: "setting",
    ref: "/setting",
  },
  {
    id: 3,
    icon: <Bookmark />,
    name: "Saved Message",
    ref: "/saved",
  },
  {
    id: 4,
    icon: <MessageCircle />,
    name: "Chat",
    ref: "/chat",
  },
  {
    id: 5,
    icon: <Group />,
    name: "group",
    ref: "/group",
  },
  {
    id: 6,
    icon: <Megaphone />,
    name: "Channle",
    ref: "/channle",
  },
];

export default function Sidebar() {
  const [select, setSelect] = useState();

  return (
    <div
      className="
"
    >
      <div className="relative w-full  p-4      ">
        <motion.div
          layout
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            " flex-col flex h-[90vh]     gap-4 text-primary font-semibold bg-accent shadow-lg  mb-10 border border-sidebar-ring  rounded-2xl p-4 ",
          )}
        >
          <Image alt="icon site " className={cn('size-24')} src={iconSite} width={30} height={30} />

          {item.map((item) => (
            <Link
              onClick={() => setSelect(item.id)}
              key={item.id}
              href={item.ref}
              className={cn(
                "flex flex-col px-4 py-3 transition-transform duration-500 rounded-2xl  border hover:translate-x-3",
                select === item.id
                  ? "bg-chart-1 text-primary  "
                  : "",
              )}
            >
              <div className="flex gap-4">
                {item.icon}
                {item.name}
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
