import { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <div className={`size-fit bg-tag-bg text-xs text-tag-text p-1.5 rounded-full tag-glow tracking-normal lg:text-sm ${className ?? ''}`}>
      {children}
    </div>
  );
}