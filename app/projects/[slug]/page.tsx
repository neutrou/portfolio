import getProject from "../../utils/project"
import { notFound } from "next/navigation";
import Icon from "../../components/Icon";
import Link from "next/link"
import { highlightText } from "../../utils/project";
import ProjectImage from "@/app/components/ProjectImage";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage(props: ProjectPageProps) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }
  return (
    <div className="w-full h-fit">
      <div className="flex flex-col gap-10">
        <div className="flex-1 flex flex-row justify-between items-center">
          <h1 className="tracking-[-10%] text-[42px] font-bold text-text-primary">{project.title}</h1>
          <Link href="/">
            <Icon url="arrow" height={45} width={45}/>
          </Link>
        </div>
        <div className="tracking-[-10%] text-3xl font-semibold text-text-secondary flex flex-col gap-3">
          {project.content.map((element, index) => {
            if (element.type === "text")
              return (<p key={index}>{highlightText(element.content)}</p>);
            else 
              return (<ProjectImage key={index} slug={slug} contentBlock={element} />);
          })}
        </div>
      </div>
    </div>
  );
}