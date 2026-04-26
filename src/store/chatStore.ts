import { create } from "zustand";
import { persist } from "zustand/middleware";
export interface ChatMessage {
  id: string;
  text: string;
  senderId: string;
  receiverId: string;
  createdAt: number;
  file?: string;
}

interface ChatState {
  messages: ChatMessage[];

  currentUserId: string | null;
  selectedContact: string | null;

  setCurrentUserId: (id: string) => void;
  setSelectedContact: (id: string) => void;

  setMessages: (messages: ChatMessage[]) => void;

  addMessage: (msg: ChatMessage) => void;

  clearChat: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],

  currentUserId: "u1",
  selectedContact: null,

  setCurrentUserId: (id) => set({ currentUserId: id }),
  setSelectedContact: (id) => set({ selectedContact: id }),
  setMessages: (messages) => set({ messages }),

  addMessage: (msg) =>
    set((state) => ({
      messages: [...state.messages, msg],
    })),

  clearChat: () => set({ messages: [] }),
}));
