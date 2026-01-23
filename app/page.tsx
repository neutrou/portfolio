"use client"

import Icon from "./components/Icon"
import ProjectCard from "./components/ProjectCard"
import Separator from "./components/Separator";

export default function Home() {
  return (
		<div className="flex flex-col gap-10">
			{/* DESCRIPTION */}
			<div className="flex flex-col gap-2.5">
				<div className="flex flex-col gap-1.25">
					<h1 className="title">Victor Algranti</h1>
					<h2 className="subtitle">Software Engineer</h2>
					<p className="default">I build software and solutions to complex problems, not big sentences to describe myself.</p>
				</div>
				<div className="flex flex-row gap-4">
					<Icon url={"github"}/>
					<Icon url={"linkedin"}/>
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
					<ProjectCard slug={"transcendance"}/>
				</div>
			</div>
		</div>
	);
}
