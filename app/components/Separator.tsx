interface SeparatorProps {
  className?: string;
}

export default function Separator({ className }: SeparatorProps) {
  return (
    <hr className={`h-0.5 w-full bg-[radial-gradient(50%_50%_at_50%_50%,#F7F5FB_0%,rgba(115,115,115,0)_100%)] border-0 ${className ?? ''}`} />
  );
}
