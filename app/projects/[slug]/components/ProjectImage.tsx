import Image from "next/image"
import { ImageBlock } from "@/types/contentBlock";

type Props = {
  slug: string;
  contentBlock: ImageBlock;
}

export default function ProjectImage(props: Props) {
  return (
    <div className="relative w-full aspect-video border-2 border-text-secondary rounded-md overflow-hidden">
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
