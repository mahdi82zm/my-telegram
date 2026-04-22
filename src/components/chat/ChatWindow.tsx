"use client";

import { useChatStore, ChatMessage } from "@/store/chatStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import FetchContact from "../contact/fetchContact";
import { useEffect } from "react";
import { fetchMessages } from "@/services/messageServices";

const MessageBuble: React.FC<{ message: ChatMessage }> = ({ message }) => {
  
  const {currentUserId} = useChatStore()
 
  const isUser = message.senderId === currentUserId


  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={cn(
        "flex mb-4 max-w-[80%]",
        isUser ? "justify-end ml-auto" : "justify-start mr-auto",
      )}
    >
      <div
        className={cn(
          "p-3 rounded-xl shadow-md",
          isUser
            ? "bg-blue-600 text-white rounded-br-sm"
            : "bg-gray-100 text-gray-800 rounded-tl-sm",
        )}
      >
        <p className="text-sm wrap-break-word">{message.text}</p>
        <span
          className={cn(
            "text-[10px] opacity-70 mt-1 block ",
            isUser ? "text-right " : "text-left",
          )}
        >
          {new Date(message.createAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </motion.div>
  );
};


export const ChatWindow: React.FC = () => {
  const { messages } = useChatStore();

  return (
    <ScrollArea
      className={cn("flex-1 p-4 h-[calc(90vh-160px)] border-b bg-accent")}
    >
      {messages.map((msg) => (
        <MessageBuble key={msg.id} message={msg} />
      ))}
    </ScrollArea>
  );
};
