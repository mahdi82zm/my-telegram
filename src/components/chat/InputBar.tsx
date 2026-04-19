"use client";

import { getSocket } from "@/lib/socket";

import { FormEvent, useEffect, useRef, useState } from "react";

import { useChatStore } from "@/store/chatStore";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { LucideLoader2, Send, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";


export default function InputBar() {
  const { addMessage } = useChatStore();
  const [inputText, setInputText] = useState("");

  const [loading, setIsLoading] = useState(false);
  const inputEl = useRef<HTMLInputElement | null>(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const socket = getSocket()

    socket.emit("send_message",{
      text : inputText,
      sender:"user"
    })

    addMessage(inputText, "user");
    setInputText("");
    // setIsLoading(true);

    // await new Promise((resolve) => setTimeout(resolve, 1500));

    // const responseText = `پاسخ شبیه‌سازی شده برای: "${inputText}" — (اینجا اتصال Socket.io انجام می‌شود)`;
    // addMessage(responseText, "other");
    // setIsLoading(false);
    // toast.success("پیام ارسال شد ", {
    //   style: {
    //     color: "green",

    //     borderLeft: "red 3px",
    //   },
    // });
  };

  useEffect(() => {
    const CallBack = (e: KeyboardEvent) => {
      if (e.code === "Tab") {
        inputEl?.current?.focus();
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", CallBack);

    return () => document.addEventListener("keydown", CallBack);
  }, []);

  const handleUpload = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="p-4 border-t bg-accent   shadow-lg">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <Input
          ref={inputEl}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="پیام خود را وارد کنید  ..."
          disabled={loading}
          className={cn("flex-1 focus-visible:ring-blue-500")}
        ></Input>{" "}
        <Button className={cn("bg-blue-600 p-0  relative")}>
          <Input
            type="file"
            placeholder="none"
            className={cn("size-1 border-none")}
          ></Input>
          <Upload className="absolute" />
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {loading ? (
            <LucideLoader2 className="size-5 animate-spin" />
          ) : (
            <Send className="size-5" />
          )}
        </Button>
      </form>
    </div>
  );
}
