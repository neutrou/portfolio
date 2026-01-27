"use client"

import { ReactNode, useEffect } from "react";

type Props= {
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
      // style={{backgroundColor: "rgba(255, 0, 0, var(--progress))" }}
      style={{backgroundImage: "radial-gradient(circle 100px at 110% var(--progress), var(--color-accent), var(--color-primary))" }}
      // style={{backgroundImage: "radial-gradient(circle 100px at center, var(--color-accent), var(--color-primary))" }}
      >
      {props.children}
    </div>
  );
}