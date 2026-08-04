import { ChevronUp } from "lucide-react"
import { WhatsAppIcon } from "@/components/svgs/WhatsAppIcon"

export function WhatsAppChatButton() {
  const whatsappNumber = "923254112562"
  const defaultMessage = "Assalamu Alaikum! I need help."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-20 right-4 z-[60] flex flex-col items-center gap-2 sm:bottom-24">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] p-2 shadow-lg animate-float-medium sm:h-16 sm:w-16"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="h-full w-full text-white" />
      </a>
      <button
        type="button"
        onClick={scrollToTop}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-support-blue text-white shadow-md hover:opacity-90 sm:h-9 sm:w-9"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ChevronUp className="h-4 w-4" />
      </button>
    </div>
  )
}

