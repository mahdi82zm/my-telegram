"use client";

import { ChatWindow } from "@/components/chat/ChatWindow";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import InputBar from "@/components/chat/InputBar";
import { cn } from "@/lib/utils";
import { LayoutPanelLeft } from "lucide-react";
import Sidebar from "@/components/sidebar/Sidebar";
import Contact from "../contact/Contact";

export default function ChatIndex() {
  return (
    <div className="  w-full h-[calc(100vh-11rem)] grid grid-cols-12 gap-10  justify-between">
      

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          " col-span-7 flex  flex-col w-full  h-full bg-accent shadow-2xl rounded-xl overflow-hidden border m-4",
        )}
      >
        {/* Header */}
        <header className="p-4 border-b flex items-center space-x-2 bg-primary-foreground  text-blue-800  ">
          <LayoutPanelLeft className="size-6" />
          <h1 className="text-lg font-semibold">Chat Ui </h1>
        </header>

        {/* chat window */}
        <ChatWindow></ChatWindow>
        <InputBar></InputBar>
      </motion.div>

      {/* Contact */}

      <Contact />
    </div>
  );
}
