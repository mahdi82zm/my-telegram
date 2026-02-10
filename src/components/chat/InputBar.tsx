"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useChatStore } from "@/store/chatStore";
import toast from "react-hot-toast";
import { LucideLoader2, Send, Upload, UploadCloud } from "lucide-react";

export default function InputBar() {
  const { addMessage } = useChatStore();
  const [inputText, setInputText] = useState("");

  const [loading, setIsLoading] = useState(false);
  const inputEl = useRef(null);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    addMessage(inputText, "user");
    setInputText("");
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const responseText = `پاسخ شبیه‌سازی شده برای: "${inputText}" — (اینجا اتصال Socket.io انجام می‌شود)`;
    addMessage(responseText, "other");
    setIsLoading(false);
    toast.success("پیام ارسال شد ", {
      style: {
        color: "green",

        borderLeft: "red 3px",
      },
    });
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
    <div className="p-4 border-t bg-white shadow-lg">
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
