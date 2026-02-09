import { Project } from "@/types/project";

const redTetris: Project = {
  slug: "red-tetris",
  title: "Red Tetris",
  description: "Real-time multiplayer Tetris game built as a SPA.",
  content: [
    {
      type: "text",
      content:
        "A modern full-stack Tetris game built entirely in JavaScript, designed as a single-page application with a React frontend and a Node.js backend."
    },
    {
      type: "text",
      content:
        "The project focuses on real-time multiplayer gameplay, requiring low-latency communication, synchronized state, and responsive UI updates."
    },
    {
      type: "image",
      src: "login",
      alt: "Login page of the Red Tetris application"
    },
    {
      type: "text",
      content:
        "Real-time interactions are powered by Socket.IO, enabling live multiplayer matches and spectator features. Game data and user persistence are handled through Prisma and a relational database."
    },
    {
      type: "image",
      src: "menu",
      alt: "Main menu and matchmaking interface"
    },
    {
      type: "text",
      content:
        "The user interface combines Material UI components with Tailwind CSS, balancing rapid development with control over layout and styling."
    },
    {
      type: "image",
      src: "solo",
      alt: "Solo gameplay mode in Red Tetris"
    },
    {
      type: "text",
      content:
        "The codebase is covered by automated tests written with Jest and integrated into a CI pipeline using GitHub Actions to ensure reliability and prevent regressions."
    }
  ],
  tags: [
    "JavaScript",
    "React",
    "Node.js",
    "Socket.IO",
    "Prisma",
    "Real-time",
    "Multiplayer"
  ],
  completionDay: new Date("2026-01-23"),
};

export default redTetris;
