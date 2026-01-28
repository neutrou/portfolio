import { Project } from "@/types/project";

const ls: Project = {
  slug: "ls",
  title: "ls",
  description: "Reimplementation of the Unix ls command with support for common flags.",
  content: [
    {
      type: "text",
      content: "A faithful reimplementation of ls in C, handling file metadata, permissions, sorting, recursion, and flags such as -l, -a and -R. The project emphasizes clean architecture, efficient directory traversal, and strict adherence to Unix behavior."
    }
  ],
  tags: ["C", "Unix", "Filesystem", "System"],
  completionDay: new Date("2025-07-10"),
}

export default ls;
