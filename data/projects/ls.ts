import { Project } from "@/types/project";

const ls: Project = {
  slug: "ls",
  title: "ft_ls",
  description: "Reimplementation of the Unix ls command with support for common flags.",
  content: [
    {
      type: "text",
      content: "A faithful reimplementation of ls in C, handling file metadata, permissions, sorting, recursion, and flags such as -l, -a and -R. The project emphasizes clean architecture, efficient directory traversal, and strict adherence to Unix behavior."
    }
  ],
  tags: ["C", "Unix", "Filesystem", "System"],
  year: 2025,
}

export default ls;
