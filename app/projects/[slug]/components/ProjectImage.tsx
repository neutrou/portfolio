import Image from "next/image"
import { ImageBlock } from "@/types/contentBlock";

type Props = {
  slug: string;
  contentBlock: ImageBlock;
}

export default function ProjectImage(props: Props) {
  return (
    <div className="relative w-full aspect-video">
      <Image
        src={`/projects/${props.slug}/${props.contentBlock.src}.png`}
        alt={props.contentBlock.alt}
        sizes="100vw"
        className="object-cover border-2 border-text-secondary rounded-md overflow-hidden opacity-80"
        preload
        fill
      />
    </div>
  );
}
