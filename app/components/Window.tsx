"use client"

import { colorName } from '@/types/ui'

type MainWindowProps = {
  title: string;
  color: colorName;
  children: React.ReactNode;
};

type SimpleWindowProps = {
	color: colorName;
	width: string;
	height: string;
	children: React.ReactNode;
}

type WindowProps = {
  title: string;
  titleFont: string;
  color: colorName;
  width: string;
  height: string;
  children: React.ReactNode;
};

function Dot() {
  return (
    <section
      className='absolute flex flex-row gap-20 right-30 top-40'
    >
      <div className='size-20 bg-white rounded-full'/>
      <div className='size-20 bg-white rounded-full'/>
      <div className='size-20 bg-white rounded-full'/>
    </section>
  );
}

export function Window(props: WindowProps) {
  return (
    <section
      style={{ width: props.width, height: props.height }}
      className={`relative flex flex-col border-texture`}>
      <div
        style={{ "--bg": `var(--${props.color})` } as React.CSSProperties}
        className={`w-full min-h-100 bg-[var(--bg)] flex items-center justify-center text-[50px] ${props.titleFont} border-b-2`}
      >
        {props.title}
      </div>
      <div className={'size-full p-40'}>
        {props.children}
      </div>
      <Dot/>
    </section>
  );
}

export function SimpleWindow({ color, width, height, children }: SimpleWindowProps) {
  return (
    <Window
      title=""
      titleFont=""
      color={color}
      width={width}
      height={height}
    >
      {children}
    </Window>
  );
}

export function MainWindow({ title, color, children }: MainWindowProps) {
  return (
    <Window
      title={title}
      titleFont='font-extrabold'
      color={color}
      width="100%"
      height="100%"
    >
      {children}
    </Window>
  );
}
