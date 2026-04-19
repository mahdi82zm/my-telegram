import { create } from "zustand";



export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "other" | string;
  createAt: number;
}

interface ChatState {
  messages: ChatMessage[];
  addMessage: (text: string, sender: "user" | "other" | string) => void;
  clearChat: () => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: [],

  addMessage: (text, sender) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: Date.now().toString(),
          text,
          sender,
          createAt: Date.now(),
        },
      ],
    })),

  clearChat: () => set({ messages: [] }),
}));
