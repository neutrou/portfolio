"use client"

import { useRouter } from "next/navigation";
import Icon from "./Icon"
import { useIsLg } from "../utils/useIsLg";

type Props = {
  title: string;
}

export default function Title(props: Props) {
  const router = useRouter();
  const lg = useIsLg();
  const size = lg ? 60 : 45; 

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <h1 className="tracking-tightest text-[42px] font-bold text-text-primary lg:text-6xl">{props.title}</h1>
      <div onClick={() => {router.back()}}>
        <Icon url="arrow" height={size} width={size}/>
      </div>
    </div>
  )
}
