import { Project } from "@/types/project";

const libasm: Project = {
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
}

export default libasm;
