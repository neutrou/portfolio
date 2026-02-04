import Link from "next/link"
import getProject from "../utils/project";
import Tag from "./Tag";

type ProjectCardProps = {
  slug: string;
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
