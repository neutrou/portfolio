"use client"

import { useState } from "react";
import {SummaryButton, AboutButton, ProjectsButton, StackButton} from "./components/Button"
import { motion, easeOut } from "framer-motion"

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const initialReveal = {
    scaleX: 0,
    originX: 0.5,
    originY: 0.5,
  };
  const animateRevealA = {
    scaleX: [0, 1, 1],
    height: [0, 0, 470],
    borderColor: ["#fff", "#fff", "#fff0"],
  };
  const animateRevealB = {
    scaleX: [0, 1, 1, 1],
    height: [0, 0, 470, 470],
    borderColor: ["#fff", "#fff", "#fff", "#fff0"],
  };
  /*choose between A and B*/
  const animateReveal = animateRevealB;
  const transitionReveal = {
    duration: 1.5,
    ease: easeOut,
    delay: 0.4
  };

  return (
    <section className="flex-1 flex items-center justify-center">
      <div className={`h-470 w-432 absolute flex flex-col ${revealed ? "pointer-events-none" : "pointer-events-auto"}`}>
        <div className="bg-(--background) flex-1"/>
        <motion.div
          initial={initialReveal}
          animate={animateReveal}
          transition={transitionReveal}
          onAnimationComplete={() => setRevealed(true)}
          className="bg-transparent border-texture"
        />
        <div className="bg-(--background) flex-1"/>
      </div>
      <div className="h-470 w-432 flex flex-col gap-50">
        <SummaryButton/>
        <AboutButton/>
        <ProjectsButton/>
        <StackButton/>
      </div>
    </section>
  );
}
