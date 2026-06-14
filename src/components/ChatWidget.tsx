"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Olá! Sou o assistente da Carmel Tour. 😊 Posso ajudar com informações sobre nossos roteiros bíblicos para Israel, Turquia, Grécia e muito mais. O que você gostaria de saber?",
};

function renderInline(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function renderMarkdown(text: string) {
  const lines = text.split("\n");
  const nodes: React.ReactNode[] = [];
  let bullets: React.ReactNode[] = [];

  function flushBullets() {
    if (bullets.length === 0) return;
    nodes.push(
      <ul key={`ul-${nodes.length}`} className="mt-1.5 space-y-1">
        {bullets}
      </ul>
    );
    bullets = [];
  }

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith("- ") || trimmed.startsWith("• ")) {
      bullets.push(
        <li key={i} className="flex gap-2 items-start">
          <span className="text-amber shrink-0 mt-px">•</span>
          <span>{renderInline(trimmed.slice(2))}</span>
        </li>
      );
    } else if (trimmed === "") {
      flushBullets();
    } else {
      flushBullets();
      nodes.push(
        <p key={i} className={nodes.length > 0 ? "mt-2" : ""}>
          {renderInline(trimmed)}
        </p>
      );
    }
  });

  flushBullets();
  return nodes;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text?: string) {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    const userMsg: Message = { role: "user", content };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updated.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "Desculpe, tive um problema. Tente contato via WhatsApp: +1 (954) 589-4651",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Ops, houve um erro. Fale conosco diretamente pelo WhatsApp: +1 (954) 589-4651",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] flex flex-col bg-white shadow-2xl border border-dark/10 overflow-hidden">
          {/* Header */}
          <div className="bg-navy px-5 py-4 flex items-center justify-between">
            <div>
              <div className="font-heading text-xl text-white">
                Assistente Carmel Tour
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/60">Online agora</span>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white p-1"
              aria-label="Fechar chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cream/30">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-amber text-white rounded-br-sm"
                      : "bg-white text-dark border border-dark/10 rounded-bl-sm"
                  }`}
                >
                  {msg.role === "assistant"
                    ? renderMarkdown(msg.content)
                    : msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-cream-dark rounded-2xl rounded-bl-sm px-4 py-2.5 flex items-center gap-2">
                  <Loader2 size={14} className="animate-spin text-amber" />
                  <span className="text-xs text-dark/50">Digitando...</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick suggestions */}
          {messages.length === 1 && (
            <div className="px-4 py-2 flex flex-wrap gap-2 bg-white border-t border-cream-dark">
              {[
                "Roteiros para Israel",
                "7 Igrejas do Apocalipse",
                "Carmel Casais",
              ].map((s) => (
                <button
                  key={s}
                  onClick={() => sendMessage(s)}
                  className="text-xs bg-cream hover:bg-cream-dark text-dark/70 px-3 py-1.5 rounded-full transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-3 bg-white border-t border-cream-dark flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Faça sua pergunta..."
              disabled={loading}
              className="flex-1 bg-cream rounded-xl px-4 py-2.5 text-sm text-dark placeholder-dark/40 focus:outline-none focus:ring-2 focus:ring-amber/40 disabled:opacity-60"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              className="w-10 h-10 flex items-center justify-center bg-amber hover:bg-amber-dark disabled:opacity-40 text-white rounded-xl transition-colors shrink-0"
              aria-label="Enviar"
            >
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 bg-amber hover:bg-amber-dark text-white font-bold uppercase tracking-[0.1em] px-5 py-3.5 rounded-full shadow-lg shadow-black/15 transition-all hover:scale-105 active:scale-95"
        aria-label="Abrir assistente"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        {!open && (
          <span className="text-[10px] hidden sm:inline">Atendimento</span>
        )}
      </button>
    </>
  );
}
