'use client'

import { Circle, LucideContact, LucideLoader2 } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion'
import { useChatStore } from "@/store/chatStore";
import { useQuery } from "@tanstack/react-query";
import FetchContact from "./fetchContact";
import { useEffect, useState } from "react";
import { fetchContact } from "@/services/contactServices";
import { cn } from "@/lib/utils";


interface ContactType {
  id: string,
  name: string,
  avatar: string,
  online: boolean
}



export default function Contact() {


  const { setMessages, setSelectedContact, currentUserId, selectedContact ,  clearChat ,setUserInfo} = useChatStore()


  const { data: contacts, isLoading } = useQuery<ContactType[]>({
    queryKey: ['contact'],
    queryFn: fetchContact
  })

  console.log(contacts)



  const handleOpen = async (contact) => {

    setSelectedContact(contact.id)
    setUserInfo(contact)
    clearChat()

    try {
      const res = await fetch(`http://localhost:4000/messages/${currentUserId}/${contact.id}`)
      const msg = await res.json()
      setMessages(msg)
      console.log("msg  : " , msg)
      
    } catch (error) {
        console.error("Error  in  loading  messafges  !!!" ,  error)
    }




  }

  return (
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-accent shadow-2xl rounded-xl m-4 flex flex-col w-100 h-full  border"
    >
      <div className="border-b bg-primary-foreground rounded-xl flex  gap-2 px-4 items-center justify-start">
        <LucideContact />
        <h3 className="text-lg font-semibold  p-4">Contact</h3>
      </div>

      {isLoading && (
        <div className="flex w-full h-full items-center justify-center">
          <LucideLoader2 className="animate-spin" />
        </div>
      )}
      <div className="overflow-scroll h-150 ">
        {contacts?.map((item) => (
          <div
            key={item.id}
            onClick={() => handleOpen(item)}
            className={cn('flex items-center px-4 border gap-5 py-5 m-3 border-border hover:bg-primary-foreground cursor-pointer rounded-xl', selectedContact == item.id ? 'bg-border' : '')}
          >
            <div className="relative aspect-square size-15 ">

              <Image fill className="absolute rounded-full" src="/avatars/profile_01.png" alt="profile"></Image>
              <div className={`absolute z-50 translate-12 rounded-full aspect-square size-4 ${item.online ? 'bg-green-300' : 'bg-zinc-500'} `}></div>
            </div>
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

    </motion.div>
  );
}