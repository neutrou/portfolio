"use client";

import { useEffect } from "react";
import getProject from "../../../utils/project"
import Icon from "../../../components/Icon";
import Link from "next/link"
import { highlightText } from "../../../utils/project";
import ProjectImage from "@/app/projects/[slug]/components/ProjectImage";
import { Project } from "@/types/project";
import Title from "@/app/components/Title";

type Props = {
  project: Project;
}

export default function ProjectClient(props: Props) {
  return (
    <div className="flex flex-col gap-10">
      <Title title={props.project.title} />
      <div className="tracking-tightest text-3xl font-semibold text-text-secondary flex flex-col gap-3">
        {props.project.content.map((element, index) => {
          if (element.type === "text")
            return (<p key={index}>{highlightText(element.content)}</p>);
          else 
            return (<ProjectImage key={index} slug={props.project.slug} contentBlock={element} />);
        })}
      </div>
    </div>
  );
}
