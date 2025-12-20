"use client"

import Image from 'next/image'
import Link from 'next/link'
import { colorName } from '@/types/ui'

type ButtonProps = {
  text: string;
  color: colorName;
  url: string;
};

export default function Button({ text, color, url }: ButtonProps) {
  return (
    <Link
      href={url}
      className="h-80 flex flex-row border-texture"
    >
      <div className="flex flex-1 justify-center items-center text-[30px]">
        {text}
      </div>
      <div
        style={{ "--bg": `var(--${color})` } as React.CSSProperties}
        className="w-80 bg-[var(--bg)]"
      >
        <Image
          className="m-10"
          src="/arrow.svg"
          width={60}
          height={60}
          alt="A big fat arrow"
        />
      </div>
    </Link>
  );
}

export function SummaryButton() {
	return (<Button text="Summary" color="purple" url="/summary"/>)
};
export function AboutButton() {
	return (<Button text="About me" color="red" url="/about"/>)
};
export function ProjectsButton() {
	return (<Button text="Projects" color="blue" url="/projects"/>)
};
export function StackButton() {
	return (<Button text="Tech Stack" color="orange" url="/stack"/>)
};
