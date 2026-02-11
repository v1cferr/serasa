"use client";

import { MessageCircle } from "lucide-react";
import { useChat } from "@/components/chat-context";

export function FloatingActionButton() {
  const { isOpen, toggle } = useChat();

  return (
    <div className="fixed bottom-6 right-4 z-50 sm:right-6">
      <button
        type="button"
        onClick={toggle}
        className={`flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 ${
          isOpen ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
        }`}
        aria-label="Abrir assistente"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
