// components/MouseGlow.tsx
"use client"

import { useIsLg } from "../hooks/useIsLg"
import useMousePosition from "../hooks/useMousePos"

export default function MouseGlow() {
  const { x, y } = useMousePosition()
  const isLg = useIsLg() 

  return (
    <div
      className="pointer-events-none fixed z-9999"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className={`w-64 h-64 rounded-full ${isLg ? "bg-accent/30" : "transparent"} blur-3xl`} />
    </div>
  )
}
