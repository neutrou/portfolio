import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import { ReactNode } from "react";

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

function getProject(slug: string): Project|null {
  return projects.find(project => project.slug === slug) ?? null;
}

export default function ProjectCard(props: ProjectCardProps) {
  const project = getProject(props.slug);

  if (!project) {
    return (
      <div>
        uh oh
      </div>
    )
  }
  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="tracking-[-5%] text-xl text-text-primary font-semibold">{project.title}</h1>
      <p className="text-text-secondary text-base">{project.description}</p>
      <div className="flex flex-row gap-2.5">
        {project.tags.map((tag) => {
          return (<Tag key={tag}>{tag}</Tag>);
        })}
      </div>
    </div>
  );
}
