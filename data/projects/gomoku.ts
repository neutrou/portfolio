import { Project } from "@/types/project";

const gomoku: Project = {
  slug: "gomoku",
  title: "Gomoku",
  description: "Advanced Gomoku engine with a reusable Minimax AI, graphical interface, and algorithm arena.",
  content: [
    {
      type: "image",
      src: "menu",
      alt: "The main menu of the Gomoku application"
    },
    {
      type: "text",
      content:
        "A Gomoku application built on a robust, reusable Minimax engine with a Qt5 graphical interface",
    },
    {
      type: "image",
      src: "board0",
      alt: "An early game Gomoku board state"
    },
    {
      type: "text",
      content:
        "The game supports classic Gomoku rules with advanced state management, allowing players to save and restore any ongoing match.",
    },
    {
      type: "image",
      src: "board1",
      alt: "A mid-game Gomoku board with complex patterns"
    },
    {
      type: "text",
      content:
        "A full move history system enables navigation through past turns, making it possible to analyze games and replay scenarios."
    },
    {
      type: "image",
      src: "board2",
      alt: "A late-game Gomoku board close to victory"
    },
    {
      type: "text",
      content:
        "The project uses a custom Minimax engine with alpha-beta pruning, transposition tables, killer moves, null-move pruning, and iterative deepening for efficient decision making. Implemented as a standalone CPP library, it’s fully separated from the UI for reuse in testing or other turn-based games.",
    },
    {
      type: "image",
      src: "tester",
      alt: "Automated testing interface for the Gomoku engine"
    },
    {
      type: "text",
      content:
        "The AI engine is tested via automated scenarios and CLI tools for correctness and performance.",
    },
    {
      type: "image",
      src: "cli0",
      alt: "Command-line interface game mode"
    },
    {
      type: "text",
      content:
        "An cli arena mode allows multiple AI configurations to compete against each other, making the project a complete experimentation platform for game AI.",
    },
    {
      type: "image",
      src: "cli1",
      alt: "CLI-based AI versus AI match output"
    },
  ],
  tags: ["CPP", "Qt5", "Minimax", "AI", "Algorithms", "Game Engine"],
  completionDay: new Date("2025-12-15"),
};

export default gomoku;
