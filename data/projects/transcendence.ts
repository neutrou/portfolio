import { Project } from "@/types/project";

const transcendence: Project = {
  slug: "ft-transcendence",
  title: "Transcendence",
  description: "Full-stack multiplayer Pong game with real-time features and user management.",
  content: [
    {
      type: "image",
      src: "login",
      alt: "The login page of the website"
    },
    {
      type: "text",
      content: "A full-stack multiplayer Pong platform built with a JavaScript frontend and a Django backend, designed around real-time interaction and strong security guarantees.",
    },
    {
      type: "image",
      src: "profile",
      alt: "The profile page of the website"
    },
    // {
    //   type: "text",
    //   content: "The game rendering and animations are handled with THREE.js, enabling smooth real-time visuals directly in the browser.",
    // },
    {
      type: "image",
      src: "game",
      alt: "A top view of the game being played."
    },
    {
      type: "text",
      content: "The application features OAuth2 authentication with optional 2FA, live matchmaking, real-time gameplay, and an integrated chat system supporting both public and private conversations.",
    },
    {
      type: "image",
      src: "leaderboard",
      alt: "The leaderboard page of the website"
    },
    {
      type: "text",
      content: "User profiles track match history, statistics, and achievements, unlocking visual customizations such as earned color themes.",
    },
    {
      type: "image",
      src: "achievements",
      alt: "The achievements page of the website"
    },
    {
      type: "text",
      content: "The backend relies on PostgreSQL for persistence and JWT for secure session handling, while the entire infrastructure is containerized with Docker.",
    },
    {
      type: "image",
      src: "custom",
      alt: "The customization page of the website"
    },
    {
      type: "text",
      content: "Observability and system health are ensured through a complete monitoring stack including Prometheus, Grafana, ElasticSearch, and cAdvisor, with real-time admin dashboards providing deep visibility into application activity.",
    },
    {
      type: "image",
      src: "credits",
      alt: "The credit page of the website"
    },
  ],
  tags: ["Javascript", "Python", "PostgreSQL", "ELK", "Django", "Docker Compose"],
  completionDay: new Date("2025-02-27"),
}

export default transcendence;