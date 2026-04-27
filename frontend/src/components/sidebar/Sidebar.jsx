"use client";

import Link from "next/link";
import { motion, scale } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import iconSite from "@/app/icon.png";
import {
  Bookmark,
  Group,
  LucideHamburger,
  LucideMenu,
  LucidePanelLeftClose,
  LucidePanelRightClose,
  LucidePersonStanding,
  LucideSquareMenu,
  Megaphone,
  MessageCircle,
  Save,
  Settings,
  User,
} from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

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

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="relative h-full
"
    >
      <div className="fixed z-100 laptop:absolute  p-4 h-full   transition-all transform duration-700    ">
        <motion.div
          layout
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={cn(
            " flex-col flex h-full    gap-4 text-primary font-semibold bg-accent shadow-lg  mb-10 border border-sidebar-ring  rounded-2xl p-4 ",
          )}
        >
          <Button
            onClick={() => setIsOpen((prev) => !prev)}
            className={cn("laptop:hidden", `laptop:`)}
          >
            {isOpen ? <LucidePanelRightClose /> : <LucidePanelLeftClose />}
          </Button>
          {item.map((item) => (
            <Link
              onClick={() => setSelect(item.id)}
              key={item.id}
              href={item.ref}
              className={cn(
                "flex flex-col px-4 py-3 transition-transform duration-500 rounded-2xl  border hover:translate-x-3",
                select === item.id ? "bg-chart-5 text-primary  " : "",
              )}
            >
              <div className={cn("flex items-center  gap-4")}>
                <span className="text-2xl"> {item.icon}</span>

                <span
                  className={cn(
                    ` transition-all duration-200  ${isOpen ? "" : "absolute  transition-transform duration-700  opacity-0"}`,
                  )}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
