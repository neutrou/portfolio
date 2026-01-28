import Link from "next/link";
import Icon from "../components/Icon";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  let sortedProjects = projects;
  sortedProjects.sort((a, b) => {return b.completionDay.valueOf() - a.completionDay.valueOf()});

  return (
    <div className="flex flex-col gap-10">
      {/*DESCRIPTION*/}
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h1 className="tracking-tightest text-[42px] font-bold text-text-primary">Projects</h1>
          <Link href="/">
            <Icon url="arrow" height={45} width={45}/>
          </Link>
        </div>
      </div>
      {/*CONTENT*/}
      <div>
        <div className="flex-1 flex flex-col">
            <div className="w-full flex flex-row tracking-tightest text-3xl font-bold text-text-primary text-left">
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
                  <div
                    key={index+1}
                    className="flex flex-row tracking-tightest text-left text-2xl hover:bg-tag-bg hover:pt-2 hover:pb-2 transition-all duration-300"
                  >
                    <span className="w-[25%] text-text-secondary font-normal pr-2">
                      {element.completionDay.getFullYear()}
                    </span>
                    <span className="w-full text-text-primary font-normal pr-2 pl-2">
                      {element.title}
                    </span>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>
  );
}
