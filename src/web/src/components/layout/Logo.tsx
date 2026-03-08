import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className, size = 52 }: LogoProps) {
  return (
    <img
      src="/images/LOGO.png"
      alt="Hiba Welfare Society"
      width="100%"
      height="100%"
      className={cn("object-contain", className)}
    />
  )
}
