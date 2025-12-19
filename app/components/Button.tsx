import Image from 'next/image'

type colorName = "red" | "blue" | "orange" | "purple";
type ButtonProps = {
  text: string;
  color: colorName;
};

export default function Button({ text, color }: ButtonProps) {
  return (
    <div className="h-80 flex flex-row border-solid border-white border-2">
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
    </div>
  );
}