import { Project } from "@/types/project";

const multilayerPerceptron: Project = {
  slug: "multilayer-percetron",
  title: "Multilayer Perceptron",
  description: "Neural network implementation from scratch for classification tasks.",
  content: [
    {
      type: "text",
      content:
        "A machine learning project implementing a fully connected multilayer perceptron from scratch, without relying on external machine learning frameworks."
    },
    {
      type: "image",
      src: "program",
      alt: "Command-line interface showcasing available options and usage information"
    },
    {
      type: "text",
      content:
      "The network supports forward propagation, backpropagation, and training via gradient-based optimization, including an implementation of the Adam optimizer for faster and more stable convergence."
    },
    {
      type: "image",
      src: "metrics",
      alt: "Training and evaluation metrics produced by the multilayer perceptron"
    },
    {
      type: "text",
      content:
      "Multiple activation functions are available, including ReLU and sigmoid, allowing the model to be adapted to different classification scenarios and dataset characteristics."
    },
    {
      type: "image",
      src: "lossgraph",
      alt: "Loss curve showing convergence during training"
    },
    {
      type: "text",
      content:
      "The architecture and training parameters are fully configurable through a dedicated configuration file, enabling control over network depth, layer sizes, learning rates, batch sizes, and activation functions without modifying the code."
    },
    {
      type: "image",
      src: "accuracygraph",
      alt: "Accuracy curve showing model performance over training epochs"
    },
  ],
  tags: [
    "Machine Learning",
    "Neural Network",
    "Adam Optimizer",
    "Math"
  ],
  completionDay: new Date("2025-08-20"),
};

export default multilayerPerceptron;
