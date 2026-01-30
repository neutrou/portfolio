import Link from "next/link";
import Title from "../components/Title";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  let sortedProjects = projects;
  sortedProjects.sort((a, b) => {return b.completionDay.valueOf() - a.completionDay.valueOf()});

  return (
    <div className="w-full h-fit page-padding">
      <div className="flex flex-col gap-10">
        {/*DESCRIPTION*/}
        <div className="flex flex-col">
          <Title title={"Projects"}/>
        </div>
        {/*CONTENT*/}
        <div>
          <div className="flex-1 flex flex-col">
              <div className="w-full flex flex-row tracking-tightest text-3xl font-bold text-text-primary text-left pb-2.5">
                <span className="w-[25%] pr-2">
                  Year
                </span>
                <span className="w-full pr-2 pl-2">
                  Project
                </span>
              </div>
              {
                sortedProjects.map((element, index) => {
                  return (
                    <Link
                      href={`/projects/${element.slug}`}
                      key={index}
                      className="flex flex-row tracking-tightest text-left text-2xl pt-0.5 pb-0.5"
                    >
                      <span className="w-[25%] text-text-secondary font-normal pr-2">
                        {element.completionDay.getFullYear()}
                      </span>
                      <span className="w-full text-text-primary font-normal pr-2 pl-2">
                        {element.title}
                      </span>
                    </Link>
                  )
                })
              }
          </div>
        </div>
      </div>
    </div>
  );
}
