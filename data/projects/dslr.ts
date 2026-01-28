import { Project } from "@/types/project";

const dslr: Project = {
  slug: "dslr",
  title: "DSLR",
  description: "Data Science and Logistic Regression project from scratch.",
  content: [
    {
      type: "text",
      content: "An end-to-end data science project implementing logistic regression manually. Includes data normalization, training, evaluation, and visualization, with a focus on mathematical foundations."
    }
  ],
  tags: ["Data Science", "Logistic Regression", "Python"],
  completionDay: new Date("2025-04-09"),
}

export default dslr;
