import { Send, X } from "lucide-react"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

type ChatMessage = {
  id: string
  role: "bot" | "user"
  text: string
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      className="h-[20px] w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.04 6.5c-5.3 0-9.6 4.2-9.6 9.4 0 1.6.4 3.2 1.2 4.6l-1 4.2 4.3-1.1c1.4.7 2.9 1.1 4.5 1.1 5.3 0 9.6-4.2 9.6-9.4 0-5.2-4.3-9.4-9.6-9.4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12.2 13.1c.2-.4.6-.4.8-.4.2 0 .4 0 .6.3l1.1 1.4c.2.3.2.6 0 .9l-.5.6c-.1.2-.2.4 0 .6.4.8 1.1 1.6 2 2.2.2.1.4.1.6 0l.7-.4c.3-.1.6-.1.9.1l1.4 1.1c.3.2.3.5.2.7-.2.6-.8 1.3-1.3 1.4-.5.1-1.4.2-2.4-.2-1.9-.8-3.4-2.4-4.3-4.2-.4-.9-.4-1.8-.1-2.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function WhatsAppChatButton() {
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState("")

  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        id: "bot-1",
        role: "bot",
        text: "Assalamu Alaikum! How can we help you today?",
      },
      {
        id: "bot-2",
        role: "bot",
        text: "You can ask about donations, events, or contact details.",
      },
    ],
    []
  )

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)

  const closeChat = () => setChatOpen(false)

  const sendMessage = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg: ChatMessage = { id: String(Date.now()), role: "user", text: trimmed }
    setMessages((prev) => [...prev, userMsg])
    setInput("")

    // Local demo reply (no backend). Replace later with a real WhatsApp integration.
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          role: "bot",
          text: "Thanks! We’ll get back to you shortly. You can also use the contact links in the page footer.",
        },
      ])
    }, 600)
  }

  return (
    <>
      <div className="fixed bottom-24 right-4 z-[60] sm:bottom-28">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setChatOpen(true)}
          className="h-24 w-24 rounded-full bg-transparent p-0 text-[#25D366] shadow-none hover:bg-transparent sm:h-28 sm:w-28"
          aria-label="Open WhatsApp chat"
        >
          <WhatsAppIcon />
        </Button>
      </div>

      {chatOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/40 p-3 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Chat modal"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeChat()
          }}
        >
          <div className="w-full max-w-sm overflow-hidden rounded-lg border bg-background shadow-xl">
            <div className="flex items-center justify-between gap-3 border-b bg-[hsl(214.5,40%,88%)] px-3 py-2">
              <span className="text-blue-deep font-semibold text-sm">WhatsApp Chat</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeChat}
                className="h-8 w-8 rounded-full text-blue-deep hover:bg-blue-deep/10"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="max-h-[55vh] overflow-y-auto px-3 py-3">
              <div className="space-y-2">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
                  >
                    <div
                      className={
                        m.role === "user"
                          ? "max-w-[78%] rounded-lg bg-blue-deep px-3 py-2 text-white text-sm"
                          : "max-w-[78%] rounded-lg bg-muted px-3 py-2 text-foreground text-sm"
                      }
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t p-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage()
                  }}
                  placeholder="Type your message..."
                  className="h-10 flex-1 rounded-md border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-blue-deep/20"
                />
                <Button
                  onClick={sendMessage}
                  size="icon"
                  className="h-10 w-10 rounded-md bg-blue-deep text-white hover:bg-blue-deep/90"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                This is a local demo chat (no backend). You can connect it to WhatsApp/your support inbox later.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

