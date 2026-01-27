import Image from 'next/image'

type IconProps = {
  width: number;
  height: number;
  url: string;
}

export default function Icon(props: IconProps) {
  return (
    <Image
      src={`/${props.url}.svg`}
      width={props.width}
      height={props.height}
      alt={`${props.url} icon`}
    />
  )
}