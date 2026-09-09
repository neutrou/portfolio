'use client';

import { useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ImageBlock } from '@/types/contentBlock';
import ProjectImage from './ProjectImage';
import { useAutoplay } from './CarouselAutoplay';
import { useAutoplayProgress } from './CarouselAutoplayProgress';
import styles from './carousel.module.css';

interface EmblaCarouselProps {
  slug: string;
  slides: ImageBlock[];
  options?: EmblaOptionsType;
}

const AUTOPLAY_DELAY = 3000;
const SLIDE_HEIGHT = 'h-[70vh]';

export default function EmblaCarousel({
  slug,
  slides,
  options,
}: EmblaCarouselProps) {
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: AUTOPLAY_DELAY }),
  ]);

  const { autoplayIsPlaying, onAutoplayButtonClick } = useAutoplay(emblaApi);
  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <div className={styles.carousel}>
      <section
        className="embla"
        aria-label="Project images carousel"
        role="region"
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((image, index) => (
              <div
                className="embla__slide"
                key={index}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${index + 1} of ${slides.length}`}
              >
                <div className={`flex items-center justify-center ${SLIDE_HEIGHT}`}>
                  <ProjectImage slug={slug} contentBlock={image} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="embla__controls">
          <div className="embla__progress">
            <div className="embla__progress__bar" ref={progressNode} />
          </div>
        </div>
      </section>
    </div>
  );
}
