import ProjectClient from "./components/ProjectClient";
import getProject from "../../utils/project"
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage(props: Props) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (<ProjectClient project={project}/>);
}