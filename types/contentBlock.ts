export type ProjectContentBlock =
| {
    type: "text"
    content: string
  }
| {
    type: "image"
    src: string
    alt: string
  }

export type ImageBlock = Extract<ProjectContentBlock, { type: "image" }>;

export type TextBlock = Extract<ProjectContentBlock, { type: "text" }>;
