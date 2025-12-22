"use client";

import { colorName } from "@/types/ui";
import type { ReactNode, CSSProperties } from "react";

type WindowProps = {
  title?: string;
  titleFont?: string;
  color: colorName;
  width?: string;
  height?: string;
  children: ReactNode;
};

function Dots() {
  return (
    <section className="absolute right-15 top-45 flex gap-10">
      <div className="size-15 rounded-full bg-white" />
      <div className="size-15 rounded-full bg-white" />
      <div className="size-15 rounded-full bg-white" />
    </section>
  );
}

export function Window({
  title,
  titleFont = "",
  color,
  width = "100%",
  height = "100%",
  children,
}: WindowProps) {
  return (
    <section
      style={{ width, height }}
      className="relative flex flex-col border-texture"
    >
        <div
          style={{ "--bg": `var(--${color})` } as CSSProperties}
          className={`flex min-h-100 w-full items-center justify-center border-b-2 bg-[var(--bg)] text-[50px] ${titleFont}`}
        >
          {title}
        </div>
      <div className="size-full p-20 md:p-30 lg:p-40">{children}</div>

      <Dots />
    </section>
  );
}
