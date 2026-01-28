"use client"

import { ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode
}

export default function ProjectsLayout(props: Props) {
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      
      document.documentElement.style.setProperty(
        "--progress",
        `${progress}%`
      )
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className="w-full h-fit page-padding"
      style={{backgroundImage: "radial-gradient(circle 100px at 110% var(--progress), var(--color-animation-glow), var(--color-primary))" }}
    >
      {props.children}
    </div>
  );
}
