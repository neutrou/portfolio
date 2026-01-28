import { Project } from "@/types/project";

const cub3D: Project = {
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
}

export default cub3D;
