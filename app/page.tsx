"use client"

import Button from "./components/Button"

export default function Home() {
  return (
    <div
      className="h-470 w-432 flex flex-col gap-50 overflow-hidden"
    >
      <Button text="Summary" color="purple"/>
      <Button text="About me" color="red"/>
      <Button text="Projects" color="blue"/>
      <Button text="Tech Stack" color="orange"/>
    </div>
  );
}
