import { ProjectContentBlock } from "./contentBlock";

export type Project = {
  slug: string;
  title: string;
  description: string;
  content: ProjectContentBlock[];
  tags: string[];
  pictures?: string[];
  year: number;
  link?: string;
};
