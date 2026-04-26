"use client";

import { getSocket } from "@/lib/socket";

import { FormEvent, useEffect, useRef, useState } from "react";

import { useChatStore } from "@/store/chatStore";

import { sendMessage } from "@/services/messageServices";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LucideLoader2, Send, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";


export default function InputBar() {
  const { addMessage, currentUserId, selectedContact } = useChatStore();
  const [inputText, setInputText] = useState("");



  const [loading, setIsLoading] = useState(false);
  const inputEl = useRef<HTMLInputElement | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    if (!selectedContact || !currentUserId) return;

    const socket = getSocket()

    const newMessage = {
      id: crypto.randomUUID(),
      text: inputText,
      senderId: currentUserId,
      receiverId: selectedContact,
      createdAt: Date.now()
    }

    socket.emit("send_message",
      newMessage
    )

    console.log("NEW MESSAGE:", newMessage)


    addMessage(newMessage);

    await sendMessage(newMessage)

    setInputText("");

  };



  useEffect(() => {
    const CallBack = (e: KeyboardEvent) => {
      if (e.code === "Tab") {
        inputEl?.current?.focus();
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", CallBack);

    return () => document.removeEventListener("keydown", CallBack);
  }, []);



  return (
    <div className="p-4 border-t bg-accent shadow-lg">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <Input
          ref={inputEl}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="پیام خود را وارد کنید..."
          disabled={loading}
          className={cn("flex-1")}
        />
        <Input type="file" ref={fileInputRef} className={cn("hidden")} />
        <Button onClick={() => fileInputRef.current?.click()} className={cn("bg-blue-600 hover:bg-blue-900 aspect-square  p-0 relative")}>
          <Upload className="absolute text-primary " />
        </Button>

        <Button type="submit" disabled={loading} className="bg-blue-600 hover:bg-blue-700">
          {loading ? <LucideLoader2 className="size-5 animate-spin " /> : <Send className="size-5 text-primary" />}
        </Button>
      </form>
    </div>
  );
}
