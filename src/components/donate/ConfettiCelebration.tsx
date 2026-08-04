import { useEffect, useRef } from "react"

const COLORS = [
  "#ef4444",
  "#f59e0b",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f97316",
  "#14b8a6",
]

type Piece = {
  x: number
  y: number
  w: number
  h: number
  color: string
  rot: number
  rotSpeed: number
  vx: number
  vy: number
  sway: number
  swaySpeed: number
}

/** Continuous colorful paper rain. Starts after `delayMs` when active. */
export function ConfettiCelebration({
  active,
  delayMs = 1000,
}: {
  active: boolean
  delayMs?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (!active) return

    let cancelled = false
    let raf = 0
    let rainInterval = 0
    let pieces: Piece[] = []
    let resizeHandler: (() => void) | null = null

    const startTimer = window.setTimeout(() => {
      if (cancelled) return
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      resizeHandler = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      resizeHandler()
      window.addEventListener("resize", resizeHandler)

      const spawn = (count: number, fromTop = true) => {
        for (let i = 0; i < count; i++) {
          pieces.push({
            x: Math.random() * canvas.width,
            y: fromTop ? -20 - Math.random() * 80 : Math.random() * canvas.height * 0.25,
            w: 6 + Math.random() * 8,
            h: 8 + Math.random() * 12,
            color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
            rot: Math.random() * Math.PI * 2,
            rotSpeed: (Math.random() - 0.5) * 0.18,
            vx: (Math.random() - 0.5) * 2.2,
            vy: 1.5 + Math.random() * 3.5,
            sway: Math.random() * Math.PI * 2,
            swaySpeed: 0.02 + Math.random() * 0.04,
          })
        }
      }

      spawn(80, false)
      rainInterval = window.setInterval(() => {
        if (!cancelled) spawn(12, true)
      }, 280)

      const tick = () => {
        if (cancelled) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        pieces = pieces.filter((p) => p.y < canvas.height + 40)
        for (const p of pieces) {
          p.sway += p.swaySpeed
          p.x += p.vx + Math.sin(p.sway) * 1.2
          p.y += p.vy
          p.rot += p.rotSpeed
          ctx.save()
          ctx.translate(p.x, p.y)
          ctx.rotate(p.rot)
          ctx.fillStyle = p.color
          ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
          ctx.restore()
        }
        raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, delayMs)

    return () => {
      cancelled = true
      window.clearTimeout(startTimer)
      window.clearInterval(rainInterval)
      cancelAnimationFrame(raf)
      if (resizeHandler) window.removeEventListener("resize", resizeHandler)
    }
  }, [active, delayMs])

  if (!active) return null

  return <canvas ref={canvasRef} aria-hidden className="pointer-events-none fixed inset-0 z-50" />
}
