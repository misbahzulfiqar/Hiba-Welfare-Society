import { Mail, Phone, Globe, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container flex h-10 flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 md:flex-nowrap">
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <a
            href="mailto:hibawelfaresociety@gmail.com"
            className="flex items-center gap-1.5 hover:opacity-90 text-xs sm:text-sm"
            title="hibawelfaresociety@gmail.com"
          >
            <Mail className="h-4 w-4 shrink-0" />
            <span className="hidden truncate max-w-[200px] sm:inline md:max-w-none">
              hibawelfaresociety@gmail.com
            </span>
          </a>
          <a
            href="tel:03454906001"
            className="flex items-center gap-1.5 hover:opacity-90 text-xs sm:text-sm"
            title="0345-4906001"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="hidden sm:inline">0345-4906001</span>
          </a>
          <a
            href="tel:+923216703735"
            className="flex items-center gap-1.5 hover:opacity-90 text-xs sm:text-sm"
            title="+923216703735"
          >
            <Phone className="h-4 w-4 shrink-0" />
            <span className="hidden md:inline">+923216703735</span>
          </a>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex h-8 items-center gap-1 rounded border-0 bg-transparent px-2 hover:opacity-90 text-xs sm:text-sm">
                <Globe className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">ENGLISH</span>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>ENGLISH</DropdownMenuItem>
              <DropdownMenuItem>اردو</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="flex items-center hover:opacity-90 p-1" aria-label="Cart">
            <ShoppingCart className="h-5 w-5 shrink-0" />
          </button>
          <Button
            size="sm"
            className="bg-[hsl(217,91%,50%)] hover:bg-[hsl(217,91%,45%)] text-white border-0 text-xs sm:text-sm px-2 sm:px-3"
            asChild
          >
            <a href="#ramzan">
              <span className="hidden sm:inline">Ramzan With Hiba Welfare</span>
              <span className="sm:hidden">Ramzan</span>
            </a>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 gap-1 text-xs sm:text-sm px-2 sm:px-3"
              >
                Donate Now
                <ChevronDown className="h-4 w-4 shrink-0" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>General Donation</DropdownMenuItem>
              <DropdownMenuItem>Ramzan Appeal</DropdownMenuItem>
              <DropdownMenuItem>Medical</DropdownMenuItem>
              <DropdownMenuItem>Education</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
