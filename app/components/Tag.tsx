import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export default function Tag(props: Props) {
  return (
    <div className="size-fit bg-tag-bg text-xs text-tag-text p-1.5 rounded-[20px] tag-glow tracking-normal lg:text-sm">
      {props.children}
    </div>
  );
}