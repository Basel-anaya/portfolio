"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Artificial Intelligence</span>, I decided to apply my skills and knowledge in building, fine-tuning and deploying LLMs to develop and implement innovative solutions for social impact.{" "}
        <span className="italic">I am eager to further enhance my skills and create a meaningful impact through my work. Alongside my technical proficiency, I possess excellent communication and teamwork abilities, as well as a <span className="underline">quick learning curve</span>, a <span className="underline">vibrant personality</span>, and <span className="underline">resilience under pressure</span>.</span>
        {" "}
        I am also familiar with Pytorch and Jax. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a GenAI engineer.
      </p>

      <p>
        <span className="italic">When I'm not building models</span>, I enjoy playing
        video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">GPU Programming and Quantum Computing</span>. I'm also
        learning how to play the piano.
      </p>
    </motion.section>
  );
}
