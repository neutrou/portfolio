import { Project } from "@/types/project";

const portfolio: Project = {
  slug: "portfolio",
  title: "Portfolio",
  description: "Personal developer portfolio showcasing projects and technical experience.",
  content: [
    {
      type: "text",
      content:
        "A personal developer portfolio built to clearly present selected projects, technical skills, and background, with an emphasis on clarity, performance, and long-term maintainability."
    },
    {
      type: "image",
      src: "menu",
      alt: "the main page of the portfolio"
    },
    {
      type: "text",
      content:
        "The application is built with Next.js and React, using TypeScript throughout the codebase to ensure strong type safety, predictable behavior, and easier refactoring as the project evolves."
    },
    {
      type: "image",
      src: "project-example0",
      alt: "one of the projects page"
    },
    {
      type: "text",
      content:
        "Styling is handled with Tailwind CSS, enabling a responsive, consistent design system while keeping the UI implementation lightweight and easy to iterate on."
    },
    {
      type: "image",
      src: "project-example1",
      alt: "another one of the projects page, but on mobile"
    },
    {
      type: "text",
      content:
        "The portfolio follows a component-driven architecture, with reusable UI primitives and structured content blocks to keep presentation and data cleanly separated."
    },
    {
      type: "image",
      src: "projects",
      alt: "the /project page, but on mobile"
    },
    {
      type: "text",
      content:
        "Deployed on Vercel, the project benefits from automatic builds, optimized asset delivery, and fast global performance, aligning with the goal of a smooth and reliable user experience."
    }
  ],
  tags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vercel", "UI"],
  completionDay: new Date("2026-02-02"),
};

export default portfolio;
