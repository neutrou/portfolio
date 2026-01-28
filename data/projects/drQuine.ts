import { Project } from "@/types/project";

const drQuine: Project =   {
  slug: "dr-quine",
  title: "Dr Quine",
  description: "Self-replicating programs exploring recursion and code generation.",
  content: [
    {
      type: "text",
      content: "A set of quines written in multiple languages, designed to output their own source code. This project explores recursion, macros, and metaprogramming concepts while adhering to strict constraints."
    }
  ],
  tags: ["C", "x86-64", "Recursion", "Metaprogramming"],
  completionDay: new Date("2025-04-14"),
}

export default drQuine;
