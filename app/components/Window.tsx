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

type DotProps = {
  size: boolean;
};

function Dots({ size }: DotProps) {
  if (size) {
    return (
      <section className="absolute right-3 flex items-center justify-center h-19 flex gap-2">
        <div className="size-3 rounded-full bg-white" />
        <div className="size-3 rounded-full bg-white" />
        <div className="size-3 rounded-full bg-white" />
      </section>
    );
  }
  return (
    <section className="absolute right-2 flex items-center justify-center h-8 flex gap-2">
      <div className="size-2 rounded-full bg-white" />
      <div className="size-2 rounded-full bg-white" />
      <div className="size-2 rounded-full bg-white" />
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
  const size = title !== undefined;

  return (
    <section
      style={{ width, height }}
      className="relative flex flex-col border-texture"
    >
        <div
          style={{"--bg": `var(--${color})`} as CSSProperties}
          className={`flex w-full items-center justify-center border-b-2 bg-[var(--bg)] text-4xl py-4 ${titleFont}`}
        >
          {title}
        </div>
      <div className="size-full p-5">{children}</div>

      <Dots size={title !== undefined}/>
    </section>
  );
}
