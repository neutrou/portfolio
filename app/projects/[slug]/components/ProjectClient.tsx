"use client";

import { highlightText } from "../../../utils/project";
import ProjectImage from "@/app/projects/[slug]/components/ProjectImage";
import { Project } from "@/types/project";
import Title from "@/app/components/Title";
import { ProjectContentBlock, ImageBlock, TextBlock } from "@/types/contentBlock";
import { useEffect, useState } from "react";
import EmblaCarousel from "./Carousel";

function useIsLg() {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const update = () => setIsLg(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isLg;
}

type Props = {
  project: Project;
}

function getAllImages(blocks: ProjectContentBlock[]): ImageBlock[]|null {
  return blocks.filter(
    (block): block is ImageBlock => block.type === "image"
  );
}

function getAllTexts(blocks: ProjectContentBlock[]): TextBlock[]|null {
  return blocks.filter(
    (block): block is TextBlock => block.type === "text"
  );
}

const SLIDE_COUNT = 17
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

export default function ProjectClient(props: Props) {
  const texts = getAllTexts(props.project.content);
  const images = getAllImages(props.project.content);
  const lg = useIsLg();

  return (
    <div className="lg:min-h-[90vh] lg:flex lg:flex-row">
      <div className="w-full flex flex-col gap-10 items-center lg:w-[50%] lg:max-w-150">
        <div className="w-full lg:sticky lg:top-10">
          <Title title={props.project.title} />
        </div>
        {(!lg &&
          <div className="tracking-tightest text-3xl font-semibold text-text-secondary flex flex-col gap-3">
            {props.project.content.map((element, index) => {
              if (element.type === "text")
                return (<p key={index}>{highlightText(element.content)}</p>);
              else 
                return (<ProjectImage key={index} slug={props.project.slug} contentBlock={element} />);
            })}
          </div>) ||
          (lg &&
            <div className="tracking-tightest text-3xl font-semibold text-text-secondary flex flex-col gap-10">
              {texts && texts.map((element, index) => {
                return (<p key={index}>{highlightText(element.content)}</p>);
              })}
            </div>
          )
        }
      </div>
      {lg && images &&
        <div className="flex flex-col items-center justify-center gap-10 w-full min-h-full">
          <EmblaCarousel slug={props.project.slug} slides={images} options={{loop: true}}/>
        </div>
      }
    </div>
  );
}
