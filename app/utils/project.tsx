import { ReactNode } from 'react';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import { KEYWORDS } from '@/data/keywords';

/**
 * Highlights keywords in text by wrapping them in span elements
 * @param text - The text to highlight
 * @returns JSX array with highlighted keywords
 */
export function highlightText(text: string): ReactNode[] {
  const regex = new RegExp(`\\b(${KEYWORDS.join('|')})\\b`, 'g');

  return text.split(regex).map((part, index) =>
    KEYWORDS.includes(part) ? (
      <span key={`${part}-${index}`} className="text-text-primary">
        {part}
      </span>
    ) : (
      part
    )
  );
}

/**
 * Retrieves a project by its slug
 * @param slug - The project slug
 * @returns The project object or null if not found
 */
export default function getProject(slug: string): Project | null {
  return projects.find((project) => project.slug === slug) ?? null;
}