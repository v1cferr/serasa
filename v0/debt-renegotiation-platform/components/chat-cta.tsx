"use client";

import { useChat } from "@/components/chat-context";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function ChatCTA() {
  const { toggle } = useChat();

  return (
    <section className="bg-primary/5 py-12 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-6">
        <div className="rounded-full bg-primary/10 p-4">
          <MessageCircle className="h-10 w-10 text-primary" />
        </div>
        <div className="space-y-2 max-w-[600px]">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Precisa de ajuda para negociar?
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Nossa assistente virtual está pronta para tirar suas dúvidas e
            ajudar você a encontrar a melhor solução para o seu momento
            financeiro.
          </p>
        </div>
        <Button size="lg" onClick={toggle} className="gap-2 text-lg px-8">
          <MessageCircle className="h-5 w-5" />
          Falar com Assistente
        </Button>
      </div>
    </section>
  );
}
