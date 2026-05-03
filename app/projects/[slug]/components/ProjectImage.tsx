import Image from "next/image"
import { ImageBlock } from "@/types/contentBlock";

type Props = {
  slug: string;
  contentBlock: ImageBlock;
}

export default function ProjectImage(props: Props) {
  return (
    <Image
      src={`/projects/${props.slug}/${props.contentBlock.src}.png`}
      alt={props.contentBlock.alt}
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: 'auto', height: 'auto' }}
      className="max-h-full max-w-full object-contain border-3 border-text-secondary rounded-md opacity-80"
    />
  );
}
