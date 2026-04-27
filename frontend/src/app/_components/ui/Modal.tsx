"use client";


import { cn } from "@/lib/utils";
import { useModal } from "@/store/useModal";


interface IconProp {
  children?: React.ReactNode;
}

export const Modal: React.FC<IconProp> = ({ children }) => {
  const { isOpen, closeModal, content } = useModal();

  if (!isOpen) return null;

  return (
    <div
      onClick={closeModal}
      className={cn(
        "fixed  inset-0 w-full flex z-100  items-center justify-center bg-black/30  h-full backdrop-blur-sm",
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-accent text-black dark:text-white  rounded-lg  w-full max-w-lg shadow-lg  transition-all transform"
      >
        {content}
        
      </div>
    </div>
  );
};
