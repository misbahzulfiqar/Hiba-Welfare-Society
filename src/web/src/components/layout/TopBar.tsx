import { Mail, Phone, Globe, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/svgs/WhatsAppIcon"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

export function TopBar() {
  const [cartOpen, setCartOpen] = useState(false)
  const cartItems = 0

  return (
    <div className="relative bg-transparent text-foreground after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:h-px after:left-[170px] sm:after:left-[220px] md:after:left-[260px] after:bg-black/10">
      <div className="w-[95.5%] mx-auto flex h-11 flex-nowrap items-center justify-end gap-3">
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="mailto:hibawelfaresociety@gmail.com"
            className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-gray-800"
            title="hibawelfaresociety@gmail.com"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="hidden truncate max-w-[200px] sm:inline md:max-w-none">
              hibawelfaresociety@gmail.com
            </span>
          </a>
          <a
            href="tel:03454906001"
            className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-gray-800"
            title="0345-4906001"
          >
            <WhatsAppIcon className="h-4 w-4 shrink-0 text-green-600" />
            <span className="hidden sm:inline">0345-4906001</span>
          </a>
          <a
            href="tel:+923216703735"
            className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-gray-800"
            title="+923216703735"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="hidden md:inline">+923216703735</span>
          </a>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4 shrink-0 text-black" />
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex h-7 items-center gap-1 rounded-full border border-gray-300 bg-white px-2.5 text-xs text-black hover:bg-gray-50 hover:text-black"
                >
                  <span className="hidden sm:inline">ENGLISH</span>
                  <ChevronDown className="h-4 w-4 shrink-0" />
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="text-xs">ENGLISH</DropdownMenuItem>
              <DropdownMenuItem className="text-xs">اردو</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-1 text-black"
                aria-label="Cart"
              >
                <ShoppingCart className="h-5 w-5 shrink-0" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-md p-0">
              <div className="relative p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">
                      Your Donation Cart
                    </h2>
                    <div className="mt-1">
                      <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">
                        {cartItems} Items
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-muted-foreground"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 7.5C4 6.67157 4.67157 6 5.5 6H18.5C19.3284 6 20 6.67157 20 7.5V17.5C20 18.3284 19.3284 19 18.5 19H5.5C4.67157 19 4 18.3284 4 17.5V7.5Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M7 10H17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12 13L10 15L14 15L12 13Z"
                        fill="currentColor"
                        opacity="0.3"
                      />
                    </svg>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    Your cart is empty
                  </h3>
                  <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                    Start making a difference by exploring our causes and donation
                    packages
                  </p>

                  <Button
                    className="mt-6 h-11 rounded-full bg-[#4CAF50] px-7 text-white hover:bg-[#43A047]"
                    onClick={() => setCartOpen(false)}
                  >
                    Explore Causes
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>                              
          <Button
            size="sm"
            className="h-7 rounded-full border-0 bg-green-deep px-2.5 text-xs text-white hover:bg-blue-deep/90"
            asChild
          >
            <a href="/donor-login">Donor Login</a>
          </Button>
          <Button
            size="sm"
            className="h-7 rounded-full border-0 bg-green-deep px-2.5 text-xs text-white hover:bg-blue-deep/90"
            asChild
          >
            <a href="/donor-signup">Donor Sign Up</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
