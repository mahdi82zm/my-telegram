"use client";

import { createClient } from "@/lib/supabase/client";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Suspense, useEffect, useId, useState } from "react";
import toast from "react-hot-toast";

import FetchContact from "./fetchContact";
import { LucideLoader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useChatStore } from "@/store/chatStore";
import { ChatWindow } from "../chat/ChatWindow";

import { sendMssageTosupabase } from "../../services/messageService";

import getServerSideProp from "@/lib/actionsApi/contactListAction";




export function DispMessage(id) {
  // const supabase = createClient();

  // const users = getServerSideProp()

  // console.log(users, "users is this ")

  // const { data: messages, error } = await supabase
  //   .from("messages")
  //   .select("content");

  // const content = messages?.map((item) => item.content).join(" ");
  // console.log("message is:  ", content);
  // return content;
  const { addMessage } = useChatStore()

  const { data: messages, isLoading, error } = useQuery({
    queryKey: ["contactMsg"],
    queryFn: FetchContact
  })
  if (error) {
    console.error(error)
  }

  const content = messages.map((item) => item.messages);
  const user = messages.map((item) => item.id == id ? item.name : "شروع چت");
  console.log(content , user  , 'disomsg')
  addMessage(content, user)
  console.log('content is  ', content);
  return content
}

export default function Contact() {
  const [idUser, setIdUser] = useState(0);

  const { data, isLoading, error } = useQuery({
    queryKey: ["contact"],
    queryFn: FetchContact,
  });


  const time = data?.[0].created_at;

  const dateTime = new Date(time);

  const format = dateTime.toLocaleString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });


  if (error) {
    toast.error(error.message);
  }
  // const { props } = data;
  // console.log("prop", props);

  const { addMessage } = useChatStore();

  const {
    data: messageData,
    isLoading: pending,
    error: erroMsgs,
  } = useQuery<string | null, Error>({
    queryKey: ["message"],
    queryFn: DispMessage,
  });



  useEffect(() => {
    const fetchuserFromApi = async () => {
      try {
        const res = fetch('/api/users')
        if (!res.ok) {
          throw new Error(`Http Error ! status : ${(await res).status}`)
        }
        const users = (await res).json
        return users
      } catch (error) {
        console.error("Error fetching  users from  api routes,", error)
      }
    }
    fetchuserFromApi();
  }, [])

  // useEffect(() => {
  //   const fetchMessage = async () => {
  //

  //     // const { id, message } = messages();

  //     // if (id === idUser) {
  //     //   setNewMes(message);
  //     // }
  //     console.log('the message  is  : ',messages);
  //   };
  //   fetchMessage();
  // }, [idUser]);

  const handleOpen = (id) => {
    setIdUser(id);

    addMessage(messageData, "other");
    DispMessage(id)
    // if(id === )
  };

  return (
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="  bg-accent shadow-2xl rounded-xl m-4 flex flex-col w-full h-full overflow-scroll col-span-4 border relative"
    >
      <div className="relative h-full w-full">
        <div className="border-b bg-primary-foreground rounded-xl">
          <h3 className="text-lg font-semibold text-blue-700 p-4 sticky">Contact </h3>
        </div>
        {isLoading && (
          <div className="flex w-full h-full items-center justify-center">
            <LucideLoader2
              className={cn(
                "animate-spin  fixed z-50 translate-x-1/2 items-center justify-center",
              )}
            />
          </div>
        )}

        {/* fake api  in next  contact list */}


        {/* supabase  disp  contact list   */}

        {data?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpen(item.id)}
            className="flex items-center  px-4 py-2 gap-5 border m-3 rounded-2xl hover:bg-accent cursor-pointer"
          >
            <Image
              src={String(item.image)}
              width={100}
              height={100}
              alt={String(item.name)}
              className="rounded-full size-14"
            />

            <h3>{item.name}</h3>
            <span>{ }</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
