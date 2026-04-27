import React from "react";
import { create } from "zustand";

// type  contetnType = React.ReactNode | (() => React.ReactNode);

interface ModalProps {
  isOpen: boolean;
  content: React.ReactNode;
  OpenModal: (content: React.ReactNode) => void;
  closeModal: () => void;
}

export const useModal = create<ModalProps>((set, get) => ({
  isOpen: false,
  content: null,
  OpenModal: (content) => set({ isOpen: true, content }),
  closeModal: () => set({ isOpen: false, content: null }),
}));
