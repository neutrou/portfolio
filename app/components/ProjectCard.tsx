import { ReactNode } from "react";
import Link from "next/link"
import getProject from "../utils/project";
import { notFound } from "next/navigation";

type TagProps = {
  children: ReactNode;
}

type ProjectCardProps = {
  slug: string;
}

function Tag(props: TagProps) {
  return (
    <div className="size-fit bg-tag-bg text-xs text-tag-text p-1.5 rounded-[20px] tag-glow">
      {props.children}
    </div>
  );
}

export default function ProjectCard(props: ProjectCardProps) {
  const project = getProject(props.slug);

  if (!project) {
    return <div>
      project not found lol
    </div>
  }
  return (
    <Link href={`projects/${project.slug}`} className="flex flex-col gap-2.5">
      <h1 className="project-title">{project.title}</h1>
      <p className="text-text-secondary text-base">{project.description}</p>
      <div className="flex flex-row gap-2.5 flex-wrap">
        {project.tags.map((tag) => {
          return (<Tag key={tag}>{tag}</Tag>);
        })}
      </div>
    </Link>
  );
}
