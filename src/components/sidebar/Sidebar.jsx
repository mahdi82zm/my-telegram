"use client";

import Link from "next/link";
import { motion, scale } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
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
    <div className="p-4 h-dvh">
      <motion.div
        layout
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "flex  flex-col   gap-4 text-zinc-700 text-مل font-semibold bg-white shadow-2xl border  h-full rounded-2xl p-4 ",
        )}
      >
        {item.map((item) => (
          <Link
            onClick={() => setSelect(item.id)}
            key={item.id}
            href={item.ref}
            className={cn(
              "flex flex-col px-4 py-3 transition-colors duration-500 rounded-2xl border hover:border-blue-700",
              select === item.id ? "bg-blue-700/30 text-black  " : "",
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
  );
}
