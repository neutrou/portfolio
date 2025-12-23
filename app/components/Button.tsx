"use client"

import Image from 'next/image'
import Link from 'next/link'
import { colorName } from '@/types/ui'

type ButtonProps = {
  text: string;
  color: colorName;
  url: string;
  size?: "small" | "large";
};

export function Button({ text, color, url, size = "large" }: ButtonProps) {
  const sizeMap = {
    large: { height: "h-15", textSize: "text-3xl", width: "w-15", arrowSize: 50 },
    small: { height: "h-10", textSize: "text-xl", width: "w-10", arrowSize: 30 },
  };
  
  const { height, textSize, width, arrowSize } = sizeMap[size];

  return (
    <Link
      href={url}
      className={`flex flex-row border-texture ${height} ${textSize}`}
    >
      <div className="flex flex-1 justify-center items-center">
        {text}
      </div>
      <div
        style={{ "--bg": `var(--${color})` } as React.CSSProperties}
        className={`flex justify-center items-center bg-[var(--bg)] ${width}`}
      >
        <Image
          className=""
          src="/arrow.svg"
          width={arrowSize}
          height={arrowSize}
          alt="A big fat arrow"
        />
      </div>
    </Link>
  );
}
