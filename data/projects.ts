import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "red-tetris",
    title: "Red Tetris",
    description: "Real-time multiplayer Tetris game built as a SPA.",
    content: [
      {
        type: "text",
        content: "A modern full-stack JavaScript architecture with a React frontend and a Node.js backend. Real-time gameplay is powered by Socket.IO, data persistence is managed with Prisma, and the UI combines Material UI with Tailwind CSS. The codebase is covered by Jest tests and integrated into a CI pipeline using GitHub Actions."
      }
    ],
    tags: ["Javascript", "React", "NodeJS", "PrismaDB", "Jest"],
    year: 2026,
  },
  {
    slug: "malloc",
    title: "Malloc",
    description: "Custom implementation of malloc, free and realloc in C, focusing on memory management and performance.",
    content: [
      {
        type: "text",
        content: "A low-level memory allocator written in C using mmap. The project implements zone-based allocation (TINY, SMALL, LARGE), free list management, block splitting and alignment while respecting strict constraints on performance and memory safety."
      }
    ],

    tags: ["C", "Unix", "Memory", "System"],
    year: 2025,
  },
  {
    slug: "ls",
    title: "ft_ls",
    description: "Reimplementation of the Unix ls command with support for common flags.",
    content: [
      {
        type: "text",
        content: "A faithful reimplementation of ls in C, handling file metadata, permissions, sorting, recursion, and flags such as -l, -a and -R. The project emphasizes clean architecture, efficient directory traversal, and strict adherence to Unix behavior."
      }
    ],

    tags: ["C", "Unix", "Filesystem", "System"],
    year: 2025,
  },
  {
    slug: "libasm",
    title: "Libasm",
    description: "Low-level reimplementation of standard C library functions in x86-64 assembly.",
    content: [
      {
        type: "text",
        content: "A minimal libc written in assembly, including functions like strlen, strcpy, strcmp, read and write. This project focuses on understanding calling conventions, registers, syscalls, and low-level program execution."
      }
    ],

    tags: ["Assembly", "x86-64", "Low-level"],
    year: 2025,
  },
  {
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
    year: 2025,
  },
  {
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
      {
        type: "text",
        content: "The game rendering and animations are handled with THREE.js, enabling smooth real-time visuals directly in the browser.",
      },
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
    year: 2025,
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    description: "Personal developer portfolio showcasing projects and technical experience.",
    content: [
      {
        type: "text",
        content: "A clean, modern portfolio designed to present selected projects, technical skills, and background. Built with a focus on performance, accessibility, responsive design, and maintainable UI architecture."
      }
    ],

    tags: ["React", "TypeScript", "UI"],
    year: 2026,
  },
  {
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
    year: 2025,
  },
  {
    slug: "cub3d",
    title: "Cub3D",
    description: "3D game engine based on raycasting, inspired by Wolfenstein 3D.",
    content: [
      {
        type: "text",
        content: "A first-person rendering engine written in C using raycasting techniques. The project handles texture mapping, player movement, collision detection, and real-time rendering using a minimal graphics library."
      }
    ],

    tags: ["C", "Graphics", "Raycasting"],
    year: 2024,
  },
  {
    slug: "webserv",
    title: "Webserv",
    description: "Custom HTTP web server written in C++ following HTTP/1.1 specifications.",
    content: [
      {
        type: "text",
        content: "A fully functional web server supporting multiple clients, non-blocking I/O, CGI execution, configuration files, and HTTP compliance. Inspired by Nginx, the project focuses on robustness, performance, and protocol correctness."
      }
    ],

    tags: ["C++98", "Network", "HTTP"],
    year: 2025,
  },
  {
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
    year: 2025,
  },
  {
    slug: "multilayer-percetron",
    title: "Multilayer Perceptron",
    description: "Neural network implementation from scratch for classification tasks.",
    content: [
      {
        type: "text",
        content: "A machine learning project implementing a multilayer perceptron without external ML libraries. Covers forward propagation, backpropagation, gradient descent, and performance evaluation on real datasets."
      }
    ],

    tags: ["Machine Learning", "Neural Networks", "Math"],
    year: 2025,
  },
  {
    slug: "dslr",
    title: "DSLR",
    description: "Data Science and Logistic Regression project from scratch.",
    content: [
      {
        type: "text",
        content: "An end-to-end data science project implementing logistic regression manually. Includes data normalization, training, evaluation, and visualization, with a focus on mathematical foundations."
      }
    ],

    tags: ["Data Science", "Logistic Regression", "Python"],
    year: 2025,
  },
  {
    slug: "abstract_data",
    title: "Abstract Data",
    description: "Implementation from scratch of std::vector and std::list in c++98",
    content: [
      {
        type: "text",
        content: "A collection of classic data structures implemented from scratch, focusing on correctness, complexity analysis, and clean APIs. Covers stacks, queues, trees, and other foundational structures."
      }
    ],

    tags: ["C++98", "Algorithms", "Data Structures"],
    year: 2025,
  },
];
