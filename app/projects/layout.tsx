import { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function ProjectsLayout(props: Props) {
  return (
    <div className="w-full h-fit page-padding">
      {props.children}
    </div>
  );
}
