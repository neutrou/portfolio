import { Project } from "@/types/project";

const gomoku: Project = {
  slug: "gomoku",
  title: "Gomoku",
  description: "AI-powered Gomoku game with a focus on game logic and decision-making.",
  content: [
    {
      type: "text",
      content: "An implementation of the Gomoku board game featuring an AI opponent based on heuristic evaluation and search algorithms. The project explores game trees, scoring strategies, and optimization techniques for turn-based games."
    }
  ],
  tags: ["C++17", "AI", "Game Theory", "Algorithms", "Qt5", "Min-Max"],
  completionDay: new Date("2025-10-10"),
}

export default gomoku;