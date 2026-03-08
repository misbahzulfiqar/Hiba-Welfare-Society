import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: number
}

export function Logo({ className, size = 32 }: LogoProps) {
  return (
    <img
      src="/images/LOGO.png"
      alt="Hiba Welfare Society"
      width={size}
      height={size}
      className={cn("object-contain", className)}
    />
  )
}
