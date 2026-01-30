"use client"

import { useRouter } from "next/navigation";
import Icon from "./Icon"

type Props = {
  title: string;
}

export default function Title(props: Props) {
  const router = useRouter();

  return (
    <div className="flex flex-row justify-between items-center">
      <h1 className="tracking-tightest text-[42px] font-bold text-text-primary">{props.title}</h1>
      <div onClick={() => {router.back()}}>
        <Icon url="arrow" height={45} width={45}/>
      </div>
    </div>
  )
}
