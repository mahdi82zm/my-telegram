'use client'

import { LucideLoader2 } from "lucide-react";
import Image from "next/image";
import { motion } from 'framer-motion'
import { useChatStore } from "@/store/chatStore";
import { useQuery } from "@tanstack/react-query";
import FetchContact from "./fetchContact";
import { useEffect } from "react";
import { fetchContact } from "@/services/contactServices";





export default function Contact() {


  const { setMessages, setSelectedContact, currentUserId } = useChatStore()

  const { data: contacts, isLoading } = useQuery({
    queryKey: ['contact'],
    queryFn: fetchContact
  })

  console.log(contacts)

  

  const handleOpen = async (contactId) => {

    setSelectedContact(contactId)

    const res = await fetch(`http://localhost:4000/messages/${currentUserId}/${contactId}`)

    const msg = await res.json()

    setMessages(msg)
  }

  return (
    <motion.div
      initial={{ scale: 0.9, y: 20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-accent shadow-2xl rounded-xl m-4 flex flex-col w-100 h-full overflow-scroll border"
    >
      <div className="border-b bg-primary-foreground rounded-xl">
        <h3 className="text-lg font-semibold text-blue-700 p-4">Contact</h3>
      </div>

      {isLoading && (
        <div className="flex w-full h-full items-center justify-center">
          <LucideLoader2 className="animate-spin" />
        </div>
      )}

      {contacts?.map((item) => (
        <div
          key={item.id}
          onClick={() => handleOpen(item.id)}
          className="flex items-center px-4 py-2 gap-5 border m-3 rounded-2xl hover:bg-accent cursor-pointer"
        >
          <h3>{item.name}</h3>
        </div>
      ))}
    </motion.div>
  );
}