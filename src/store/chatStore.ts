import { create } from "zustand";

import { Message } from "../type/Message";
import { useQuery } from "@tanstack/react-query";
import FetchContact from "@/components/contact/fetchContact";

export interface ChatMessage {
  id: string;
  messages: string;
  name: "user" | "other" | string;
  // timeStamp: number;
}

interface ChatState {
  messages: ChatMessage[];
  addMessage: (messages: string, name: "user" | "other" | string) => void;
  clearChat: () => void;
}
function DispMsg(idUser) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dispMsg"],
    queryFn: FetchContact,
  });
  const msg = data.map((item) =>
    item.id == idUser ? item.messages : `چت را شروع کنید با ${item.name}`,
  );

  return msg;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [
    {
      id:"1",
      messages:'سلام',
      name : 'مهدی'
    }
  ],

  addMessage: (messages, name) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Date.now().toString(),
          messages,
          name,
        },
      ],
    })),

  clearChat: () => set({ messages: [] }),
}));
// timeStamp: Date.now(),

// id: Date.now().toString(),
// messages,
// name,
