import { Project } from "@/types/project";

const redTetris: Project = {
  slug: "red-tetris",
  title: "Red Tetris",
  description: "Real-time multiplayer Tetris game built as a SPA.",
  content: [
    {
      type: "text",
      content: "A modern full-stack tetris game built only in JavaScript with a React frontend and a Node.js backend."
    },
    {
      type: "image",
      src: "login",
      alt: "The login page of the website",
    },
    {
      type: "text",
      content: "Real-time gameplay is powered by Socket.IO, data persistence is managed with Prisma, and the UI combines Material UI with Tailwind CSS."
    },
    {
      type: "image",
      src: "menu",
      alt: "The menu page of the website",
    },
    {
      type: "text",
      content: "The codebase is covered by Jest tests and integrated into a CI pipeline using GitHub Actions."
    },
    {
      type: "image",
      src: "solo",
      alt: "The game being played in solo mode",
    },
  ],
  tags: ["Javascript", "React", "NodeJS", "PrismaDB", "Jest"],
  year: 2026,
}

export default redTetris;
