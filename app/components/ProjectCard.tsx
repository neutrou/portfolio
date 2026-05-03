import Link from 'next/link';
import getProject from '../utils/project';
import Tag from './Tag';

interface ProjectCardProps {
  slug: string;
}

const ERROR_MESSAGE = 'Project not found';

export default function ProjectCard({ slug }: ProjectCardProps) {
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="text-text-secondary text-base md:text-lg">
        {ERROR_MESSAGE}
      </div>
    );
  }

  return (
    <Link
      href={`projects/${project.slug}`}
      className="group flex flex-col gap-2.5 hover:opacity-80 transition-opacity"
    >
      <h2 className="project-title text-text-primary group-hover:text-accent transition-colors">
        {project.title}
      </h2>
      <p className="text-text-secondary text-base md:text-lg">
        {project.description}
      </p>
      <div className="flex flex-row gap-2.5 flex-wrap">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
