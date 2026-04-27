"use client";

import { useEffect } from "react";
import { ChatWindow } from "@/components/chat/ChatWindow";
import InputBar from "@/components/chat/InputBar";
import { useChatStore } from "@/store/chatStore";
import { getSocket } from "@/lib/socket";


import { LayoutPanelLeft, LucideArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import Contact from "../contact/Contact";
import { fetchContact } from "@/services/contactServices";
import { useQuery } from "@tanstack/react-query";
import { userInfo } from "@/app/_lib/types/userType";
import Image from "next/image";

export default function ChatIndex() {

  const { addMessage, userInfo } = useChatStore()



  useEffect(() => {

    const socket = getSocket()

    socket.on("recieve_message", (msg) => {
      addMessage(msg)
    })

    return () => {
      socket.off("receive_message")
    }
  }, [addMessage])

  const { data: user, isLoading } = useQuery<userInfo>({
    queryKey: ['userInfo'],
    queryFn: fetchContact
  })


  return (
    <div className="  w-full h-full flex  justify-between">


      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "  flex  flex-col w-full  h-full bg-accent shadow-2xl rounded-xl overflow-hidden border m-4",
        )}
      >
        {/* Header */}
        <header className="p-4 border-b flex items-center space-x-2 bg-primary-foreground  text-accent-800  ">
          <LucideArrowLeft className="size-6" />

          {userInfo ?
          <div className={cn('flex items-center gap-4 ')}>
            <div className={cn('relative aspect-square h-10 ')}>
            <Image className={cn(' bg-amber-500 object-cover rounded-full')} src={userInfo.avatar} fill  alt={userInfo.name}  />
            </div>
            <div>
            <p>{userInfo.name}</p> 
            <p className={cn( "text-[12px] font-medium" ,userInfo.online ? 'text-chart-2' : 'text-chart-4')} >{userInfo.online ? "Online" : "Offline"}</p>
            </div>
          </div>
          
          : "start chat"}

        </header>

        {/* chat window */}
        <ChatWindow></ChatWindow>
        <InputBar></InputBar>
      </motion.div>

      {/* Contact */}
      <div>

        <Contact />
      </div>
    </div>
  );
}
