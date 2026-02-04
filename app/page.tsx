"use client"

import Icon from "./components/Icon"
import Link from "next/link"
import ProjectCard from "./components/ProjectCard"
import Separator from "./components/Separator";

export default function Home() {
  return (
    <div className="size-full flex justify-center">
      <div className="flex flex-col gap-10 page-padding md:flex-row md:gap-0 lg:max-w-[90%]">
        {/* DESCRIPTION */}
        <div className="md:min-w-[50%]">
          <div className="flex flex-col gap-2.5 md:h-[88%] md:justify-between md:fixed">
            <div className="flex flex-col gap-1.25">
              <h1 className="title">Victor Algranti</h1>
              <h2 className="subtitle">Software Engineer</h2>
              <p className="default max-w-80 lg:max-w-110">I build software and solutions to complex problems.</p>
            </div>
            <div className="flex flex-row gap-4 md:justify-center">
              <Icon url={"github"} width={35} height={35}/>
              <Icon url={"linkedin"} width={35} height={35}/>
            </div>
          </div>
        </div>
        {/* CONTENT */}
        <div className="flex flex-col gap-10">
          {/* ABOUT */}
          <div className="flex flex-col gap-3.75">
            <h2 className="subtitle flex flex-col">About</h2>
            <p className="default">I am a work-driven junior developer, who loves learning, solving problems, and helping others grow.</p>
            <p className="default">Currently studying at 42, I am an active member of the student association committee.</p>
            <p className="default">I am curious, and have different interests including machine learning, user interfaces, both board and video games.</p>
            <p className="default">Outside of my studies, you can usually find me climbing, playing video games, or building side projects to solve dumb tasks.</p>
          </div>
          {/* RECENT PROJECTS */}
          <div className="flex flex-col gap-7.5">
            <h2 className="subtitle">Recent Projects</h2>
            <Separator />
            <ProjectCard slug={"red-tetris"}/>
            <Separator />
            <ProjectCard slug={"ft-transcendence"}/>
            <Separator />
            <ProjectCard slug={"gomoku"}/>
            <Separator />
            <div className="flex justify-center">
              <Link
                href="/projects"
                className="bg-tag-bg tracking-[-5%] text-xl text-text-primary font-semibold rounded-md p-2 w-fit"
              >
                View full project archive
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
