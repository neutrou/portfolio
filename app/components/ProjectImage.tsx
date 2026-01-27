import Image from "next/image"
import { ImageBlock } from "@/types/contentBlock";

type ProjectImageProps = {
  slug: string;
  contentBlock: ImageBlock;
}

export default function ProjectImage(props: ProjectImageProps) {
  return (
    <div className="relative w-full aspect-video">
      <Image
        src={`/projects/${props.slug}/${props.contentBlock.src}.png`}
        alt={props.contentBlock.alt}
        fill
        sizes="100vw"
        className="object-contain"
        preload
      />
    </div>
  );
}
