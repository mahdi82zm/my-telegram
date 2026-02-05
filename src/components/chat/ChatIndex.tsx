"use client";

import { ChatWindow } from "@/components/chat/ChatWindow";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import InputBar from "@/components/chat/InputBar";
import { cn } from "@/lib/utils";
import { LayoutPanelLeft } from "lucide-react";
import Sidebar from "@/components/sidebar/Sidebar";

export default function ChatIndex() {
  return (
    <div className="grid grid-cols-12 gap-4 justify-between">
      <Toaster position="bottom-right" />

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          " col-span-7 flex flex-col w-full max-w-3xl h-[90vh] bg-white shadow-2xl rounded-xl overflow-hidden border m-4",
        )}
      >
        {/* Header */}
        <header className="p-4 border-b flex items-center space-x-2 bg-blue-50 text-blue-800  ">
          <LayoutPanelLeft className="size-6" />
          <h1 className="text-lg font-semibold">Chat Ui </h1>
        </header>

        {/* chat window */}
        <ChatWindow></ChatWindow>
        <InputBar></InputBar>
      </motion.div>

      {/* Contact */}

      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white shadow-2xl rounded-xl m-4 flex flex-col w-full col-span-4 border"
      >
        <div className=" ">
          <div className="border-b bg-blue-50">
            <h3 className="text-lg font-semibold text-blue-700 p-4">
              Contact{" "}
            </h3>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
