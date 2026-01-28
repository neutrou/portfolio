import { Project } from "@/types/project";

const malloc: Project = {
  slug: "malloc",
  title: "Malloc",
  description: "Custom implementation of malloc, free and realloc in C, focusing on memory management and performance.",
  content: [
    {
      type: "text",
      content: "A low-level memory allocator written in C using mmap. The project implements zone-based allocation (TINY, SMALL, LARGE), free list management, block splitting and alignment while respecting strict constraints on performance and memory safety."
    }
  ],
  tags: ["C", "Unix", "Memory", "System"],
  year: 2025,
}

export default malloc;
