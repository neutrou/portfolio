"use client"

import Image from 'next/image'
import Link from 'next/link'
import { colorName } from '@/types/ui'

type ButtonProps = {
  text: string;
  color: colorName;
  url: string;
};

export function Button({ text, color, url }: ButtonProps) {
  return (
    <Link
      href={url}
      className="h-15 flex flex-row border-texture"
    >
      <div className="flex flex-1 justify-center items-center text-3xl">
        {text}
      </div>
      <div
        style={{ "--bg": `var(--${color})` } as React.CSSProperties}
        className="flex justify-center items-center w-15 bg-[var(--bg)]"
      >
        <Image
          className=""
          src="/arrow.svg"
          width={50}
          height={50}
          alt="A big fat arrow"
        />
      </div>
    </Link>
  );
}
