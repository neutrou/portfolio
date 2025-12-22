import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "red_tetris",
    description: "Red Tetris is a real-time multiplayer Tetris game built as a Single Page Application. The frontend is developed with React, while the backend relies on Node.js and Express for a clean client/server architecture. Real-time gameplay and player synchronization are handled using Socket.IO. The project implements data persistence with a Prisma database, enabling reliable storage of game-related data. It also features automated testing with Jest and a continuous integration pipeline powered by GitHub Actions to ensure code quality and maintainability.",
    tags: ["2P", "js", "react", "nodejs", "prismadb", "jest", "githubActions"],
    year: 2025,
		preview: [""]
  },
];
