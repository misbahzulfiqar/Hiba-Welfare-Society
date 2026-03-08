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
      <div className="container flex h-10 items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <a
            href="mailto:hibawelfaresociety@gmail.com"
            className="flex items-center gap-1.5 hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            hibawelfaresociety@gmail.com
          </a>
          <a
            href="tel:03454906001"
            className="flex items-center gap-1.5 hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            0345-4906001
          </a>
          <a
            href="tel:+923216703735"
            className="flex items-center gap-1.5 hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            +923216703735
          </a>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex h-8 items-center gap-1.5 rounded border-0 bg-transparent px-2 hover:opacity-90">
                <Globe className="h-4 w-4" />
                <span>ENGLISH</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>ENGLISH</DropdownMenuItem>
              <DropdownMenuItem>اردو</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button className="flex items-center hover:opacity-90" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <Button
            size="sm"
            className="bg-[hsl(217,91%,50%)] hover:bg-[hsl(217,91%,45%)] text-white border-0"
            asChild
          >
            <a href="#ramzan">Ramzan With Hiba Welfare</a>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-0 gap-1"
              >
                Donate Now
                <ChevronDown className="h-4 w-4" />
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
