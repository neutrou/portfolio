import Link from "next/link";
import Title from "../components/Title";
import { projects } from "@/data/projects";
import Tag from "../components/Tag";

export default function ProjectsPage() {
  let sortedProjects = projects;
  sortedProjects.sort((a, b) => {return b.completionDay.valueOf() - a.completionDay.valueOf()});

  return (
    <div className="w-full h-fit page-padding flex justify-center">
      <div className="flex flex-col gap-10 size-fit">
        {/*DESCRIPTION*/}
        <div className="flex flex-col">
          <Title title={"Projects"}/>
        </div>
        {/*CONTENT*/}
        <div>
          <div className="flex flex-col w-fit lg:gap-1">
              <div className="w-full flex flex-row tracking-tightest text-3xl font-bold text-text-primary text-left pb-2.5 lg:text-4xl">
                <span className="min-w-14 pr-2 lg:min-w-20">
                  Year
                </span>
                <span className="min-w-54 pr-2 pl-2 lg:min-w-80">
                  Project
                </span>
                <span className="hidden md:flex md:min-w-125 lg:min-w-150">
                  Tags
                </span>
              </div>
              {
                sortedProjects.map((element, index) => {
                  return (
                    <Link
                      href={`/projects/${element.slug}`}
                      key={index}
                      className="flex flex-row tracking-tightest text-left text-2xl pt-0.5 pb-0.5 lg:text-3xl"
                    >
                      <span className="min-w-14 text-text-secondary font-normal pr-2 lg:min-w-20">
                        {element.completionDay.getFullYear()}
                      </span>
                      <span className="min-w-54 text-text-primary font-normal pr-2 pl-2 lg:min-w-80">
                        {element.title}
                      </span>
                      <span className="hidden text-text-primary font-normal pr-2 pl-2 md:w-125 md:flex lg:min-w-150 flex-row gap-4">
                        {element.tags.map((ele, i) => {
                          return <Tag key={i}>{ele}</Tag>
                        })}
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
