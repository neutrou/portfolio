import { Project } from "@/types/project";

const abstractData: Project = {
  slug: "abstract_data",
  title: "Abstract Data",
  description: "Implementation from scratch of std::vector and std::list in c++98",
  content: [
    {
      type: "text",
      content: "A collection of classic data structures implemented from scratch, focusing on correctness, complexity analysis, and clean APIs. Covers stacks, queues, trees, and other foundational structures."
    }
  ],
  tags: ["C++98", "Algorithms", "Data Structures"],
  completionDay: new Date("2025-06-04"),
}

export default abstractData;
