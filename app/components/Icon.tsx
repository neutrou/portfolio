import Image from 'next/image';

interface IconProps {
  width: number;
  height: number;
  url: string;
  alt?: string;
  className?: string;
}

export default function Icon({ width, height, url, alt, className }: IconProps) {
  return (
    <Image
      src={`/${url}.svg`}
      width={width}
      height={height}
      alt={alt ?? `${url} icon`}
      className={className}
      priority={false}
    />
  );
}