import { Send, X } from "lucide-react"
import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { WhatsAppIcon } from "@/components/svgs/WhatsAppIcon"

type ChatMessage = {
  id: string
  role: "user" | "admin"
  text: string
  createdAt: number
}

export function WhatsAppChatButton() {
  const [chatOpen, setChatOpen] = useState(false)
  const [input, setInput] = useState("")

  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        id: "bot-1",
        role: "admin",
        text: "Assalamu Alaikum! How can we help you today?",
        createdAt: Date.now(),
      },
      {
        id: "bot-2",
        role: "admin",
        text: "You can ask about donations, events, or contact details.",
        createdAt: Date.now() + 1,
      },
    ],
    []
  )

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)

  const closeChat = () => setChatOpen(false)

  const sendMessage = () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      role: "user",
      text: trimmed,
      createdAt: Date.now(),
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")

    // Local demo reply (no backend). Replace later with a real WhatsApp integration.
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now() + 1),
          role: "admin",
          text: "Thanks! We’ll get back to you shortly. You can also use the contact links in the page footer.",
          createdAt: Date.now() + 1,
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
          className="h-24 w-24 rounded-full bg-transparent p-0 shadow-none hover:bg-transparent animate-float-medium sm:h-28 sm:w-28"
          aria-label="Open WhatsApp chat"
        >
          <WhatsAppIcon className="h-full w-full text-[#25D366]" />
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
            <div className="flex items-center justify-between gap-3 border-b bg-[hsl(120,35%,88%)] px-3 py-2">
              <span className="text-green-deep font-semibold text-sm">WhatsApp Chat</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeChat}
                className="h-8 w-8 rounded-full text-green-deep hover:bg-green-deep/10"
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
                          ? "max-w-[78%] rounded-lg bg-green-deep px-3 py-2 text-white text-sm"
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
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage()
                  }}
                  placeholder="Type your message..."
                  className="h-10 flex-1 rounded-md border bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-green-deep/20"
                />
                <Button
                  onClick={sendMessage}
                  size="icon"
                  className="h-10 w-10 rounded-md bg-green-deep text-white hover:bg-green-deep/90"
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

