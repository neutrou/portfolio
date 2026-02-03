import { Project } from "@/types/project";

const webserv: Project = {
  slug: "webserv",
  title: "Webserv",
  description: "Custom HTTP web server written in CPP following HTTP/1.1 specifications.",
  content: [
    {
      type: "text",
      content: "A fully functional web server supporting multiple clients, non-blocking I/O, CGI execution, configuration files, and HTTP compliance. Inspired by Nginx, the project focuses on robustness, performance, and protocol correctness."
    }
  ],
  tags: ["CPP98", "Network", "HTTP"],
  completionDay: new Date("2024-11-07"),
}

export default webserv;
