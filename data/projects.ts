import { Project } from "@/types/project";

export const projects: Project[] = [
  {
		slug: "red-tetris",
    title: "Red Tetris",
    description: "Real-time multiplayer Tetris game built as a Single Page Application. Features authentication, data persistence, automated testing and a CI pipeline",
    extendedDescription: "A modern full-stack JavaScript architecture with a React frontend and a Node.js backend. Real-time gameplay is powered by Socket.IO, data persistence is managed with Prisma, and the UI combines Material UI with Tailwind CSS. The codebase is covered by Jest tests and integrated into a CI pipeline using GitHub Actions.",
    tags: ["Javascript", "React", "NodeJS", "PrismaDB", "Jest"],
    year: 2026,
  },
  {
    slug: "transcendance",
    title: "Transcendance",
    description: "Full-stack web application designed as a modern multiplayer Pong game with authentication, chat, customization, and matchmaking features. This project aims to provide a seamless gaming experience with real-time interactions.",
    extendedDescription: "A modern full-stack JavaScript architecture with a React frontend and a Node.js backend. Real-time gameplay is powered by Socket.IO, data persistence is managed with Prisma, and the UI combines Material UI with Tailwind CSS. The codebase is covered by Jest tests and integrated into a CI pipeline using GitHub Actions.",
    tags: ["Javascript", "React", "NodeJS", "PrismaDB", "Jest"],
    year: 2026,
  },
];
