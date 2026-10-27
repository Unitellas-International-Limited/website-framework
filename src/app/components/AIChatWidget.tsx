"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X, Bot, User, LoaderCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type ChatMessage = {
  role: "user" | "model";
  text: string;
};

const INITIAL_MESSAGE: ChatMessage = {
  role: "model",
  text: "Hello! 👋 Welcome to Unitellas. I'm your virtual assistant. How can I help you explore our services today?",
};

export default function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const text = input.trim();

    if (!text || isLoading) return;

    if (text.length > 2000) {
      setError("Please keep your message under 2,000 characters.");
      return;
    }

    const updatedMessages: ChatMessage[] = [
      ...messages.filter((message) => message !== INITIAL_MESSAGE),
      { role: "user", text },
    ];

    setMessages((previous) => [...previous, { role: "user", text }]);
    setInput("");
    setError("");
    setIsLoading(true);

    let assistantReply = "";
    let assistantMessageAdded = false;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: updatedMessages.slice(-8),
        }),
      });

      if (!response.ok) {
        let errorMessage = "Unable to respond right now. Please try again.";

        try {
          const data = await response.json();
          errorMessage = data.error || errorMessage;
        } catch {
          // Keep the fallback message if the response isn't JSON.
        }

        throw new Error(errorMessage);
      }

      if (!response.body) {
        throw new Error("The chat service returned no readable response.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      const addAssistantMessage = (reply: string) => {
        setMessages((previous) => {
          const lastIndex = previous.length - 1;
          const updated = [...previous];

          if (
            lastIndex >= 0 &&
            updated[lastIndex].role === "model" &&
            assistantMessageAdded
          ) {
            updated[lastIndex] = {
              ...updated[lastIndex],
              text: reply,
            };

            return updated;
          }

          assistantMessageAdded = true;

          return [...updated, { role: "model", text: reply }];
        });
      };

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        assistantReply += decoder.decode(value, { stream: true });

        if (assistantReply) {
          addAssistantMessage(assistantReply);
        }
      }

      assistantReply += decoder.decode();

      if (!assistantReply.trim()) {
        throw new Error("I couldn't generate a response. Please try again.");
      }

      if (assistantMessageAdded) {
        addAssistantMessage(assistantReply);
      } else {
        addAssistantMessage(assistantReply);
      }
    } catch (err) {
      if (assistantMessageAdded) {
        setMessages((previous) => {
          const updated = [...previous];

          if (updated[updated.length - 1]?.role === "model") {
            updated.pop();
          }

          return updated;
        });
      }

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[1000] font-sans">
      {isOpen && (
        <section
          aria-label="Unitellas AI assistant"
          className="mb-4 flex h-[min(600px,calc(100dvh-120px))] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
        >
          <header className="flex items-center justify-between bg-[#102A43] px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#15C9E4] text-[#102A43]">
                <Bot size={22} aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-sm font-semibold">Unitellas Assistant</h2>
                <p className="text-xs text-slate-300">AI-powered support</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-2 transition hover:bg-white/10"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </header>

          <div
            aria-live="polite"
            className="flex-1 space-y-4 overflow-y-auto bg-[#F5F8FA] p-4"
          >
            {messages.map((message, index) => (
              <div
                key={`${index}-${message.role}`}
                className={`flex items-start gap-2 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "model" && (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF4FC] text-[#102A43]">
                    <Bot size={15} aria-hidden="true" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] break-words rounded-2xl px-3 py-2.5 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "whitespace-pre-wrap rounded-br-sm bg-[#102A43] text-white"
                      : "rounded-bl-sm border border-slate-200 bg-white text-[#102A43]"
                  }`}
                >
                  {message.role === "user" ? (
                    message.text
                  ) : (
                    <div className="space-y-3 [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-5 [&_strong]:font-semibold [&_h1]:text-base [&_h1]:font-bold [&_h2]:text-base [&_h2]:font-bold [&_h3]:font-semibold [&_a]:text-[#0B91AA] [&_a]:underline">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {message.text.replace(/^\s*\*\s+(?=\*\*)/gm, "")}
                      </ReactMarkdown>
                    </div>
                  )}
                </div>

                {message.role === "user" && (
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#15C9E4] text-[#102A43]">
                    <User size={15} aria-hidden="true" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <LoaderCircle size={17} className="animate-spin" />
                Unitellas Assistant is typing...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            {error && (
              <p role="alert" className="mb-2 text-xs text-red-600">
                {error}
              </p>
            )}

            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <label htmlFor="unitellas-chat-input" className="sr-only">
                Type your message
              </label>

              <textarea
                id="unitellas-chat-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter" &&
                    !event.shiftKey &&
                    !event.nativeEvent.isComposing
                  ) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                placeholder="Ask us anything..."
                rows={1}
                maxLength={2000}
                disabled={isLoading}
                className="max-h-24 min-h-11 flex-1 resize-none rounded-xl border border-slate-300 px-3 py-3 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#15C9E4] focus:ring-2 focus:ring-[#15C9E4]/20 disabled:bg-slate-100"
              />

              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#15C9E4] text-[#102A43] transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </form>

            <p className="mt-2 text-center text-xs text-slate-500">
              Need a person?{" "}
              <a
                href="/contact"
                className="font-medium text-[#102A43] underline decoration-[#15C9E4] underline-offset-2 hover:text-[#087D91]"
              >
                Contact our team
              </a>
            </p>
          </div>
        </section>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => {
            setIsOpen((previous) => !previous);
            setError("");
          }}
          aria-label={isOpen ? "Close Unitellas chat" : "Open Unitellas chat"}
          aria-expanded={isOpen}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#15C9E4] text-[#102A43] shadow-lg transition duration-200 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#15C9E4]/30"
        >
          {isOpen ? (
            <X size={25} aria-hidden="true" />
          ) : (
            <MessageCircle size={26} aria-hidden="true" />
          )}
        </button>
      </div>
    </div>
  );
}
