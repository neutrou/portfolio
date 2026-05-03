import React, { useRef } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './CarouselArrows'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './carousel.module.css'
import { ImageBlock } from '@/types/contentBlock'
import ProjectImage from './ProjectImage'
import Autoplay from 'embla-carousel-autoplay'
import { useAutoplay } from './CarouselAutoplay'
import { useAutoplayProgress } from './CarouselAutoplayProgress'

type PropType = {
  slug: string
  slides: ImageBlock[]
  options?: EmblaOptionsType
}

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props;
  const progressNode = useRef<HTMLDivElement>(null)
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 3000 })]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } = useAutoplay(emblaApi);
  const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode);

  return (
    <div className={styles.carousel}>
      <section className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((element, index) => (
              <div className="embla__slide" key={index}>
                <div className="flex items-center justify-center h-[70vh]">
                  <ProjectImage slug={props.slug} contentBlock={element} />
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
  )
}

export default EmblaCarousel
