import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/images/LOGO.png"
      alt="Hiba Welfare Society"
      className={cn("object-contain", className)}
    />
  )
}
