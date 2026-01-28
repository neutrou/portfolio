import { Project } from "@/types/project";

const expertSystem: Project = {
  slug: "expert-system",
  title: "Expert System",
  description: "Rule-based inference engine capable of logical reasoning.",
  content: [
    {
      type: "text",
      content: "An expert system implementing forward-chaining inference using propositional logic. The project parses rules, evaluates facts, resolves contradictions, and derives conclusions based on logical dependencies."
    }
  ],
  tags: ["AI", "Logic", "Inference"],
  completionDay: new Date("2025-08-18"),
}

export default expertSystem;
