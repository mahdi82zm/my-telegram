import { create } from "zustand";

import { Message } from "../type/Message";

export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "other";
  timeStamp: number;
}

interface ChatState {
  messages: ChatMessage[];
  addMessage: (text: string, sender: "user" | "other") => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [
    // {
    //   id: "1",
    //   text: "سلام! من دستیار شما هستم.",
    //   sender: "other",
    //   timeStamp: Date.now() - 10000,
    // },
    // {
    //   id: "2",
    //   text: "چطور می‌توانم کمکت کنم؟",
    //   sender: "other",
    //   timeStamp: Date.now() - 5000,
    // },
  ],

  addMessage: (text, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Date.now().toString(),
          text,
          sender,
          timeStamp: Date.now(),
        },
      ],
    })),

  clearChat: () => set({ messages: [] }),
}));
