import Image from 'next/image'

type IconProps = {
	url: string;
}

export default function Icon(props: IconProps) {
  return (
    <Image
      src={`/${props.url}.svg`}
      width={35}
      height={35}
      alt={`${props.url} icon`}
    />
  )
}