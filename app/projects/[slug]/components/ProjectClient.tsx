'use client';

import { useMemo } from 'react';
import { highlightText } from '../../../utils/project';
import ProjectImage from './ProjectImage';
import { Project } from '@/types/project';
import Title from '@/app/components/Title';
import { ProjectContentBlock, ImageBlock, TextBlock } from '@/types/contentBlock';
import EmblaCarousel from './Carousel';
import { useIsLg } from '@/app/hooks/useIsLg';

interface ProjectClientProps {
  project: Project;
}

/**
 * Filters content blocks to get only image blocks
 */
function getAllImages(blocks: ProjectContentBlock[]): ImageBlock[] {
  return blocks.filter((block): block is ImageBlock => block.type === 'image');
}

/**
 * Filters content blocks to get only text blocks
 */
function getAllTexts(blocks: ProjectContentBlock[]): TextBlock[] {
  return blocks.filter((block): block is TextBlock => block.type === 'text');
}

export default function ProjectClient({ project }: ProjectClientProps) {
  const texts = useMemo(() => getAllTexts(project.content), [project.content]);
  const images = useMemo(
    () => getAllImages(project.content),
    [project.content]
  );
  const lg = useIsLg();
  const hasImages = images.length > 0;

  return (
    <div className="lg:min-h-[90vh] lg:flex lg:flex-row">
      {/* TEXT SECTION */}
      <div className="w-full flex flex-col gap-10 items-center lg:w-[50%] lg:max-w-150">
        <div className="w-full lg:sticky lg:top-10">
          <Title title={project.title} />
        </div>

        {!lg ? (
          // MOBILE: Show all content blocks
          <article className="tracking-tightest text-3xl font-semibold text-text-secondary flex flex-col gap-3">
            {project.content.map((element, index) => (
              <div key={index}>
                {element.type === 'text' ? (
                  <p>{highlightText(element.content)}</p>
                ) : (
                  <ProjectImage
                    slug={project.slug}
                    contentBlock={element}
                  />
                )}
              </div>
            ))}
          </article>
        ) : (
          // DESKTOP: Show only text blocks
          <article className="h-full tracking-tightest text-3xl font-semibold text-text-secondary flex flex-col gap-10 justify-center">
            {texts.map((element, index) => (
              <p key={index}>{highlightText(element.content)}</p>
            ))}
          </article>
        )}
      </div>

      {/* IMAGE CAROUSEL SECTION */}
      {lg && hasImages && (
        <aside className="flex flex-col items-center justify-center gap-10 w-full min-h-full">
          <EmblaCarousel
            slug={project.slug}
            slides={images}
            options={{ loop: true }}
          />
        </aside>
      )}
    </div>
  );
}
