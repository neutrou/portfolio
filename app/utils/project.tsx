import { projects } from "@/data/projects";
import { Project } from "@/types/project";
import { KEYWORDS } from "@/data/keywords";

export function highlightText(text: string) {
  const regex = new RegExp(`\\b(${KEYWORDS.join("|")})\\b`, "g");

  return text.split(regex).map((part, i) =>
    KEYWORDS.includes(part) ? (
      <span key={i} className="text-text-primary">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function getProject(slug: string): Project|null {
  return projects.find(project => project.slug === slug) ?? null;
}