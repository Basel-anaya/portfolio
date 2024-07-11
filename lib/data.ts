import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Data Scientist Intern",
    location: "Amman, Jordan",
    description:
      " As a Data Scientist Intern at ShAI for AI, I had the opportunity to work on several projects that allowed me to gain valuable experience and develop my skills in data science.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2022 - June 2023",
  },
  {
    title: "Machine Learning Engineer Fellow",
    location: "Amman, Jordan",
    description:
      "I have worked as a Machine Learning Engineer at Fellowship.ai. I have had the privilege to be part of a dynamic team working on projects at the intersection of LLMs and LangChain. This Fellowship has provided me with a unique opportunity to learn and apply my skills in a real-world setting.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2023 - Dec 2023",
  },
  {
    title: "Bachelor Graduate",
    location: "Amman, Jordan",
    description:
      "Officially graudated with a bachelor's degree in Artificial Intelligence at the University of Jordan.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct 2020 - July 2024",
  },
  {
    title: "Generative AI Engineer",
    location: "Amman, Jordan",
    description:
      "I'm now a GenAI engineer working at Digital Future.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2024 - present",
  }, 
] as const;

export const projectsData = [
  {
    title: "MedFormer: A Biomedical Vision-Language Model with RAG System",
    description:
      "MedFormer is an advanced Biomedical Vision-Language Model integrated with a RAG System, designed to address complex diagnostic challenges in healthcare. Utilizing cutting-edge technologies such as Idefics2, LLAMA-3, and Citrinet-512, MedFormer seamlessly integrates textual, visual, and auditory data.",
    tags: ["Torch", "VLM", "Azure", "Gradio", "RAG System"],
    imageUrl: corpcommentImg,
  },
  {
    title: "LoreWeaver: A Novels Generation Multimodal LLM",
    description:
      "LoreWeaver is a Novel/Stories Generation Multimodal LLM harnessing a fine-tuned Mistral 7B LLM. The model provides the ability for the impaired individuals to hear the generated stories via text-to-speech and supports the dyslexic individuals by transforming the text story into an image represented story via text-to-image.",
    tags: ["Torch", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Oculus: A Travel Agent RAG System",
    description:
      "A travel agent RAG System that utilizes Langchain and the Amadeus API within a Streamlit interface.",
    tags: ["Torch", "LangChain", "Streamlit", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Pytorch",
  "Apache Sparks",
  "JavaScript",
  "LLMs",
  "MongoDB",
  "Jax",
  "Tensorflow",
  "Git",
  "Python",
] as const;
