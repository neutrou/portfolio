import Image from "next/image"
import { ImageBlock } from "@/types/contentBlock";

type Props = {
  slug: string;
  contentBlock: ImageBlock;
}

export default function ProjectImage(props: Props) {
  return (
    <div className="relative w-full aspect-auto">
      <Image
        src={`/projects/${props.slug}/${props.contentBlock.src}.png`}
        alt={props.contentBlock.alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className="border-3 border-text-secondary rounded-md opacity-80"
      />
    </div>
  );
}
