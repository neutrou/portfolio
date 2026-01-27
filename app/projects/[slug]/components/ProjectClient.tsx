"use client";

import { useEffect } from "react";
import getProject from "../../../utils/project"
import Icon from "../../../components/Icon";
import Link from "next/link"
import { highlightText } from "../../../utils/project";
import ProjectImage from "@/app/projects/[slug]/components/ProjectImage";
import { Project } from "@/types/project";

type Props = {
  project: Project;
}

export default function ProjectClient(props: Props) {
  return (
    <div
      className="w-full h-fit page-padding">
      <div className="flex flex-col gap-10">
        <div className="flex-1 flex flex-row justify-between items-center">
          <h1 className="tracking-[-10%] text-[42px] font-bold text-text-primary">{props.project.title}</h1>
          <Link href="/">
            <Icon url="arrow" height={45} width={45}/>
          </Link>
        </div>
        <div className="tracking-[-10%] text-3xl font-semibold text-text-secondary flex flex-col gap-3">
          {props.project.content.map((element, index) => {
            if (element.type === "text")
              return (<p key={index}>{highlightText(element.content)}</p>);
            else 
              return (<ProjectImage key={index} slug={props.project.slug} contentBlock={element} />);
          })}
        </div>
      </div>
    </div>
  );
}
